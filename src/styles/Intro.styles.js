
import styled from "styled-components";

import {
  PageContainer,
  COLORS,
} from "./Common.styles";

export const IntroContainer = styled(PageContainer)`
  position: relative;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  overflow-x: clip;
`;

export const IntroContent = styled.main`
  position: relative;

  width: 100%;
  height: 100vh;
  min-height: 760px;
  @media (max-width: 1024px) { height: auto; min-height: 100dvh; display: flex; flex-direction: column; align-items: center; padding: 120px 6% 44px; gap: 28px; }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: minmax(0, 45%) minmax(0, 55%);
    align-items: center;
    column-gap: 0;
    row-gap: 14px;
    padding: 104px 5% calc(72px + env(safe-area-inset-bottom, 0px));
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
  }

`;

export const LeftSection = styled.section`
  position: absolute;

  top: 16.5%;
  left: 6.5%;
  @media (max-width: 1024px) { position: static; width: 100%; }
  @media (max-width: 768px) { grid-column: 1 / -1; align-self: start; }

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
  @media (max-width: 768px) {
    margin-top: 22px;
    font-size: clamp(15px, 4vw, 19px);
    line-height: 1.6;
    word-break: keep-all;
    br { display: initial; }
    p { margin: 0 0 18px; }
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
  @media (max-width: 768px) {
    grid-column: 1;
    justify-self: stretch;
    width: 100%;
    height: clamp(260px, 42vh, 385px);
    min-width: 0;
    animation: none;
  }

`;

export const ProgressSection = styled.div`
  position: absolute;

  top: 21%;
  right: 8%;

  width: 250px;
  height: 390px;
  @media (max-width: 1024px) { position: static; width: min(100%, 360px); height: 190px; align-self: center; }
  @media (max-width: 768px) {
    grid-column: 2;
    justify-self: stretch;
    align-self: center;
    width: 100%;
    height: clamp(230px, 36vh, 320px);
    min-width: 0;
    padding-left: 8px;
  }

`;

export const ButtonArea = styled.div`
  position: absolute;

  left: 6.5%;
  bottom: 10%;
  @media (max-width: 1024px) { position: static; width: 100%; display: flex; justify-content: center; > button { width: min(100%, 360px); } }
  @media (max-width: 768px) {
    position: fixed;
    left: 50%;
    bottom: calc(14px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%);
    width: min(360px, calc(100% - 32px));
    z-index: 200;
    > button {
      width: 100%;
      min-height: 48px;
      height: 48px;
      padding: 6px 12px;
      font-size: 20px;
      box-shadow: 0 4px 18px rgba(32, 32, 32, 0.12);
    }
  }

`;

/* =========================
   Intro Progress Bar Styles
========================= */

export const ProgressContainer = styled.div`
  position: relative;

  width: 270px;
  height: 390px;
  @media (max-width: 1024px) { width: 100%; height: 190px; }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    --intro-progress-dot-size: 22px;
  }

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
  @media (max-width: 768px) {
    left: 0;
    right: 0;
    gap: 8px;
    width: 100%;
    max-width: 100%;
  }

`;

export const ProgressLabel = styled.span`
  width: 190px;

  color: #202020;

  font-size: 28px;
  font-weight: 700;
  @media (max-width: 1024px) { width: auto; font-size: 18px; }

  text-align: right;

  white-space: nowrap;
  @media (max-width: 768px) {
    flex: 1 1 0;
    width: 0;
    min-width: 0;
    font-size: clamp(12px, 3.1vw, 17px);
    line-height: 1.25;
    white-space: normal;
    word-break: keep-all;
  }

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
  @media (max-width: 768px) {
    width: var(--intro-progress-dot-size, 22px);
    height: var(--intro-progress-dot-size, 22px);
  }

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
