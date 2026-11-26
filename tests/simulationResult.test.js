import test from "node:test";
import assert from "node:assert/strict";
import { evaluateSimulation } from "../src/utils/simulationResult.js";

const make = (beforeBMI, afterBMI, beforeExercise, afterExercise, beforeCost, afterCost) => ({
  before: { bmi: beforeBMI, exercises: beforeExercise, predictedAnnualMedicalCost: beforeCost },
  after: { bmi: afterBMI, exercises: afterExercise, predictedAnnualMedicalCost: afterCost },
  annualMedicalCostDifference: afterCost - beforeCost,
});

test("exercise stops and BMI increases: reversed model response is flagged without altering it", () => {
  const result = make(23, 28, true, false, 1000000, 800000);
  const observed = evaluateSimulation(result, { predictedAnnualMedicalCost: 1000000 });
  assert.equal(observed.reversed, true);
  assert.equal(observed.after, 800000);
  assert.equal(observed.difference, -200000);
});

test("BMI moves toward normal and exercise starts: reversed model response is flagged", () => {
  const observed = evaluateSimulation(make(29, 23, false, true, 1000000, 1300000));
  assert.equal(observed.reversed, true);
  assert.equal(observed.difference, 300000);
});

test("expected direction and unchanged conditions are not flagged", () => {
  assert.equal(evaluateSimulation(make(23, 29, true, false, 1000000, 1200000)).reversed, false);
  assert.equal(evaluateSimulation(make(29, 23, false, true, 1000000, 900000)).reversed, false);
  assert.equal(evaluateSimulation(make(23, 23, true, true, 1000000, 900000)).reversed, false);
});

test("underweight BMI reducing further is not incorrectly considered improvement", () => {
  assert.equal(evaluateSimulation(make(18, 16, true, true, 1000000, 900000)).reversed, true);
});

test("opposing condition changes do not assume one overall direction", () => {
  assert.equal(evaluateSimulation(make(23, 29, false, true, 1000000, 900000)).reversed, false);
});

test("invalid or inconsistent API results are rejected", () => {
  assert.throws(() => evaluateSimulation({}), /응답/);
  assert.throws(() => evaluateSimulation({ ...make(23, 28, true, false, 1000000, 900000), annualMedicalCostDifference: 100000 }), /차액/);
  assert.throws(() => evaluateSimulation(make(23, 28, true, false, 1000000, 900000), { predictedAnnualMedicalCost: 500000 }), /기준 금액/);
});
