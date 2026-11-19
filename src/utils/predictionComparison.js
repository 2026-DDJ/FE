// PredictionResponse fields from the backend OpenAPI specification.
// Missing comparison statistics must remain unavailable, not zero.
const isCost = (value) => value !== null && value !== undefined
  && value !== "" && Number.isFinite(Number(value)) && Number(value) >= 0;

export function getPredictionComparisons(result) {
  return [
    { label: "내 예상 의료비", cost: result.predictedAnnualMedicalCost },
    { label: "동일 소득 구간 평균", cost: result.sameIncomeGroupMean },
    { label: "동일 외래 이용횟수 구간 평균 의료비", cost: result.sameOutpatientVisitsGroupMean },
    { label: "전체 평균 의료비", cost: result.overallMean },
  ].map(({ label, cost }) => ({ label, cost: isCost(cost) ? Number(cost) : null }));
}
