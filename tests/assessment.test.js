import test from "node:test";
import assert from "node:assert/strict";
import { ASSESSMENT_STEPS, isFieldValid, isAssessmentValid, toPredictionInput } from "../src/utils/assessmentFields.js";

const valid = {
  householdSize: "2", region: "서울특별시", occupation: "31", income: "4500-7500",
  height: "165", weight: "55", exercise: "regular", healthStatus: "normal",
  activityLimitation: "1", anxietyDepression: "1", outpatientVisits: "5", dentalVisits: "1",
  hospitalized: "0", healthInsurance: "1", indemnityInsurance: "1",
};
test("15 answers produce the exact documented AI request", () => {
  assert.equal(ASSESSMENT_STEPS.flatMap((step) => step.fields).length, 15);
  assert.equal(isAssessmentValid(valid), true);
  assert.deepEqual(toPredictionInput(valid), {
    ingun: 2, income: 5880, health_ins: 1, region1: 11, self_rated_health: 3,
    height: 165, weight: 55, exercise: 1, ougun: 5, ougun_dent: 1,
    indemnity_insurance: 1, hospitalized_year: 0, activity_limitation: 1, anxiety_depression: 1, eco9: 31,
  });
});
test("all requested income, region, occupation and insurance codes map exactly", () => {
  const fields = ASSESSMENT_STEPS[0].fields;
  for (const [index, code] of [1570.5, 3380, 5880, 10160].entries()) {
    assert.equal(toPredictionInput({ ...valid, income: fields[3].options[index].value }).income, code);
  }
  for (const [index, code] of [11,26,27,28,29,30,31,36,41,42,43,44,45,46,47,48,50].entries()) {
    assert.equal(toPredictionInput({ ...valid, region: fields[1].options[index].value }).region1, code);
  }
  for (const code of [14,24,31,42,52,61,78,87,94]) {
    assert.equal(toPredictionInput({ ...valid, occupation: String(code) }).eco9, code);
  }
  for (const code of [1,2,3,4,5,6,7]) {
    assert.equal(toPredictionInput({ ...valid, healthInsurance: String(code) }).health_ins, code);
  }
  const missing = toPredictionInput({ ...valid, healthInsurance: "none", occupation: "none", exercise: "none", hospitalized: "1", indemnityInsurance: "0" });
  assert.equal(missing.health_ins, null);
  assert.equal(missing.eco9, null);
  assert.equal(missing.exercise, 2);
  assert.equal(missing.hospitalized_year, 1);
  assert.equal(missing.indemnity_insurance, 0);
});
test("blank, negative, nonfinite and fractional counts are rejected; zero visits are valid", () => {
  for (const [name, value] of [["householdSize", "0"], ["householdSize", "11"], ["householdSize", "1.5"], ["height", "0"], ["weight", "Infinity"], ["outpatientVisits", "-1"], ["dentalVisits", "0.5"], ["healthInsurance", ""], ["income", "3000-4000"]]) {
    assert.equal(isAssessmentValid({ ...valid, [name]: value }), false);
    assert.throws(() => toPredictionInput({ ...valid, [name]: value }));
  }
  assert.equal(isAssessmentValid({ ...valid, outpatientVisits: "0", dentalVisits: "0" }), true);
  assert.equal(isFieldValid(ASSESSMENT_STEPS[0].fields[0], "10"), true);
});
