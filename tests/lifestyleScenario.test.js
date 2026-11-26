import test from "node:test";
import assert from "node:assert/strict";
import { calculateLifestyleScenario } from "../src/utils/lifestyleScenario.js";
const scenario = (bmi, exercise, nextBmi, nextExercise) => calculateLifestyleScenario(1000000, { bmi, exercise }, { bmi: nextBmi, exercise: nextExercise });
test("both changes increase or decrease the illustrative amount", () => {
  assert.equal(scenario(23, "regular", 26, "none").percentage, 11);
  assert.equal(scenario(26, "none", 23, "regular").percentage, -11);
});
test("opposite changes offset one another", () => {
  assert.equal(scenario(23, "none", 24, "regular").percentage, -3);
  assert.equal(scenario(23, "none", 26, "regular").percentage, 1);
  assert.equal(scenario(26, "regular", 25, "none").percentage, 3);
  assert.equal(scenario(26, "regular", 23, "none").percentage, -1);
  assert.equal(scenario(23, "none", 25.5, "regular").percentage, 0);
});
test("unchanged, bounded and missing inputs", () => {
  assert.equal(scenario(23, "regular", 23, "regular").after, 1000000);
  assert.equal(scenario(15, "regular", 40, "none").percentage, 30);
  assert.equal(scenario(40, "none", 15, "regular").percentage, -30);
  assert.throws(() => scenario(23, "", 24, "regular"));
});
