
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

  background: #FFFFFF;

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
  color: #202020;

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

  color: #202020;

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

  background: #EAF7F4;

  border: 1px solid ${COLORS.pink};
  border-radius: 8px;

  @media (max-width: 480px) {
    min-height: 320px;
    padding: 24px 18px;
  }
`;

export const CardTitle = styled.h2`
  color: #202020;

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

export const FactorTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
  padding: 4px;
  margin-top: 16px;
  background: #d7eee7;
  border-radius: 8px;
`;

export const FactorTab = styled.button`
  min-width: 0;
  min-height: 48px;
  padding: 10px 6px;
  border: 0;
  border-radius: 6px;
  background: ${({ $active }) => $active ? "#29AE89" : "transparent"};
  color: ${({ $active }) => $active ? "#fff" : "#21735d"};
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover { background: ${({ $active }) => $active ? "#239b79" : "#c7e7dc"}; }
  &:focus-visible { outline: 2px solid #185c49; outline-offset: 2px; }

  @media (max-width: 1100px) { font-size: 14px; }
  @media (max-width: 480px) { font-size: 12px; padding-inline: 2px; }
`;

export const FactorList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  margin-top: 32px;

  @media (max-width: 480px) {
    gap: 28px;
    margin-top: 28px;
  }
`;

export const FactorItem = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const FactorLabel = styled.div`
  width: 210px;
  flex-shrink: 0;
  color: #202020;
  font-size: 22px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.4;

  @media (max-width: 1100px) {
    width: 180px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 150px;
    font-size: 15px;
  }
`;

export const FactorTrack = styled.div`
  flex: 1;
  min-width: 0;
  height: 13px;

  background: #EAF7F4;

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

export const ChartNote = styled.p`
  margin-top: 12px;
  color: #38594f;
  font-size: 16px;
  line-height: 1.5;
`;

export const ChartContainer = styled.div`
  margin-top: 24px;
`;

export const ChartArea = styled.div`
  display: grid;
  gap: 20px;
`;

export const ChartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 8px 12px;
`;

export const ChartValue = styled.div`
  color: ${({ $active }) => $active ? COLORS.pink : "#202020"};
  font-size: 16px;
  font-weight: 600;
`;

export const ChartTrack = styled.div`
  grid-column: 1 / -1;
  height: 12px;
  background: #d7e9e3;
  border-radius: 8px;
  overflow: hidden;
`;

export const ChartBar = styled.div`
  width: ${({ $width }) => $width}%;
  height: 100%;
  background: ${({ $active }) => $active ? COLORS.pink : "#526c63"};
  border-radius: inherit;
`;

export const ChartLabel = styled.div`
  color: ${({ $active }) => $active ? COLORS.pink : "#202020"};
  font-size: 16px;
  font-weight: 600;
`;

export const FactorScore = styled.span`
  color: ${({ $active }) => $active ? COLORS.pink : "#38594f"};
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  min-width: 40px;
  flex-shrink: 0;
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

  background: #EAF7F4;

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
  color: #202020;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SimulationDescription = styled.p`
  color: #202020;

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

  background: #29AE89;
  color: #FFFFFF;

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
