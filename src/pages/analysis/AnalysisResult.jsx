import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatMedicalCost } from "../../utils/formatMedicalCost";
import { getPrediction, getPredictionId } from "../../api/predictions";
import Header from "../../components/Header";
import { getPredictionComparisons } from "../../utils/predictionComparison.js";
import {
  ResultContainer, ResultContent, ResultHeading, ResultAmount,
  ResultDescription, Highlight, ResultGrid, ResultCard, CardTitle,
  ChartContainer, ChartArea, ChartItem, ChartValue, ChartBar, ChartLabel,
  ChartTrack, ChartNote, SimulationBanner, SimulationText, SimulationTitle,
  SimulationDescription, SimulationButton,
} from "../../styles/AnalysisResult.styles";

const isCost = (value) => value !== null && value !== undefined
  && Number.isFinite(Number(value)) && Number(value) >= 0;

const AnalysisResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(true);
  const id = getPredictionId();

  useEffect(() => {
    if (!id) {
      setError("저장된 예측이 없습니다. 설문을 먼저 완료해주세요.");
      setPending(false);
      return;
    }
    const controller = new AbortController();
    let timeout;
    const load = async () => {
      try {
        const data = await getPrediction(id, controller.signal);
        if (controller.signal.aborted) return;
        if (data.status === "COMPLETED" && isCost(data.predictedAnnualMedicalCost)) {
          setResult(data);
          setPending(false);
        } else if (data.status === "PENDING") {
          timeout = setTimeout(load, 2000);
        } else {
          setError(data.errorCode
            ? `예측에 실패했습니다. (${data.errorCode})`
            : "예측 결과를 불러올 수 없습니다.");
          setPending(false);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setPending(false);
        }
      }
    };
    load();
    return () => { controller.abort(); clearTimeout(timeout); };
  }, [id]);

  const comparisons = result ? getPredictionComparisons(result) : [];

  const availableComparisons = comparisons.filter((item) => item.cost !== null);
  const hasPeerComparison = comparisons.slice(1).some((item) => item.cost !== null);
  const maxCost = Math.max(1, ...availableComparisons.map((item) => item.cost));
  const peer = comparisons.find((item) => item.label === "동일 소득 구간 평균" && item.cost !== null)
    || comparisons.find((item) => item.label === "동일 외래 이용횟수 구간 평균 의료비" && item.cost !== null)
    || comparisons.find((item) => item.label === "전체 평균 의료비" && item.cost !== null);
  const differencePercent = peer && peer.cost > 0
    ? (Number(result.predictedAnnualMedicalCost) - peer.cost) / peer.cost * 100
    : null;

  return (
    <ResultContainer>
      <Header />
      <ResultContent>
        {pending ? (
          <ResultHeading role="status">예측 결과를 불러오는 중...</ResultHeading>
        ) : error ? (
          <>
            <ResultHeading>결과를 확인하지 못했어요</ResultHeading>
            <ResultDescription role="alert">{error}</ResultDescription>
            <Link to="/analysis/4" style={{ color: "white" }}>설문으로 돌아가기</Link>
          </>
        ) : (
          <>
            <ResultHeading>앞으로 1년간{" "}<span className="mobile-break" />예상되는 의료비</ResultHeading>
            <ResultAmount>{formatMedicalCost(Number(result.predictedAnnualMedicalCost))}</ResultAmount>
            <ResultDescription>
              {differencePercent === null ? (
                "입력하신 조건을 바탕으로 AI가 예측한 연간 의료비입니다."
              ) : (
                <>{peer.label}보다{" "}<span className="mobile-break" />약{" "}
                  <Highlight>{differencePercent > 0 ? "+" : ""}{differencePercent.toFixed(1)}%</Highlight>
                  {differencePercent >= 0 ? " 높게" : " 낮게"} 예측됐어요.</>
              )}
            </ResultDescription>
            <ResultGrid>
              <ResultCard>
                <CardTitle>비슷한 사람들과 의료비 비교</CardTitle>
                <ChartContainer>
                  <ChartArea>
                    {comparisons.map((item, index) => (
                      <ChartItem key={item.label}>
                        <ChartLabel $active={index === 0}>{item.label}</ChartLabel>
                        <ChartValue $active={index === 0}>
                          {item.cost === null ? "비교 데이터 없음" : formatMedicalCost(item.cost)}
                        </ChartValue>
                        {hasPeerComparison && item.cost !== null && (
                          <ChartTrack>
                            <ChartBar $active={index === 0}
                              $width={item.cost / maxCost * 100} />
                          </ChartTrack>
                        )}
                      </ChartItem>
                    ))}
                  </ChartArea>
                  {!hasPeerComparison && (
                    <ChartNote role="status">비교 집단의 의료비 통계가 아직 제공되지 않아 막대 비교를 표시할 수 없습니다.</ChartNote>
                  )}
                </ChartContainer>
              </ResultCard>
            </ResultGrid>
            <SimulationBanner>
              <SimulationText>
                <SimulationTitle>건강한 변화를 시작해보세요.</SimulationTitle>
                <SimulationDescription>BMI와 운동 조건을 바꿔{" "}<span className="mobile-break" /><span className="mobile-nowrap">예측비를 비교해보세요.</span></SimulationDescription>
              </SimulationText>
              <SimulationButton type="button" onClick={() => navigate("/simulation")}>
                조건을 바꿔서 결과 비교하기 →
              </SimulationButton>
            </SimulationBanner>
            <p style={{ color: "white", marginTop: 20 }}>본 결과는 통계적 예측이며{" "}<span className="mobile-break" />실제 의료비나 생활 습관 변화의 인과적 효과를{" "}<span className="mobile-break" />보장하지 않습니다.</p>
          </>
        )}
      </ResultContent>
    </ResultContainer>
  );
};
export default AnalysisResult;
