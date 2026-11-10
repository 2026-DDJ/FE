import { useState } from "react";
import { getTopModelFactors } from "../../utils/modelFactors";

import { useNavigate } from "react-router-dom";

import { formatMedicalCost } from "../../utils/formatMedicalCost";
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
  FactorTabs,
  FactorTab,
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
  ChartTrack,
  FactorScore,
  SimulationBanner,
  SimulationText,
  SimulationTitle,
  SimulationDescription,
  SimulationButton,
} from "../../styles/AnalysisResult.styles";

const FACTOR_TABS = [
  { key: "low_model", label: "일반 의료비" },
  { key: "high_model", label: "고액 의료비" },
  { key: "classifier", label: "고비용군 확률" },
];

// 임시 결과 데이터 (추후 API 연동)
const resultData = {
  predictedCost: DEMO_PREDICTED_COST,
  differencePercent: 22.9,

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

const AnalysisResult = () => {
  const navigate = useNavigate();
  const [factorModel, setFactorModel] = useState("low_model");
  const factors = getTopModelFactors(factorModel);

  const maxCost = Math.max(...resultData.comparisons.map((item) => item.cost));

  const handleSimulation = () => {
    navigate("/simulation");
  };

  return (
    <ResultContainer>
      <Header />

      <ResultContent>
        <ResultHeading>
          예상 연간 의료비
        </ResultHeading>

        <ResultAmount>
          {formatMedicalCost(resultData.predictedCost)}
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
            <FactorTabs
              role="tablist"
              aria-label="영향요인 모델 선택"
              onKeyDown={(event) => {
                const current = FACTOR_TABS.findIndex(({ key }) => key === factorModel);
                const next = event.key === "ArrowRight" ? (current + 1) % FACTOR_TABS.length
                  : event.key === "ArrowLeft" ? (current + FACTOR_TABS.length - 1) % FACTOR_TABS.length
                  : event.key === "Home" ? 0 : event.key === "End" ? FACTOR_TABS.length - 1 : null;
                if (next === null) return;
                event.preventDefault();
                setFactorModel(FACTOR_TABS[next].key);
                event.currentTarget.querySelectorAll("button")[next].focus();
              }}
            >
              {FACTOR_TABS.map(({ key, label }) => (
                <FactorTab
                  key={key}
                  id={`factor-tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={factorModel === key}
                  aria-controls="model-factor-panel"
                  tabIndex={factorModel === key ? 0 : -1}
                  $active={factorModel === key}
                  onClick={() => setFactorModel(key)}
                >
                  {label}
                </FactorTab>
              ))}
            </FactorTabs>
            <FactorList role="tabpanel" id="model-factor-panel" aria-labelledby={`factor-tab-${factorModel}`} tabIndex={0}>
              {factors.map(
                (factor, index) => (
                  <FactorItem key={factor.feature}>
                    <FactorLabel>
                      {index + 1}.{" "}
                      {factor.name}
                    </FactorLabel>

                    <FactorTrack role="meter" aria-label={`${factor.name} 중요도 비중`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Number(factor.score.toFixed(1))}>
                      <FactorFill
                        $score={factors[0].score > 0 ? factor.score / factors[0].score * 100 : 0}
                      />
                    </FactorTrack>
                    <FactorScore>{factor.score.toFixed(1)}%</FactorScore>
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
                        {formatMedicalCost(item.cost)}
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
