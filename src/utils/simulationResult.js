// Keep the externally trained model's prediction intact. Reversals are possible with
// tree ensembles and must not be silently turned into "medical savings".
const validCost = (value) => value !== null && value !== undefined
  && Number.isFinite(Number(value)) && Number(value) >= 0;

export function evaluateSimulation(result, baseline) {
  const before = Number(result?.before?.predictedAnnualMedicalCost);
  const after = Number(result?.after?.predictedAnnualMedicalCost);
  if (!validCost(result?.before?.predictedAnnualMedicalCost) ||
      !validCost(result?.after?.predictedAnnualMedicalCost)) {
    throw new Error("시뮬레이션 의료비 응답을 확인할 수 없습니다.");
  }
  if (validCost(baseline?.predictedAnnualMedicalCost) &&
      Math.abs(before - Number(baseline.predictedAnnualMedicalCost)) > 0.01) {
    throw new Error("예측 기준 금액이 일치하지 않습니다. 결과 페이지에서 다시 시도해주세요.");
  }
  const bmiBefore = Number(result?.before?.bmi);
  const bmiAfter = Number(result?.after?.bmi);
  if (!Number.isFinite(bmiBefore) || !Number.isFinite(bmiAfter) ||
      typeof result?.before?.exercises !== "boolean" ||
      typeof result?.after?.exercises !== "boolean") {
    throw new Error("시뮬레이션 조건 응답을 확인할 수 없습니다.");
  }
  const diff = after - before;
  const apiDiff = Number(result?.annualMedicalCostDifference);
  if (!Number.isFinite(apiDiff) || Math.abs(diff - apiDiff) > 0.01) {
    throw new Error("시뮬레이션 차액이 예측 금액과 일치하지 않습니다.");
  }
  // BMI moving toward the conventional normal range is a different claim
  // from BMI merely decreasing: underweight can also be a health risk.
  const bmiRisk = (bmi) => bmi < 18.5 ? 18.5 - bmi : bmi > 24.9 ? bmi - 24.9 : 0;
  const bmiChange = Math.sign(bmiRisk(bmiAfter) - bmiRisk(bmiBefore));
  const exerciseChange = Number(!result.after.exercises) - Number(!result.before.exercises);
  const expectedDirection = bmiChange === 0 ? exerciseChange
    : exerciseChange === 0 || bmiChange === exerciseChange ? bmiChange : 0;
  const reversed = expectedDirection !== 0 && Math.sign(diff) === -expectedDirection;
  return { before, after, difference: diff, reversed, bmiChange, exerciseChange };
}
