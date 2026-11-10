import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import AnalysisSteps from "../../components/analysis/AnalysisSteps";
import FormField from "../../components/analysis/FormField";
import TextInput from "../../components/analysis/TextInput";
import SelectInput from "../../components/analysis/SelectInput";
import OptionButtons from "../../components/analysis/OptionButtons";
import { ASSESSMENT_STEPS, isStepValid } from "../../utils/assessmentFields";
import { AnalysisContainer, AnalysisContent, Title, FormGrid, NavigationArea, PreviousButton } from "../../styles/Analysis.styles";

export default function AnalysisQuestionnaire({ step }) {
  const navigate = useNavigate();
  const { formData, updateField } = useOutletContext();
  const { title, fields } = ASSESSMENT_STEPS[step - 1];
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
        <Title>{title}</Title>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            {fields.map((field) => {
              const props = { value: formData[field.name], onChange: (value) => updateField(field.name, value), "aria-label": field.title };
              return (
                <FormField key={field.name} title={field.title} description={field.description || (field.type === "number" ? "숫자로 입력해주세요." : "해당하는 항목을 선택해주세요.")}>
                  {field.type === "number" ? <TextInput {...props} type="number" min={field.min} max={field.max} step={field.step} suffix={field.suffix} required /> :
                    field.type === "select" ? <SelectInput {...props} options={field.options} required /> :
                    <OptionButtons {...props} options={field.options} />}
                </FormField>
              );
            })}
          </FormGrid>
          <NavigationArea>
            {step > 1 ? <PreviousButton type="button" onClick={() => navigate(`/analysis/${step - 1}`)}>← 이전으로</PreviousButton> : <span />}
            <Button type="submit" disabled={!isStepValid(step, formData)}>{step === 4 ? "결과 확인하기 →" : "다음으로 →"}</Button>
          </NavigationArea>
          {missingStep !== -1 && <p role="status">아직 입력하지 않은 {missingStep + 1}단계로 돌아가 입력을 완료해주세요.</p>}
        </form>
      </AnalysisContent>
    </AnalysisContainer>
  );
}
