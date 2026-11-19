import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import AnalysisSteps from "../../components/analysis/AnalysisSteps";
import FormField from "../../components/analysis/FormField";
import TextInput from "../../components/analysis/TextInput";
import SelectInput from "../../components/analysis/SelectInput";
import HouseholdSizeInput from "../../components/analysis/HouseholdSizeInput";
import IncomeSlider from "../../components/analysis/IncomeSlider";
import OptionButtons from "../../components/analysis/OptionButtons";
import { ASSESSMENT_STEPS, isStepValid } from "../../utils/assessmentFields";
import { AnalysisContainer, AnalysisContent, Title, TitleRow, FormGrid, NavigationArea, PreviousButton } from "../../styles/Analysis.styles";

export default function AnalysisQuestionnaire({ step }) {
  const navigate = useNavigate();
  const { formData, updateField } = useOutletContext();
  const { title, fields } = ASSESSMENT_STEPS[step - 1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  const displayedFields = step === 1
    ? ["householdSize", "income", "occupation", "region"].map((name) => fields.find((field) => field.name === name))
    : fields;
  const buttonLabels = [
    "다음: 건강 상태 입력 →",
    "다음: 병원 이용 횟수 입력 →",
    "다음: 보험 정보 입력 →",
    "예상 의료비 확인하기 →",
  ];
  const missingStep = ASSESSMENT_STEPS.findIndex((_, index) => index < step - 1 && !isStepValid(index + 1, formData));
  const handleSubmit = (event) => {
    event.preventDefault();
    if (missingStep !== -1) return navigate(`/analysis/${missingStep + 1}`);
    if (isStepValid(step, formData)) navigate(step === 4 ? "/analysis/loading" : `/analysis/${step + 1}`);
  };
  return (
    <AnalysisContainer>
      <Header />
      <AnalysisContent>
        <AnalysisSteps currentStep={step} />
        <form onSubmit={handleSubmit}>
          <TitleRow>
            <Title>{title}</Title>

          </TitleRow>
          {step > 1 && (
            <NavigationArea $top>
              <PreviousButton type="button" onClick={() => navigate(`/analysis/${step - 1}`)}>← 이전으로</PreviousButton>
            </NavigationArea>
          )}
          <FormGrid>
            {displayedFields.map((field) => {
              const props = { value: formData[field.name], onChange: (value) => updateField(field.name, value), "aria-label": field.title };
              return (
                <FormField count={field.name === "householdSize" ? Number(formData.householdSize) : undefined} key={field.name} title={field.title} description={field.description || (field.type === "number" ? "숫자로 입력해주세요." : "해당하는 항목을 선택해주세요.")}>
                  {field.name === "householdSize" ? <HouseholdSizeInput {...props} /> :
                    field.name === "income" ? <IncomeSlider {...props} options={field.options} /> :
                    field.type === "number" ? <TextInput {...props} type="number" min={field.min} max={field.max} step={field.step} suffix={field.suffix} required /> :
                    field.type === "select" ? <SelectInput {...props} options={field.options} required /> :
                    <OptionButtons {...props} options={field.options} />}
                </FormField>
              );
            })}
          </FormGrid>
          <NavigationArea $bottom>
            <Button type="submit" disabled={!isStepValid(step, formData)}>{buttonLabels[step - 1]}</Button>
          </NavigationArea>
          {missingStep !== -1 && <p role="status">아직 입력하지 않은 {missingStep + 1}단계로 돌아가 입력을 완료해주세요.</p>}
        </form>
      </AnalysisContent>
    </AnalysisContainer>
  );
}
