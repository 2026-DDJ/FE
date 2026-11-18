import { apiRequest } from "./client";
import { isAssessmentValid } from "../utils/assessmentFields";

const HEALTH = ["VERY_GOOD", "GOOD", "FAIR", "POOR", "VERY_POOR"];
const DEGREE = { 1: "NONE", 2: "SOME", 3: "SEVERE" };

export function toBackendAssessment(data) {
  if (!isAssessmentValid(data)) throw new Error("설문 입력을 모두 완료해주세요.");
  return {
    householdSize: Number(data.householdSize),
    incomeRange: data.income,
    healthInsuranceType: data.healthInsurance,
    region: data.region,
    selfRatedHealth: HEALTH[["very-good", "good", "normal", "bad", "very-bad"].indexOf(data.healthStatus)],
    heightCm: Number(data.height),
    weightKg: Number(data.weight),
    exercises: data.exercise === "regular",
    outpatientVisitsLastYear: Number(data.outpatientVisits),
    dentalVisitsLastYear: Number(data.dentalVisits),
    hasPrivateHealthInsurance: data.indemnityInsurance === "1",
    hospitalizedLastYear: data.hospitalized === "1",
    activityLimitation: DEGREE[data.activityLimitation],
    anxietyDepression: DEGREE[data.anxietyDepression],
    occupation: data.occupation,
  };
}

const PREDICTION_ID_KEY = "medicast-prediction-id";
export function savePredictionId(id) {
  sessionStorage.setItem(PREDICTION_ID_KEY, String(id));
}
export function getPredictionId() {
  const id = Number(sessionStorage.getItem(PREDICTION_ID_KEY));
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

export async function createPrediction(assessment) {
  const response = await apiRequest("/predictions", {
    method: "POST", body: toBackendAssessment(assessment),
  });
  if (response?.id) savePredictionId(response.id);
  return response;
}
export const getPrediction = (id, signal) => apiRequest(`/predictions/${id}`, { signal });
export const simulatePrediction = (id, conditions) => apiRequest(
  `/predictions/${id}/simulations`,
  { method: "POST", body: { bmi: conditions.bmi, exercises: conditions.exercise === "regular" } },
);
