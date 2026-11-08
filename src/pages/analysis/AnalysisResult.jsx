
import { useNavigate } from "react-router-dom";

import { DEMO_PREDICTED_COST } from "../../utils/demoPrediction";

import Header from "../../components/Header";

import {
  ResultContainer,
  ResultContent,
  ResultHeading,
  ResultAmount,
  ResultDescription,
  Highlight,
  ResultGrid,
  ResultCard,
  CardTitle,
  FactorList,
  FactorItem,
  FactorLabel,
  FactorTrack,
  FactorFill,
  ChartContainer,
  ChartArea,
  ChartItem,
  ChartValue,
  ChartBar,
  ChartLabel,
  ChartNote,
  ChartTrack,
  FactorScore,
  SimulationBanner,
  SimulationText,
  SimulationTitle,
  SimulationDescription,
  SimulationButton,
} from "../../styles/AnalysisResult.styles";

// 임시 결과 데이터 (추후 API 연동)
const resultData = {
  predictedCost: DEMO_PREDICTED_COST,
  differencePercent: 22.9,

  factors: [
    {
      icon: "🏃",
      name: "운동",
      score: 78,
    },
    {
      icon: "⚖️",
      name: "BMI",
      score: 53,
    },
    {
      icon: "❤️",
      name: "건강 상태",
      score: 31,
    },
  ],

  comparisons: [
    {
      label: "나",
      cost: DEMO_PREDICTED_COST,
    },
    {
      label: "비교 집단 1",
      cost: 2310000,
    },
    {
      label: "비교 집단 2",
      cost: 2250000,
    },
    {
      label: "전체 평균",
      cost: 2180000,
    },
  ],
};

const formatCost = (value) => {
  return value.toLocaleString("ko-KR");
};

const AnalysisResult = () => {
  const navigate = useNavigate();

  const maxCost = Math.max(...resultData.comparisons.map((item) => item.cost));

  const handleSimulation = () => {
    navigate("/simulation");
  };

  return (
    <ResultContainer>
      <Header />

      <ResultContent>
        <ChartNote>예시 결과 · 실제 AI 분석 전입니다.</ChartNote>
        {/* 예상 연간 의료비 */}
        <ResultHeading>
          예상 연간 의료비
        </ResultHeading>

        <ResultAmount>
          {Math.round(
            resultData.predictedCost / 10000
          ).toLocaleString("ko-KR")}
          만원
        </ResultAmount>

        <ResultDescription>
          비교 집단 평균보다{" "}
          <Highlight>
            +{resultData.differencePercent}%
          </Highlight>{" "}
          높은 수준입니다.
        </ResultDescription>

        <ResultGrid>
          {/* 주요 영향요인 */}
          <ResultCard>
            <CardTitle>
              주요 영향요인{" "}
              <Highlight>Top 3</Highlight>
            </CardTitle>

            <ChartNote>영향 점수 · 100점 기준 (예시)</ChartNote>
            <FactorList>
              {resultData.factors.map(
                (factor, index) => (
                  <FactorItem key={factor.name}>
                    <FactorLabel>
                      {index + 1}.{" "}
                      {factor.icon}{" "}
                      {factor.name}
                    </FactorLabel>

                    <FactorTrack>
                      <FactorFill
                        $score={factor.score}
                      />
                    </FactorTrack>
                    <FactorScore>{factor.score}점</FactorScore>
                  </FactorItem>
                )
              )}
            </FactorList>
          </ResultCard>

          {/* 유사 집단 의료비 비교 */}
          <ResultCard>
            <CardTitle>
              유사 집단과 의료비 비교
            </CardTitle>

            <ChartContainer>
              <ChartArea>
                {resultData.comparisons.map(
                  (item, index) => (
                    <ChartItem key={item.label}>
                      <ChartLabel $active={index === 0}>{item.label}</ChartLabel>
                      <ChartValue $active={index === 0}>
                        {formatCost(item.cost)}원
                      </ChartValue>
                      <ChartTrack>
                        <ChartBar
                          $active={index === 0}
                          $width={maxCost === 0 ? 0 : item.cost / maxCost * 100}
                        />
                      </ChartTrack>
                    </ChartItem>
                  )
                )}
              </ChartArea>
            </ChartContainer>
          </ResultCard>
        </ResultGrid>

        {/* 시뮬레이션 배너 */}
        <SimulationBanner>
          <SimulationText>
            <SimulationTitle>
              지금, 건강한 변화를 시작해보세요.
            </SimulationTitle>

            <SimulationDescription>
              BMI와 운동 조건을 바꿔 예시 의료비를 비교해보세요.
            </SimulationDescription>
          </SimulationText>

          <SimulationButton
            type="button"
            onClick={handleSimulation}
          >
            시뮬레이션 해보기 →
          </SimulationButton>
        </SimulationBanner>
      </ResultContent>
    </ResultContainer>
  );
};

export default AnalysisResult;
