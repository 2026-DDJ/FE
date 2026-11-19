
import styled from "styled-components";

import {
  PageContainer,
  COLORS,
} from "./Common.styles";

export const IntroContainer = styled(PageContainer)`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;
`;

export const IntroContent = styled.main`
  position: relative;

  width: 100%;
  height: 100vh;
  min-height: 760px;
  @media (max-width: 1024px) { height: auto; min-height: 100dvh; display: flex; flex-direction: column; align-items: center; padding: 120px 6% 44px; gap: 28px; }
`;

export const LeftSection = styled.section`
  position: absolute;

  top: 16.5%;
  left: 6.5%;
  @media (max-width: 1024px) { position: static; width: 100%; }
`;

export const Title = styled.h1`
  margin: 0;

  color: #29AE89;

  font-family: "Pretendard", sans-serif;
  font-size: 80px;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  @media (max-width: 1024px) { font-size: clamp(34px, 6vw, 60px); line-height: 1.1; }

`;

export const Description = styled.div`
  margin-top: 60px;

  color: #202020;

  font-size: 32px;
  font-weight: 400;
  @media (max-width: 1024px) { margin-top: 24px; font-size: clamp(16px, 2.8vw, 24px); p { margin-bottom: 16px; } br { display: none; } }
  line-height: 154%;

  p {
    margin: 0 0 24px;
  }
`;

export const MedicastText = styled.span`
  font-family: "Akira Expanded", "Arial Black", sans-serif;
  color: #29AE89;
  font-weight: 800;
`;

export const SkeletonSection = styled.div`
  position: absolute;

  top: 27%;
  left: 45%;

  width: 22%;
  height: 61%;
  @media (max-width: 1024px) { position: relative; top: auto; left: auto; width: min(75vw, 360px); height: 320px; flex-shrink: 0; }

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
  @media (max-width: 1024px) { position: static; width: min(100%, 360px); height: 190px; align-self: center; }
`;

export const ButtonArea = styled.div`
  position: absolute;

  left: 6.5%;
  bottom: 10%;
  @media (max-width: 1024px) { position: static; width: 100%; display: flex; justify-content: center; > button { width: min(100%, 360px); } }
`;

/* =========================
   Intro Progress Bar Styles
========================= */

export const ProgressContainer = styled.div`
  position: relative;

  width: 270px;
  height: 390px;
  @media (max-width: 1024px) { width: 100%; height: 190px; }
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

  background: #EAF7F4;
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

  background: #29AE89;

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

  background: #29AE89;

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

  color: #202020;

  font-size: 28px;
  font-weight: 700;
  @media (max-width: 1024px) { width: auto; font-size: 18px; }

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

  border: 1.5px solid #29AE89;
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

  color: #29AE89;

  font-size: 17px;
  font-weight: 700;
  line-height: 1;

  opacity: 0;

  background: #EAF7F4;

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
