import test from "node:test";
import assert from "node:assert/strict";
import { getPredictionComparisons } from "../src/utils/predictionComparison.js";

test("maps current Swagger PredictionResponse comparison fields", () => {
  assert.deepEqual(getPredictionComparisons({
    predictedAnnualMedicalCost: 1443490,
    sameIncomeGroupMean: 1100000,
    sameOutpatientVisitsGroupMean: 1200000,
    overallMean: 1000000,
  }).map(({ cost }) => cost), [1443490, 1100000, 1200000, 1000000]);
});

test("missing means stay unavailable; zero and numeric strings are valid", () => {
  assert.deepEqual(getPredictionComparisons({
    predictedAnnualMedicalCost: "0", sameIncomeGroupMean: null,
    sameOutpatientVisitsGroupMean: undefined, overallMean: "1200000.00",
  }).map(({ cost }) => cost), [0, null, null, 1200000]);
});
