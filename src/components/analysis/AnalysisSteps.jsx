import {
  StepsContainer,
  StepCircle,
} from "../../styles/AnalysisSteps.styles";

const AnalysisSteps = ({ currentStep }) => {
  return (
    <StepsContainer>
      {[1, 2, 3].map((step) => (
        <StepCircle
          key={step}
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