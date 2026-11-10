import {
  StepsContainer,
  StepCircle,
} from "../../styles/AnalysisSteps.styles";

const AnalysisSteps = ({ currentStep }) => {
  return (
    <StepsContainer aria-label={`설문 ${currentStep}/4단계`}>
      {[1, 2, 3, 4].map((step) => (
        <StepCircle
          key={step}
          aria-current={step === currentStep ? "step" : undefined}
          $active={step === currentStep}
          $completed={step < currentStep}
        >
          {step}
        </StepCircle>
      ))}
    </StepsContainer>
  );
};

export default AnalysisSteps;