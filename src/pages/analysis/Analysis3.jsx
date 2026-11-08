import {
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import Header from "../../components/Header";
import Button from "../../components/Button";

import AnalysisSteps from "../../components/analysis/AnalysisSteps";
import FormField from "../../components/analysis/FormField";
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
    navigate("/analysis/loading");
  };

  return (
    <AnalysisContainer>
      <Header />

      <AnalysisContent>
        <AnalysisSteps currentStep={3} />

        <Title>건강 행태</Title>

        <FormGrid>
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

        </FormGrid>

        <NavigationArea>
          <PreviousButton
            type="button"
            onClick={() => navigate("/analysis/2")}
          >
            ← 이전으로
          </PreviousButton>

          <Button onClick={handleNext}>
            분석 결과 보기 →
          </Button>
        </NavigationArea>
      </AnalysisContent>
    </AnalysisContainer>
  );
};

export default Analysis3;