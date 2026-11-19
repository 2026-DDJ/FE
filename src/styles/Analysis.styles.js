import { COLORS } from "./Common.styles";

import styled from "styled-components";

import {
  PageContainer,
} from "./Common.styles";

export const AnalysisContainer = styled(PageContainer)`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;
`;

export const AnalysisContent = styled.main`
  width: min(1120px, calc(100% - 120px));

  margin: 0 auto;

  padding-top: 150px;
  padding-bottom: 70px;

  @media (max-width: 600px) { width: 90%; padding-top: 110px; padding-bottom: 40px; }
  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding-top: 105px;
  }

`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin: 28px 0;

  > button { margin-left: auto; flex-shrink: 0; font-size: 22px; padding: 0 24px; }
  @media (max-width: 1100px) { flex-wrap: wrap; }
  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;
    > button { width: 100%; height: auto; min-height: 60px; padding: 16px; }
  }
  @media (max-width: 768px) {
    margin: 18px 0 24px;
    > button { display: none; }
  }

`;

export const Title = styled.h1`
  margin: 0;

  color: ${COLORS.pink};

  font-size: clamp(36px, 4vw, 54px);
  font-weight: 700;
  line-height: 1.2;
  @media (max-width: 600px) { font-size: clamp(28px, 8vw, 40px); }
`;

export const FormGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 20px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    > * { min-width: 0; max-width: 100%; }
  }

`;

/* =========================
   Analysis 1
   다음 버튼만 존재
========================= */

export const ButtonArea = styled.div`
  width: 100%;

  margin-top: 32px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

/* =========================
   Analysis 2 / 3
   이전 + 다음 버튼
========================= */

export const NavigationArea = styled.div`
  width: 100%;

  margin-top: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (max-width: 600px) { flex-direction: column; align-items: stretch; }
  ${({ $top }) => $top && `
    margin: 16px 0 20px;
    justify-content: flex-start;
  `}
  ${({ $bottom }) => $bottom && `
    margin-top: 24px;
    justify-content: flex-end;
  `}
  @media (max-width: 768px) {
    > button { width: 100%; min-width: 0; }
  }

`;

export const PreviousButton = styled.button`
  @media (max-width: 600px) { height: 58px; font-size: 20px; }
  min-width: 0;
  height: 74px;

  padding: 0 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${COLORS.pink};
  border-radius: 8px;

  background: transparent;

  color: ${COLORS.pink};

  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: color-mix(in srgb, ${COLORS.pink} 8%, transparent);
  }

  &:active {
    transform: scale(0.98);
  }
`;
