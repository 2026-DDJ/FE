import {
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import Header from "../../components/Header";
import Button from "../../components/Button";

import AnalysisSteps from "../../components/analysis/AnalysisSteps";
import FormField from "../../components/analysis/FormField";
import SelectInput from "../../components/analysis/SelectInput";
import OptionButtons from "../../components/analysis/OptionButtons";

import {
  AnalysisContainer,
  AnalysisContent,
  Title,
  FormGrid,
  NavigationArea,
  PreviousButton,
} from "../../styles/Analysis.styles";

const Analysis3 = () => {
  const navigate = useNavigate();

  const {
    formData,
    updateField,
  } = useOutletContext();

  const handleNext = () => {
  console.log("최종 입력 데이터:", formData);

  navigate("/analysis/loading");
};

  return (
    <AnalysisContainer>
      <Header />

      <AnalysisContent>
        <AnalysisSteps currentStep={3} />

        <Title>건강 행태</Title>

        <FormGrid>
          {/* 흡연 */}
          <FormField
            icon="🚬"
            title="흡연"
            description="현재 흡연 상태를 선택해주세요."
          >
            <OptionButtons
              value={formData.smoking}
              onChange={(value) =>
                updateField("smoking", value)
              }
              options={[
                {
                  value: "never",
                  label: "비흡연",
                },
                {
                  value: "past",
                  label: "과거 흡연",
                },
                {
                  value: "current",
                  label: "현재 흡연",
                },
              ]}
            />
          </FormField>

          {/* 운동 */}
          <FormField
            icon="🏃"
            title="운동"
            description="평소 규칙적인 운동 여부를 선택해주세요."
          >
            <OptionButtons
              value={formData.exercise}
              onChange={(value) =>
                updateField("exercise", value)
              }
              options={[
                {
                  value: "regular",
                  label: "규칙적으로 함",
                },
                {
                  value: "none",
                  label: "안 함",
                },
              ]}
            />
          </FormField>

          {/* 음주 */}
          <FormField
            icon="🍷"
            title="음주"
            description="최근 1년간의 음주 빈도를 선택해주세요."
          >
            <SelectInput
              value={formData.drinking}
              onChange={(value) =>
                updateField("drinking", value)
              }
              options={[
                {
                  value: "none",
                  label: "전혀 마시지 않음",
                },
                {
                  value: "once-month",
                  label: "한 달에 1번 이하",
                },
                {
                  value: "2-4-month",
                  label: "한 달에 2~4번",
                },
                {
                  value: "once-week",
                  label: "일주일에 1번",
                },
                {
                  value: "2-3-week",
                  label: "일주일에 2~3번",
                },
                {
                  value: "4-plus-week",
                  label: "일주일에 4번 이상",
                },
              ]}
            />
          </FormField>
        </FormGrid>

        <NavigationArea>
          <PreviousButton
            type="button"
            onClick={() => navigate("/analysis/2")}
          >
            ← 이전으로
          </PreviousButton>

          <Button onClick={handleNext}>
            다음으로 →
          </Button>
        </NavigationArea>
      </AnalysisContent>
    </AnalysisContainer>
  );
};

export default Analysis3;