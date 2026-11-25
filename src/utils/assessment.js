import { ASSESSMENT_STEPS, isFieldValid } from "./assessmentFields";

export const DEFAULT_ASSESSMENT = Object.fromEntries(
  ASSESSMENT_STEPS.flatMap((step) => step.fields.map((field) => [field.name, ""])),
);
const STORAGE_KEY = "medicast-assessment-v3";

export const readAssessment = () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return Object.fromEntries(Object.entries(DEFAULT_ASSESSMENT).map(
      ([key, fallback]) => {
        const field = ASSESSMENT_STEPS.flatMap((step) => step.fields).find((item) => item.name === key);
        return [key, isFieldValid(field, saved?.[key]) ? saved[key] : fallback];
      },
    ));
  } catch {
    return { ...DEFAULT_ASSESSMENT };
  }
};

export const saveAssessment = (assessment) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(assessment));
  } catch {
    // Continue the questionnaire when browser storage is unavailable.
  }
};

export const getBMI = ({ height, weight }) => {
  const meters = Number(height) / 100;
  const bmi = Number(weight) / (meters * meters);
  return Number.isFinite(bmi) && bmi > 0 ? Math.round(bmi * 10) / 10 : 19.5;
};
