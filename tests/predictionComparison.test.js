import test from "node:test";
import assert from "node:assert/strict";
import { getPredictionComparisons } from "../src/utils/predictionComparison.js";

test("maps current Swagger PredictionResponse comparison fields", () => {
  assert.deepEqual(getPredictionComparisons({
    predictedAnnualMedicalCost: 1443490,
    sameIncomeGroupMean: 1100000,
    sameOutpatientVisitsGroupMean: 1200000,
    overallMean: 1000000,
  }).map(({ cost }) => cost), [1443490, 1200000, 1100000, 1000000]);
});

test("missing means stay unavailable; zero and numeric strings are valid", () => {
  assert.deepEqual(getPredictionComparisons({
    predictedAnnualMedicalCost: "0", sameIncomeGroupMean: null,
    sameOutpatientVisitsGroupMean: undefined, overallMean: "1200000.00",
  }).map(({ cost }) => cost), [0, 1200000, null, null]);
});

test("my prediction stays first; available peer means sort descending", () => {
  const result = getPredictionComparisons({
    predictedAnnualMedicalCost: 900000,
    sameIncomeGroupMean: 1000000,
    sameOutpatientVisitsGroupMean: 3000000,
    overallMean: 2000000,
  });
  assert.deepEqual(result.map(({ cost }) => cost), [900000, 3000000, 2000000, 1000000]);
  assert.deepEqual(result.map(({ label }) => label), [
    "내 예상 의료비",
    "동일 외래 이용횟수 구간 평균 의료비",
    "전체 평균 의료비",
    "동일 소득 구간 평균",
  ]);
});
