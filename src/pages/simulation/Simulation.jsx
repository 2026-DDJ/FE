
import { useMemo, useState } from "react";
import Header from "../../components/Header";

import {
  SimulationContainer,
  SimulationContent,
  PageTitle,
  PageDescription,
  SimulationGrid,
  ConditionCard,
  ConditionRow,
  ConditionInfo,
  ConditionIcon,
  ConditionName,
  ConditionSub,
  ConditionControl,
  BMIControl,
  BMIValues,
  BMISlider,
  BMISliderLabels,
  OptionGroup,
  OptionButton,
  ConditionHelp,
  PredictButton,
  ResultCard,
  ResultHeading,
  CostComparison,
  CostBox,
  CostLabel,
  CostAmount,
  CostBar,
  CostBarFill,
  ResultArrow,
  DifferenceBox,
  DifferenceAmount,
  DifferencePercent,
  RiskSection,
  RiskTitle,
  RiskComparison,
  RiskGroup,
  RiskLabel,
  RiskGrade,
  RiskScale,
  RiskLevel,
  RiskArrow,
  ExpectationBox,
  ExpectationTitle,
  ExpectationItem,
  Notice,
} from "../../styles/Simulation.styles";

const BASE_COST = 3600000;

const initialConditions = {
  bmi: 27.8,
  smoking: "current",
  drinking: "high",
  exercise: "none",
};

