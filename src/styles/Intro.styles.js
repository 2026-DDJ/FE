import styled from "styled-components";

import {
  PageContainer,
  COLORS,
} from "./Common.styles";

export const IntroContainer = styled(PageContainer)`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: hidden;
`;

export const IntroContent = styled.main`
  position: relative;

  width: 100%;
  height: 100vh;
  min-height: 760px;
`;

export const LeftSection = styled.section`
  position: absolute;

  top: 16.5%;
  left: 6.5%;
`;

export const Title = styled.h1`
  margin: 0;

  color: ${COLORS.pink};

  font-family: "Akira Expanded", "Arial Black", sans-serif;
  font-size: 64px;
  font-weight: 800;
  line-height: 0.95;

  letter-spacing: 1px;
`;

export const Description = styled.div`
  margin-top: 60px;

  color: #ffffff;

  font-size: 24px;
  font-weight: 400;
  line-height: 154%;

  p {
    margin: 0 0 24px;
  }
`;

export const MedicastText = styled.span`
  font-family: "Akira Expanded", "Arial Black", sans-serif;
  font-weight: 800;
`;

export const SkeletonSection = styled.div`
  position: absolute;

  top: 27%;
  left: 45%;

  width: 22%;
  height: 61%;

  animation: skeletonEnter 0.9s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes skeletonEnter {
    from {
      opacity: 0;
      transform: translateX(80px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ProgressSection = styled.div`
  position: absolute;

  top: 21%;
  right: 8%;

  width: 250px;
  height: 390px;
`;

export const ButtonArea = styled.div`
  position: absolute;

  left: 6.5%;
  bottom: 10%;
`;

/* =========================
   Intro Progress Bar Styles
========================= */

export const ProgressContainer = styled.div`
  position: relative;

  width: 270px;
  height: 390px;
`;

export const ProgressAxis = styled.div`
  position: absolute;

  top: 13px;
  right: 13px;

  width: 2px;
  height: calc(100% - 26px);

  z-index: 1;
`;

export const BaseLine = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(255, 219, 237, 0.28);
`;

/* =========================
   STEP 1 → STEP 2
========================= */

export const FirstLineFill = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 50%;

  background: #ffdbed;

  transform: scaleY(0);
  transform-origin: top;

  animation: firstLine 10s ease-in-out infinite;

  @keyframes firstLine {
    0%,
    16% {
      transform: scaleY(0);
    }

    40%,
    92% {
      transform: scaleY(1);
    }

    97%,
    100% {
      transform: scaleY(0);
    }
  }
`;

/* =========================
   STEP 2 → STEP 3
========================= */

export const SecondLineFill = styled.div`
  position: absolute;

  top: 50%;
  left: 0;

  width: 100%;
  height: 50%;

  background: #ffdbed;

  transform: scaleY(0);
  transform-origin: top;

  animation: secondLine 10s ease-in-out infinite;

  @keyframes secondLine {
    0%,
    50% {
      transform: scaleY(0);
    }

    73%,
    92% {
      transform: scaleY(1);
    }

    97%,
    100% {
      transform: scaleY(0);
    }
  }
`;

/* =========================
   STEP
========================= */

export const ProgressStep = styled.div`
  position: absolute;

  right: 0;

  display: flex;
  align-items: center;

  gap: 20px;

  ${({ $position }) =>
    $position === "top" &&
    `
      top: 0;
    `}

  ${({ $position }) =>
    $position === "middle" &&
    `
      top: 50%;
      transform: translateY(-50%);
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    `
      bottom: 0;
    `}
`;

export const ProgressLabel = styled.span`
  width: 190px;

  color: #ffffff;

  font-size: 22px;
  font-weight: 700;

  text-align: right;

  white-space: nowrap;
`;

export const ProgressDot = styled.div`
  position: relative;

  width: 28px;
  height: 28px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.5px solid rgba(255, 219, 237, 0.6);
  border-radius: 50%;

  background: transparent;

  z-index: 3;

  overflow: hidden;
`;

export const Check = styled.span`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffdbed;

  font-size: 17px;
  font-weight: 700;
  line-height: 1;

  opacity: 0;

  /*
   * 체크된 원 내부
   * #FFDBED / opacity 20%
   */
  background: rgba(255, 219, 237, 0.2);

  border-radius: 50%;

  ${({ $step }) =>
    $step === 1 &&
    `
      animation: checkOne 10s ease-in-out infinite;
    `}

  ${({ $step }) =>
    $step === 2 &&
    `
      animation: checkTwo 10s ease-in-out infinite;
    `}

  ${({ $step }) =>
    $step === 3 &&
    `
      animation: checkThree 10s ease-in-out infinite;
    `}

  @keyframes checkOne {
    0%,
    10% {
      opacity: 0;
    }

    14%,
    92% {
      opacity: 1;
    }

    97%,
    100% {
      opacity: 0;
    }
  }

  @keyframes checkTwo {
    0%,
    41% {
      opacity: 0;
    }

    45%,
    92% {
      opacity: 1;
    }

    97%,
    100% {
      opacity: 0;
    }
  }

  @keyframes checkThree {
    0%,
    74% {
      opacity: 0;
    }

    78%,
    92% {
      opacity: 1;
    }

    97%,
    100% {
      opacity: 0;
    }
  }
`;