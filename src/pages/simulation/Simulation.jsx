import { useState } from "react";
import Header from "../../components/Header";
import { readAssessment, getBMI } from "../../utils/assessment";
import { formatMedicalCost } from "../../utils/formatMedicalCost";
import { DEMO_PREDICTED_COST } from "../../utils/demoPrediction";
import {
  SimulationContainer, SimulationContent, PageTitle, PageDescription,
  SimulationGrid, ConditionCard, ConditionRow, CardTitle, ConditionName,
  BMIValues, BMISlider, BMISliderLabels, OptionGroup, OptionButton,
  PredictButton, ResultCard, CostBox, CostLabel, CostAmount,
  DifferenceBox, DifferenceAmount, DifferencePercent, Notice,
} from "../../styles/Simulation.styles";

const Simulation = () => {
  const [initial] = useState(() => {
    const assessment = readAssessment();
    return { bmi: getBMI(assessment), exercise: assessment.exercise || "regular" };
  });
  const [conditions, setConditions] = useState(initial);
  const [applied, setApplied] = useState(null);
  const pending = !applied || conditions.bmi !== applied.bmi || conditions.exercise !== applied.exercise;

  // UI demonstration only: this formula is not AI inference or a causal estimate.
  const bmiChange = applied ? Math.max(-0.12, Math.min(0.12, (initial.bmi - applied.bmi) * 0.025)) : 0;
  const exerciseChange = applied && applied.exercise !== initial.exercise
    ? (applied.exercise === "regular" ? 0.08 : -0.08) : 0;
  const cost = applied
    ? Math.round(DEMO_PREDICTED_COST * (1 - bmiChange - exerciseChange) / 10000) * 10000
    : DEMO_PREDICTED_COST;
  const difference = DEMO_PREDICTED_COST - cost;
  const percent = Math.abs(difference / DEMO_PREDICTED_COST * 100).toFixed(1);
  const direction = difference > 0 ? "감소" : difference < 0 ? "증가" : "변화 없음";

  return (
    <SimulationContainer>
      <Header />
      <SimulationContent>
        <PageTitle>조건을 바꿔 의료비를 비교해보세요.</PageTitle>
        <PageDescription>BMI와 운동 조건을 조절하고 변경 전후의 예시 금액을 확인하세요.</PageDescription>
        <SimulationGrid>
          <ConditionCard aria-labelledby="conditions-heading">
            <CardTitle id="conditions-heading">조건 변경</CardTitle>
            <ConditionRow>
              <ConditionName as="label" htmlFor="bmi">BMI</ConditionName>
              <BMIValues>
                <span>입력 기준 <strong>{initial.bmi.toFixed(1)}</strong></span>
                <span>변경 후 <output htmlFor="bmi">{conditions.bmi.toFixed(1)}</output></span>
              </BMIValues>
              <BMISlider id="bmi" type="range" min={Math.min(15, initial.bmi)} max={Math.max(40, initial.bmi)} step="0.1"
                value={conditions.bmi}
                onChange={(event) => setConditions({ ...conditions, bmi: Number(event.target.value) })} />
              <BMISliderLabels><span>{Math.min(15, initial.bmi)}</span><span>{Math.max(40, initial.bmi)}</span></BMISliderLabels>
            </ConditionRow>
            <ConditionRow>
              <ConditionName id="exercise-label">운동</ConditionName>
              <OptionGroup role="group" aria-labelledby="exercise-label">
                {[{ value: "none", label: "안 함" }, { value: "regular", label: "규칙적으로 함" }].map((option) => (
                  <OptionButton key={option.value} type="button" $active={conditions.exercise === option.value}
                    aria-pressed={conditions.exercise === option.value}
                    onClick={() => setConditions({ ...conditions, exercise: option.value })}>
                    {option.label}
                  </OptionButton>
                ))}
              </OptionGroup>
            </ConditionRow>
            <PredictButton type="button" onClick={() => setApplied({ ...conditions })}>이 조건으로 비교하기 →</PredictButton>
          </ConditionCard>
          <ResultCard aria-labelledby="result-heading">
            <CardTitle id="result-heading">시뮬레이션 결과</CardTitle>
            <div role="status" aria-live="polite" aria-atomic="true">
              <CostBox><CostLabel>변경 전 · 예시 연간 의료비</CostLabel><CostAmount>{formatMedicalCost(DEMO_PREDICTED_COST)}</CostAmount></CostBox>
              <CostBox $highlight><CostLabel>변경 후 · 예시 연간 의료비</CostLabel><CostAmount $highlight>{applied ? formatMedicalCost(cost) : "—"}</CostAmount></CostBox>
              <DifferenceBox>
                <DifferenceAmount>{!applied ? "조건을 선택하고 비교해보세요." : difference === 0 ? "금액 변화 없음" : `${formatMedicalCost(Math.abs(difference))} ${direction}`}</DifferenceAmount>
                {applied && difference !== 0 && <DifferencePercent>약 {percent}% {direction}</DifferencePercent>}
                {applied && pending && <Notice>조건이 변경됐어요. 비교 버튼을 눌러 결과를 갱신하세요.</Notice>}
              </DifferenceBox>
            </div>
          </ResultCard>
        </SimulationGrid>
      </SimulationContent>
    </SimulationContainer>
  );
};

export default Simulation;