const Simulation = () => {
  const [conditions, setConditions] = useState({
    ...initialConditions,
  });

  const [appliedConditions, setAppliedConditions] = useState({
    ...initialConditions,
  });

  const [hasPredicted, setHasPredicted] = useState(false);

  const updateCondition = (field, value) => {
    setConditions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePredict = () => {
    setAppliedConditions({ ...conditions });
    setHasPredicted(true);
  };

  // 프론트엔드 시연용 계산
  // 실제 의료비 예측 모델이 아님
  const result = useMemo(() => {
    if (!hasPredicted) {
      return {
        cost: BASE_COST,
        reduction: 0,
        percent: 0,
        grade: "C",
      };
    }

    let reductionRate = 0;

    if (appliedConditions.bmi < initialConditions.bmi) {
      reductionRate += Math.min(
        (initialConditions.bmi - appliedConditions.bmi) * 0.025,
        0.12
      );
    }

    if (appliedConditions.smoking === "past") {
      reductionRate += 0.06;
    } else if (appliedConditions.smoking === "never") {
      reductionRate += 0.1;
    }

    if (appliedConditions.drinking === "moderate") {
      reductionRate += 0.03;
    } else if (appliedConditions.drinking === "none") {
      reductionRate += 0.05;
    }

    if (appliedConditions.exercise === "sometimes") {
      reductionRate += 0.04;
    } else if (appliedConditions.exercise === "regular") {
      reductionRate += 0.08;
    }

    reductionRate = Math.min(reductionRate, 0.4);

    const cost = Math.round(
      (BASE_COST * (1 - reductionRate)) / 10000
    ) * 10000;

    const reduction = BASE_COST - cost;
    const percent = Math.round(
      (reduction / BASE_COST) * 100
    );

    return {
      cost,
      reduction,
      percent,
      grade: percent >= 15 ? "B" : "C",
    };
  }, [appliedConditions, hasPredicted]);

  const formatMoney = (value) =>
    value.toLocaleString("ko-KR");

  return (
    <SimulationContainer>
      <Header />

      <SimulationContent>
        <PageTitle>
          조건을 바꿔, 더 건강한 내일을 만들어보세요.
        </PageTitle>

        <PageDescription>
          생활습관과 건강 상태에 따른 예상 의료비 변화를
          확인할 수 있습니다. 변경 내용은 기존 분석 결과에
          영향을 주지 않습니다.
        </PageDescription>

        <SimulationGrid>
          {/* 왼쪽: 조건 변경 */}
          <ConditionCard>
            <ConditionRow>
              <ConditionInfo>
                <ConditionIcon>♧</ConditionIcon>

                <div>
                  <ConditionName>BMI</ConditionName>
                  <ConditionSub>체질량지수</ConditionSub>
                </div>
              </ConditionInfo>

              <ConditionControl>
                <BMIControl>
                  <BMIValues>
                    <span>
                      현재
                      <strong>27.8</strong>
                    </span>

                    <span className="selected">
                      {conditions.bmi.toFixed(1)}
                    </span>

                    <span>
                      변경 후
                      <strong>
                        {conditions.bmi.toFixed(1)}
                      </strong>
                    </span>
                  </BMIValues>

                  <BMISlider
                    type="range"
                    min="15"
                    max="40"
                    step="0.1"
                    value={conditions.bmi}
                    onChange={(e) =>
                      updateCondition(
                        "bmi",
                        Number(e.target.value)
                      )
                    }
                  />

                  <BMISliderLabels>
                    <span>15</span>
                    <span>20</span>
                    <span>25</span>
                    <span>30</span>
                    <span>35</span>
                    <span>40</span>
                  </BMISliderLabels>
                </BMIControl>
              </ConditionControl>

              <ConditionHelp>
                현재 BMI를 기준으로 변경할 값을 설정해
                보세요.
              </ConditionHelp>
            </ConditionRow>

            <ConditionRow>
              <ConditionInfo>
                <ConditionIcon>♧</ConditionIcon>

                <div>
                  <ConditionName>흡연</ConditionName>
                  <ConditionSub>흡연 여부</ConditionSub>
                </div>
              </ConditionInfo>

              <ConditionControl>
                <OptionGroup>
                  <OptionButton
                    $active={conditions.smoking === "current"}
                    onClick={() =>
                      updateCondition("smoking", "current")
                    }
                  >
                    흡연
                  </OptionButton>

                  <OptionButton
                    $active={conditions.smoking === "past"}
                    onClick={() =>
                      updateCondition("smoking", "past")
                    }
                  >
                    비흡연
                  </OptionButton>
                </OptionGroup>
              </ConditionControl>

              <ConditionHelp>
                금연은 장기적인 건강 위험 감소와 관련이
                있습니다.
              </ConditionHelp>
            </ConditionRow>

            <ConditionRow>
              <ConditionInfo>
                <ConditionIcon>♧</ConditionIcon>

                <div>
                  <ConditionName>음주</ConditionName>
                  <ConditionSub>음주 빈도</ConditionSub>
                </div>
              </ConditionInfo>

              <ConditionControl>
                <OptionGroup>
                  <OptionButton
                    $active={conditions.drinking === "high"}
                    onClick={() =>
                      updateCondition("drinking", "high")
                    }
                  >
                    거의 매일
                  </OptionButton>

                  <OptionButton
                    $active={conditions.drinking === "moderate"}
                    onClick={() =>
                      updateCondition("drinking", "moderate")
                    }
                  >
                    가끔
                  </OptionButton>

                  <OptionButton
                    $active={conditions.drinking === "none"}
                    onClick={() =>
                      updateCondition("drinking", "none")
                    }
                  >
                    거의 안함
                  </OptionButton>
                </OptionGroup>
              </ConditionControl>

              <ConditionHelp>
                음주 빈도를 줄이는 경우를 비교할 수
                있습니다.
              </ConditionHelp>
            </ConditionRow>

            <ConditionRow>
              <ConditionInfo>
                <ConditionIcon>♧</ConditionIcon>

                <div>
                  <ConditionName>운동</ConditionName>
                  <ConditionSub>활동 빈도</ConditionSub>
                </div>
              </ConditionInfo>

              <ConditionControl>
                <OptionGroup>
                  <OptionButton
                    $active={conditions.exercise === "none"}
                    onClick={() =>
                      updateCondition("exercise", "none")
                    }
                  >
                    거의 안함
                  </OptionButton>

                  <OptionButton
                    $active={conditions.exercise === "sometimes"}
                    onClick={() =>
                      updateCondition("exercise", "sometimes")
                    }
                  >
                    주 1~2회
                  </OptionButton>

                  <OptionButton
                    $active={conditions.exercise === "regular"}
                    onClick={() =>
                      updateCondition("exercise", "regular")
                    }
                  >
                    주 3회 이상
                  </OptionButton>
                </OptionGroup>
              </ConditionControl>

              <ConditionHelp>
                규칙적인 운동은 건강 관리에 도움이
                됩니다.
              </ConditionHelp>
            </ConditionRow>

            <PredictButton
              type="button"
              onClick={handlePredict}
            >
              이 조건으로 다시 예측하기 →
            </PredictButton>
          </ConditionCard>

          {/* 오른쪽: 시뮬레이션 결과 */}
          <ResultCard>
            <ResultHeading>
              시뮬레이션 결과
            </ResultHeading>

            <CostComparison>
              <CostBox>
                <CostLabel>현재 예상 의료비</CostLabel>

                <CostAmount $pink>
                  {formatMoney(BASE_COST)}
                  <small> 원</small>
                </CostAmount>

                <CostBar>
                  <CostBarFill $width={100} $pink />
                </CostBar>
              </CostBox>

              <ResultArrow>➜</ResultArrow>

              <CostBox>
                <CostLabel>변경 후 예상 의료비</CostLabel>

                <CostAmount>
                  {formatMoney(result.cost)}
                  <small> 원</small>
                </CostAmount>

                <CostBar>
                  <CostBarFill
                    $width={(result.cost / BASE_COST) * 100}
                  />
                </CostBar>
              </CostBox>
            </CostComparison>

            <DifferenceBox>
              <DifferenceAmount>
                - {formatMoney(result.reduction)} 원
              </DifferenceAmount>

              <DifferencePercent>
                ↓ 약 {result.percent}% 감소
              </DifferencePercent>
            </DifferenceBox>

            <RiskSection>
              <RiskTitle>
                의료비 위험 등급 변화 ⓘ
              </RiskTitle>

              <RiskComparison>
                <RiskGroup>
                  <RiskLabel>현재</RiskLabel>

                  <RiskGrade>
                    C 등급
                    <small>(높은 수준)</small>
                  </RiskGrade>

                  <RiskScale>
                    {["A", "B", "C", "D"].map(
                      (grade) => (
                        <RiskLevel
                          key={grade}
                          $active={grade === "C"}
                        >
                          {grade}
                        </RiskLevel>
                      )
                    )}
                  </RiskScale>
                </RiskGroup>

                <RiskArrow>→</RiskArrow>

                <RiskGroup>
                  <RiskLabel>변경 후</RiskLabel>

                  <RiskGrade>
                    {result.grade} 등급
                    <small>
                      {result.grade === "B"
                        ? "(보통 수준)"
                        : "(높은 수준)"}
                    </small>
                  </RiskGrade>

                  <RiskScale>
                    {["A", "B", "C", "D"].map(
                      (grade) => (
                        <RiskLevel
                          key={grade}
                          $active={grade === result.grade}
                        >
                          {grade}
                        </RiskLevel>
                      )
                    )}
                  </RiskScale>
                </RiskGroup>
              </RiskComparison>
            </RiskSection>

            <ExpectationBox>
              <ExpectationTitle>
                이런 변화를 기대할 수 있어요!
              </ExpectationTitle>

              <ExpectationItem>
                ✓ 예시 계산상 의료비가 약{" "}
                {result.percent}% 감소합니다.
              </ExpectationItem>

              <ExpectationItem>
                ✓ 의료비 위험 등급이 C에서{" "}
                {result.grade}로 표시됩니다.
              </ExpectationItem>

              <ExpectationItem>
                ✓ BMI, 흡연, 운동 등의 조건 변화를
                비교할 수 있습니다.
              </ExpectationItem>
            </ExpectationBox>
          </ResultCard>
        </SimulationGrid>

        <Notice>
          시뮬레이션 결과는 임시
          계산값이며, 실제 의료비 감소를 보장하지
          않습니다.
        </Notice>
      </SimulationContent>
    </SimulationContainer>
  );
};

export default Simulation;
