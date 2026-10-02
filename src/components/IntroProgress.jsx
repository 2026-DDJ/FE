import {
  ProgressContainer,
  ProgressAxis,
  BaseLine,
  FirstLineFill,
  SecondLineFill,
  ProgressStep,
  ProgressLabel,
  ProgressDot,
  Check,
} from "../styles/Intro.styles";

const IntroProgress = () => {
  return (
    <ProgressContainer>
      <ProgressAxis>
        <BaseLine />
        <FirstLineFill />
        <SecondLineFill />
      </ProgressAxis>

      <ProgressStep $position="top">
        <ProgressLabel>건강정보 입력</ProgressLabel>

        <ProgressDot>
          <Check $step={1}>✓</Check>
        </ProgressDot>
      </ProgressStep>

      <ProgressStep $position="middle">
        <ProgressLabel>AI 분석</ProgressLabel>

        <ProgressDot>
          <Check $step={2}>✓</Check>
        </ProgressDot>
      </ProgressStep>

      <ProgressStep $position="bottom">
        <ProgressLabel>결과 확인하기</ProgressLabel>

        <ProgressDot>
          <Check $step={3}>✓</Check>
        </ProgressDot>
      </ProgressStep>
    </ProgressContainer>
  );
};

export default IntroProgress;