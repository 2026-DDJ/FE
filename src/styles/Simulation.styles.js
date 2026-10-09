
import styled from "styled-components";
import { COLORS } from "./Common.styles";

const BG = "#051320";
const CARD = "#373b49";
const PINK = COLORS.pink;
const WHITE = "#ffffff";
const MUTED = "#c8b8c4";

// 전체 페이지

export const SimulationContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  background: ${BG};
  color: ${WHITE};
  overflow-x: hidden;
`;

export const SimulationContent = styled.main`
  width: 87%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 120px 0 30px;

  @media (max-width: 900px) {
    padding-top: 150px;
  }
`;

export const PageTitle = styled.h1`
  color: ${PINK};
  font-size: clamp(30px, 4vw, 58px);
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -1.5px;
`;

export const PageDescription = styled.p`
  margin-top: 18px;
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 1.5;
`;

// 좌우 레이아웃

export const SimulationGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

export const ConditionCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  padding: 24px 44px 28px;
  background: ${CARD};
  border: 1px solid ${PINK};
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 28px 18px;
  }
`;

export const ConditionRow = styled.div`
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr) 170px;
  align-items: center;
  gap: 20px;
  min-height: 112px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 219, 237, 0.1);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const ConditionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ConditionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 2px solid ${PINK};
  border-radius: 50%;
  color: ${PINK};
  font-size: 22px;
`;

export const ConditionName = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

export const ConditionSub = styled.p`
  margin-top: 4px;
  color: ${MUTED};
  font-size: 12px;
`;

export const ConditionControl = styled.div`
  min-width: 0;
`;

export const ConditionHelp = styled.div`
  padding: 12px;
  background: #252631;
  border-radius: 8px;
  color: #bcb0bd;
  font-size: 12px;
  line-height: 1.5;

  @media (max-width: 750px) {
    grid-column: 1;
  }
`;

// BMI 슬라이더

export const BMIControl = styled.div`
  width: 100%;
`;

export const BMIValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;

  span {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #c9bbc7;
    font-size: 12px;
  }

  strong {
    color: ${WHITE};
    font-size: 20px;
  }

  .selected {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    padding: 6px 10px;
    background: ${PINK};
    border-radius: 20px;
    color: ${BG};
    font-size: 14px;
    font-weight: 800;
  }
`;

export const BMISlider = styled.input`
  width: 100%;
  height: 7px;
  appearance: none;
  -webkit-appearance: none;
  background: #1c1d27;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${PINK};
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 219, 237, 0.5);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${PINK};
    border: none;
    border-radius: 50%;
  }
`;

export const BMISliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #99909d;
  font-size: 10px;
`;

// 선택 버튼

export const OptionGroup = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #805c71;
  border-radius: 8px;
  overflow: hidden;
`;

export const OptionButton = styled.button`
  flex: 1;
  min-width: 0;
  min-height: 42px;
  padding: 8px 10px;
  background: ${({ $active }) =>
    $active ? PINK : "#211e29"};
  color: ${({ $active }) =>
    $active ? BG : "#d4bbcc"};
  font-size: 14px;
  font-weight: ${({ $active }) =>
    $active ? 700 : 500};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ $active }) =>
      $active ? PINK : "#493243"};
  }
`;

export const PredictButton = styled.button`
  align-self: center;
  width: min(100%, 465px);
  min-height: 74px;
  margin-top: 24px;
  padding: 15px 25px;
  background: #dcbccd;
  color: ${BG};
  border-radius: 8px;
  font-size: 27px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${PINK};
  }

  @media (max-width: 600px) {
    margin-top: 36px;
    font-size: 18px;
  }
`;

// 오른쪽 결과 카드

export const ResultCard = styled.section`
  min-width: 0;
  padding: 34px 22px;
  background: ${CARD};
  border: 1px solid ${PINK};
  border-radius: 8px;
`;

export const ResultHeading = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;
`;

export const CostComparison = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CostBox = styled.div`
  flex: 1;
  min-width: 0;
  padding: 14px 10px;
  background: #1a1a24;
  border: 1px solid #3c2b3b;
  border-radius: 8px;
`;

export const CostLabel = styled.p`
  margin-bottom: 12px;
  color: #ddd0db;
  font-size: 12px;
  white-space: nowrap;
`;

export const CostAmount = styled.div`
  margin-bottom: 14px;
  color: ${({ $pink }) => ($pink ? PINK : WHITE)};
  font-size: clamp(14px, 1.4vw, 23px);
  font-weight: 800;
  white-space: nowrap;

  small {
    font-size: 11px;
    font-weight: 500;
  }
`;

export const CostBar = styled.div`
  width: 100%;
  height: 7px;
  background: #30303b;
  border-radius: 10px;
  overflow: hidden;
`;

export const CostBarFill = styled.div`
  width: ${({ $width }) => $width}%;
  height: 100%;
  background: ${PINK};
  border-radius: inherit;
  transition: width 0.4s ease;
`;

export const ResultArrow = styled.div`
  flex-shrink: 0;
  color: ${PINK};
  font-size: 24px;
`;

export const DifferenceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding: 15px 12px;
  background: #523044;
  border: 1px solid #9c5c7e;
  border-radius: 8px;
  color: ${PINK};
`;

export const DifferenceAmount = styled.strong`
  font-size: clamp(14px, 1.4vw, 21px);
`;

export const DifferencePercent = styled.span`
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
`;

// 위험 등급

export const RiskSection = styled.div`
  margin-top: 26px;
`;

export const RiskTitle = styled.h3`
  margin-bottom: 18px;
  color: ${PINK};
  font-size: 17px;
`;

export const RiskComparison = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RiskGroup = styled.div`
  flex: 1;
  min-width: 0;
  text-align: center;
`;

export const RiskLabel = styled.p`
  margin-bottom: 5px;
  color: #c7b6c4;
  font-size: 12px;
`;

export const RiskGrade = styled.div`
  font-size: 19px;
  font-weight: 700;

  small {
    display: block;
    margin-top: 3px;
    color: #c8b7c6;
    font-size: 11px;
    font-weight: 400;
  }
`;

export const RiskScale = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 12px;
`;

export const RiskLevel = styled.span`
  flex: 1;
  padding: 5px 0;
  background: ${({ $active }) =>
    $active ? PINK : "#28232e"};
  color: ${({ $active }) =>
    $active ? BG : "#bfa8b9"};
  border-radius: 5px;
  font-size: 11px;
  font-weight: 700;
`;

export const RiskArrow = styled.span`
  color: ${PINK};
  font-size: 27px;
`;

// 기대 변화

export const ExpectationBox = styled.div`
  margin-top: 28px;
  padding: 18px 14px;
  background: #211c27;
  border: 1px solid #76536a;
  border-radius: 8px;
`;

export const ExpectationTitle = styled.h3`
  margin-bottom: 16px;
  color: ${PINK};
  font-size: 15px;
  font-weight: 700;
`;

export const ExpectationItem = styled.p`
  margin-top: 10px;
  color: #ddd0dc;
  font-size: 12px;
  line-height: 1.6;
`;

export const Notice = styled.p`
  margin-top: 28px;
  color: #d0c4ce;
  font-size: 13px;
  text-align: center;
  line-height: 1.6;
`;
