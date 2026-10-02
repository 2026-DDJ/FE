import {
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import Header from "../../components/Header";
import Button from "../../components/Button";

import AnalysisSteps from "../../components/analysis/AnalysisSteps";
import FormField from "../../components/analysis/FormField";
import TextInput from "../../components/analysis/TextInput";
import OptionButtons from "../../components/analysis/OptionButtons";

import {
  AnalysisContainer,
  AnalysisContent,
  Title,
  FormGrid,
  NavigationArea,
  PreviousButton,
} from "../../styles/Analysis.styles";

const Analysis2 = () => {
  const navigate = useNavigate();

  const {
    formData,
    updateField,
  } = useOutletContext();

  return (
    <AnalysisContainer>
      <Header />

      <AnalysisContent>
        <AnalysisSteps currentStep={2} />

        <Title>건강 정보</Title>

        <FormGrid>
          {/* 키 */}
          <FormField
            icon="📏"
            title="키"
            description="가장 최근에 측정한 키를 작성해주세요."
          >
            <TextInput
              type="number"
              value={formData.height}
              onChange={(value) =>
                updateField("height", value)
              }
              placeholder="160"
              suffix="cm"
            />
          </FormField>

          {/* 만성질환 */}
          <FormField
            icon="🩹"
            title="만성질환"
            description="6개월 이상 지속되거나 관리가 필요한 질환을 기준으로 선택해주세요."
          >
            <OptionButtons
              value={formData.chronicDisease}
              onChange={(value) =>
                updateField("chronicDisease", value)
              }
              options={[
                {
                  value: "none",
                  label: "없음",
                },
                {
                  value: "yes",
                  label: "있음",
                },
              ]}
            />
          </FormField>

          {/* 몸무게 */}
          <FormField
            icon="⚖️"
            title="몸무게"
            description="가장 최근에 측정한 몸무게를 작성해주세요."
          >
            <TextInput
              type="number"
              value={formData.weight}
              onChange={(value) =>
                updateField("weight", value)
              }
              placeholder="50"
              suffix="kg"
            />
          </FormField>

          {/* 전반적인 건강 상태 */}
          <FormField
            icon="❤️"
            title="전반적인 건강 상태"
            description="현재 본인이 느끼는 전반적인 건강 상태를 선택해주세요."
          >
            <OptionButtons
              value={formData.healthStatus}
              onChange={(value) =>
                updateField("healthStatus", value)
              }
              options={[
                {
                  value: "very-good",
                  label: "매우 좋음",
                },
                {
                  value: "good",
                  label: "좋음",
                },
                {
                  value: "normal",
                  label: "보통",
                },
                {
                  value: "bad",
                  label: "나쁨",
                },
                {
                  value: "very-bad",
                  label: "매우 나쁨",
                },
              ]}
            />
          </FormField>
        </FormGrid>

        <NavigationArea>
          <PreviousButton
            type="button"
            onClick={() => navigate("/analysis/1")}
          >
            ← 이전으로
          </PreviousButton>

          <Button
            onClick={() => navigate("/analysis/3")}
          >
            다음으로 →
          </Button>
        </NavigationArea>
      </AnalysisContent>
    </AnalysisContainer>
  );
};

export default Analysis2;