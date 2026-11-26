// Illustrative scenario assumptions, not clinically validated effect sizes.
export function calculateLifestyleScenario(baselineCost, initial, changed) {
  if (baselineCost == null || !Number.isFinite(Number(baselineCost)) || Number(baselineCost) < 0 ||
      !Number.isFinite(initial.bmi) || !Number.isFinite(changed.bmi) ||
      !["regular", "none"].includes(initial.exercise) || !["regular", "none"].includes(changed.exercise)) {
    throw new Error("시뮬레이션 기준 정보를 확인할 수 없습니다.");
  }
  const before = Number(baselineCost);
  const bmiSteps = Math.round((changed.bmi - initial.bmi) * 10);
  const exerciseSteps = Number(changed.exercise === "none") - Number(initial.exercise === "none");
  const percentage = Math.max(-30, Math.min(30, (bmiSteps * 2 + exerciseSteps * 50) / 10));
  const after = Math.round(before * (1 + percentage / 100) * 100) / 100;
  return { before, after, difference: after - before, percentage };
}
