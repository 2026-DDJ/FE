import { ASSESSMENT_STEPS } from "./assessmentFields";

export const DEFAULT_ASSESSMENT = Object.fromEntries(
  ASSESSMENT_STEPS.flatMap((step) => step.fields.map((field) => [field.name, ""])),
);
export const getBMI = ({ height, weight }) => {
  const meters = Number(height) / 100;
  const bmi = Number(weight) / (meters * meters);
  return Number.isFinite(bmi) && bmi > 0 ? Math.round(bmi * 10) / 10 : 19.5;
};
