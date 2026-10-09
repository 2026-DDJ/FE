
import styled from "styled-components";

import { COLORS } from "./Common.styles";

// ==========================================
// 전체 페이지
// ==========================================

export const ResultContainer = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  background: #051320;

  overflow-x: hidden;
`;

export const ResultContent = styled.main`
  width: 87%;
  max-width: 1380px;

  margin: 0 auto;
  padding: 170px 0 80px;

  @media (max-width: 900px) {
    padding-top: 150px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding-top: 130px;
  }
`;

// ==========================================
// 예상 연간 의료비
// ==========================================

export const ResultHeading = styled.h1`
  color: #ffffff;

  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const ResultAmount = styled.div`
  margin-top: 20px;

  color: ${COLORS.pink};

  font-size: 96px;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 72px;
  }

  @media (max-width: 480px) {
    font-size: 58px;
  }
`;

export const ResultDescription = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;

  color: #ffffff;

  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 36px;
  }
`;

export const Highlight = styled.span`
  color: ${COLORS.pink};
  font-weight: 700;
`;

// ==========================================
// 결과 카드
// ==========================================

export const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.section`
  min-width: 0;
  min-height: 370px;

  padding: 36px 38px;

  background: #373b49;

  border: 1px solid ${COLORS.pink};
  border-radius: 8px;

  @media (max-width: 480px) {
    min-height: 320px;
    padding: 24px 18px;
  }
`;

export const CardTitle = styled.h2`
  color: #ffffff;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 23px;
  }
`;

// ==========================================
// 주요 영향요인 TOP 3
// ==========================================

export const FactorList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  margin-top: 52px;

  @media (max-width: 480px) {
    gap: 28px;
    margin-top: 40px;
  }
`;

export const FactorItem = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const FactorLabel = styled.div`
  width: 145px;
  flex-shrink: 0;

  color: #ffffff;

  font-size: 27px;
  font-weight: 600;

  white-space: nowrap;

  @media (max-width: 480px) {
    width: 105px;
    font-size: 18px;
  }
`;

export const FactorTrack = styled.div`
  flex: 1;
  height: 13px;

  background: #a79aa8;

  border-radius: 20px;
  overflow: hidden;
`;

export const FactorFill = styled.div`
  width: ${({ $score }) => $score}%;
  height: 100%;

  background: ${COLORS.pink};

  border-radius: inherit;

  transition: width 0.5s ease;
`;

// ==========================================
// 의료비 비교 그래프
// ==========================================

export const ChartContainer = styled.div`
  margin-top: 30px;

  padding: 16px 10px 0;

  @media (max-width: 480px) {
    padding: 12px 6px 0;
  }
`;

export const ChartArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  align-items: end;

  gap: 16px;
  height: 210px;

  @media (max-width: 480px) {
    gap: 5px;
    height: 180px;
  }
`;

export const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  min-width: 0;
  height: 100%;
`;

export const ChartValue = styled.div`
  margin-bottom: 10px;

  color: ${({ $active }) =>
    $active ? COLORS.pink : "#bcbac1"};

  font-size: 15px;
  font-weight: 600;

  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const ChartBar = styled.div`
  width: 70%;
  max-width: 85px;

  height: ${({ $height }) => $height}%;
  max-height: 140px;

  background: ${({ $active }) =>
    $active ? COLORS.pink : "#777780"};

  border-radius: 6px 6px 0 0;
`;

export const ChartLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 48px;

  padding: 8px 0;

  border-top: 1px solid #77717b;

  color: ${({ $active }) =>
    $active ? COLORS.pink : "#ffffff"};

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 10px;
    white-space: normal;
  }
`;

// ==========================================
// 시뮬레이션 배너
// ==========================================

export const SimulationBanner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 32px;

  margin-top: 28px;
  padding: 30px 38px;

  background: #373b49;

  border: 1px solid ${COLORS.pink};
  border-radius: 8px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
    gap: 24px;
  }
`;

export const SimulationText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const SimulationTitle = styled.h2`
  color: #ffffff;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SimulationDescription = styled.p`
  color: #ffffff;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SimulationButton = styled.button`
  flex-shrink: 0;

  min-width: 350px;
  height: 75px;

  padding: 0 36px;

  background: #dcbccd;
  color: #051320;

  border-radius: 8px;

  font-size: 28px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${COLORS.pink};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 0 16px;
    font-size: 20px;
  }
`;
