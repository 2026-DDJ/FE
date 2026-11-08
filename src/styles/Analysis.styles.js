
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

  @media (max-width: 600px) { width: 90%; padding-top: 132px; }
`;

export const Title = styled.h1`
  margin-top: 28px;
  margin-bottom: 28px;

  color: #29AE89;

  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  @media (max-width: 600px) { font-size: 40px; }
`;

export const FormGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 20px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
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
`;

export const PreviousButton = styled.button`
  min-width: 0;
  height: 74px;

  padding: 0 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #29AE89;
  border-radius: 8px;

  background: transparent;

  color: #29AE89;

  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(41, 174, 137, 0.08);
  }

  &:active {
    transform: scale(0.98);
  }
`;
