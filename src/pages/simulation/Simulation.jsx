import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { readAssessment, getBMI } from "../../utils/assessment";
import { formatMedicalCost } from "../../utils/formatMedicalCost";
import { getPrediction, getPredictionId, simulatePrediction } from "../../api/predictions";
import {
  SimulationContainer, SimulationContent, PageTitle, PageDescription,
  SimulationGrid, ConditionCard, ConditionRow, CardTitle, ConditionName,
  BMIValues, BMISlider, BMISliderLabels, OptionGroup, OptionButton,
  PredictButton, ResultCard, CostBox, CostLabel, CostAmount,
  DifferenceBox, DifferenceAmount, DifferencePercent, Notice,
} from "../../styles/Simulation.styles";

const boundBMI = (value) => Math.max(15, Math.min(40, value));

const Simulation = () => {
  const [initial] = useState(() => {
    const assessment = readAssessment();
    return {
      bmi: boundBMI(getBMI(assessment)),
      exercise: assessment.exercise || "regular",
    };
  });
  const [conditions, setConditions] = useState(initial);
  const [applied, setApplied] = useState(null);
  const [baseline, setBaseline] = useState(null);
  const [simulation, setSimulation] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const id = getPredictionId();
  const pending = !applied || conditions.bmi !== applied.bmi || conditions.exercise !== applied.exercise;

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();
    getPrediction(id, controller.signal)
      .then((data) => {
        if (data.status === "COMPLETED") setBaseline(data);
        else setError("완료된 예측 결과가 없습니다. 먼저 의료비 예측을 진행해주세요.");
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      });
    return () => controller.abort();
  }, [id]);

  const handleSimulate = async () => {
    if (!id || busy || !baseline) return;
    setBusy(true);
    setError("");
    try {
      const result = await simulatePrediction(id, conditions);
      setSimulation(result);
      setApplied({ ...conditions });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const beforeCost = simulation?.before?.predictedAnnualMedicalCost ?? baseline?.predictedAnnualMedicalCost;
  const afterCost = simulation?.after?.predictedAnnualMedicalCost;
  const difference = Number(simulation?.annualMedicalCostDifference);
  const hasDifference = simulation && Number.isFinite(difference);
  const percent = hasDifference && Number(beforeCost) > 0
    ? (Math.abs(difference) / Number(beforeCost) * 100).toFixed(1)
    : null;
  const direction = difference < 0 ? "감소" : difference > 0 ? "증가" : "변화 없음";

  return (
    <SimulationContainer>
      <Header />
      <SimulationContent>
        <PageTitle>생활 습관을 바꿨을 때의<span className="mobile-break" />예상 의료비는?</PageTitle>
        <PageDescription>체질량지수(BMI)와 운동 조건을 바꿔 AI 모델이 다시<span className="mobile-break" />계산한 예측 결과를 비교합니다.</PageDescription>
        {!id && <Notice role="alert">저장된 의료비 예측이 없습니다. <Link to="/analysis">설문부터 진행해주세요.</Link></Notice>}
        {error && <Notice role="alert">{error}</Notice>}
        <SimulationGrid>
          <ConditionCard aria-labelledby="conditions-heading">
            <CardTitle id="conditions-heading">조건 변경</CardTitle>
            <ConditionRow>
              <ConditionName as="label" htmlFor="bmi">체질량지수(BMI)</ConditionName>
              <BMIValues>
                <span>입력 기준 <strong>{initial.bmi.toFixed(1)}</strong></span>
                <span>변경 후 <output htmlFor="bmi">{conditions.bmi.toFixed(1)}</output></span>
              </BMIValues>
              <BMISlider id="bmi" type="range" min="15" max="40" step="0.1"
                value={conditions.bmi}
                onChange={(event) => setConditions({ ...conditions, bmi: Number(event.target.value) })} />
              <BMISliderLabels><span>15</span><span>40</span></BMISliderLabels>
            </ConditionRow>
            <ConditionRow>
              <ConditionName id="exercise-label">운동</ConditionName>
              <OptionGroup role="group" aria-labelledby="exercise-label">
                {[{ value: "none", label: "운동 안 함" }, { value: "regular", label: "규칙적으로 운동함" }].map((option) => (
                  <OptionButton key={option.value} type="button" $active={conditions.exercise === option.value}
                    aria-pressed={conditions.exercise === option.value}
                    onClick={() => setConditions({ ...conditions, exercise: option.value })}>
                    {option.label}
                  </OptionButton>
                ))}
              </OptionGroup>
            </ConditionRow>
            <PredictButton type="button" disabled={!baseline || busy} onClick={handleSimulate}>
              {busy ? "AI 모델로 다시 계산 중..." : "바뀐 조건으로 의료비 다시 계산하기 →"}
            </PredictButton>
          </ConditionCard>
          <ResultCard aria-labelledby="result-heading">
            <CardTitle id="result-heading">예상 금액 비교</CardTitle>
            <div role="status" aria-live="polite" aria-atomic="true">
              <CostBox><CostLabel>변경 전 · AI 예측 연간 의료비</CostLabel>
                <CostAmount>{beforeCost == null ? "—" : formatMedicalCost(Number(beforeCost))}</CostAmount></CostBox>
              <CostBox $highlight><CostLabel>변경 후 · AI 예측 연간 의료비</CostLabel>
                <CostAmount $highlight>{afterCost == null ? "—" : formatMedicalCost(Number(afterCost))}</CostAmount></CostBox>
              <DifferenceBox>
                {simulation && (
                  <DifferenceAmount>{difference === 0 ? "금액 변화 없음"
                    : `${formatMedicalCost(Math.abs(difference))} ${direction}`}</DifferenceAmount>
                )}
                {percent !== null && difference !== 0 && <DifferencePercent>약 {percent}% {direction}</DifferencePercent>}
                {simulation && pending && <Notice>조건이 변경됐어요. 비교 버튼을 눌러 결과를 갱신하세요.</Notice>}
              </DifferenceBox>
            </div>
          </ResultCard>
        </SimulationGrid>
        <Notice>시뮬레이션은 조건 변화에 따른 모델 예측 비교이며<span className="mobile-break" />실제 의료비 절감이나<span className="mobile-break" />인과적 효과를 보장하지 않습니다.</Notice>
      </SimulationContent>
    </SimulationContainer>
  );
};
export default Simulation;
