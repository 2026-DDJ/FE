
import { useNavigate } from "react-router-dom";

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
  SimulationBanner,
  SimulationText,
  SimulationTitle,
  SimulationDescription,
  SimulationButton,
} from "../../styles/AnalysisResult.styles";

// 임시 결과 데이터 (추후 API 연동)
const resultData = {
  predictedCost: 2840000,
  differencePercent: 22.9,

  factors: [
    {
      icon: "🚬",
      name: "흡연",
      score: 78,
    },
    {
      icon: "⚖️",
      name: "BMI",
      score: 53,
    },
    {
      icon: "⌛",
      name: "연령",
      score: 31,
    },
  ],

  comparisons: [
    {
      label: "나",
      cost: 2840000,
    },
    {
      label: "동일 연령·성별",
      cost: 2310000,
    },
    {
      label: "동일 연령대",
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

  const maxCost = Math.max(
    ...resultData.comparisons.map((item) => item.cost)
  );

  const handleSimulation = () => {
    navigate("/simulation");
  };

  return (
    <ResultContainer>
      <Header />

      <ResultContent>
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
          동일 연령·성별 평균보다{" "}
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
                      <ChartValue
                        $active={index === 0}
                      >
                        {formatCost(item.cost)}원
                      </ChartValue>

                      <ChartBar
                        $active={index === 0}
                        $height={
                          (item.cost / maxCost) * 100
                        }
                      />

                      <ChartLabel
                        $active={index === 0}
                      >
                        {item.label}
                      </ChartLabel>
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
              생활습관을 조금만 바꿔도 미래의
              의료비는 달라질 수 있습니다.
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
