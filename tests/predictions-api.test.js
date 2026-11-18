import test from "node:test";
import assert from "node:assert/strict";
import { toBackendAssessment } from "../src/api/predictions.js";

const answers = {
  householdSize: "2", region: "서울특별시", occupation: "31", income: "4500-7500",
  height: "165", weight: "55", exercise: "regular", healthStatus: "normal",
  activityLimitation: "1", anxietyDepression: "2", outpatientVisits: "5",
  dentalVisits: "1", hospitalized: "0", healthInsurance: "1", indemnityInsurance: "1",
};

test("15 assessment fields match the Spring /predictions contract", () => {
  assert.deepEqual(toBackendAssessment(answers), {
    householdSize: 2, incomeRange: "4500-7500", healthInsuranceType: "1",
    region: "서울특별시", selfRatedHealth: "FAIR", heightCm: 165, weightKg: 55,
    exercises: true, outpatientVisitsLastYear: 5, dentalVisitsLastYear: 1,
    hasPrivateHealthInsurance: true, hospitalizedLastYear: false,
    activityLimitation: "NONE", anxietyDepression: "SOME", occupation: "31",
  });
});

test("negative answer, null-like enums, and extreme health statuses are correctly mapped", () => {
  const mapped = toBackendAssessment({
    ...answers, healthInsurance: "none", occupation: "none",
    exercise: "none", hospitalized: "1", indemnityInsurance: "0",
    activityLimitation: "3", anxietyDepression: "1", healthStatus: "very-bad",
  });
  assert.equal(mapped.healthInsuranceType, "none");
  assert.equal(mapped.occupation, "none");
  assert.equal(mapped.exercises, false);
  assert.equal(mapped.hospitalizedLastYear, true);
  assert.equal(mapped.hasPrivateHealthInsurance, false);
  assert.equal(mapped.activityLimitation, "SEVERE");
  assert.equal(mapped.anxietyDepression, "NONE");
  assert.equal(mapped.selfRatedHealth, "VERY_POOR");
});

test("invalid or incomplete assessments cannot be sent to the prediction API", () => {
  assert.throws(() => toBackendAssessment({ ...answers, dentalVisits: "-1" }));
  assert.throws(() => toBackendAssessment({ ...answers, region: "" }));
});
