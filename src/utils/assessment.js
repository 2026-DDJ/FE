// Current AI FEATURES shared by the existing questionnaire (AI main: cc24afa).
// This is only the UI subset, not the complete 22/28-feature inference payload.
export const DEFAULT_ASSESSMENT = {
  region: "서울특별시",
  income: "3000-4000",
  height: "160",
  weight: "50",
  healthStatus: "very-good",
  exercise: "regular",
};
const STORAGE_KEY = "medicast-assessment-v2";

export const readAssessment = () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return Object.fromEntries(Object.entries(DEFAULT_ASSESSMENT).map(
      ([key, fallback]) => [key, saved?.[key] ?? fallback],
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
