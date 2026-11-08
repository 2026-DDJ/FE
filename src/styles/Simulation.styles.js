import styled from "styled-components";
import { COLORS } from "./Common.styles";

export const SimulationContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  background: #fff;
  color: #202020;
`;

export const SimulationContent = styled.main`
  width: 87%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 160px 0 64px;
  @media (max-width: 600px) { width: 90%; padding-top: 132px; }
`;

export const PageTitle = styled.h1`
  color: ${COLORS.pink};
  font-size: 48px;
  font-weight: 800;
  line-height: 1.3;
  @media (max-width: 600px) { font-size: 32px; }
`;

export const PageDescription = styled.p`
  margin: 20px 0 32px;
  font-size: 20px;
  line-height: 1.6;
  @media (max-width: 600px) { font-size: 16px; }
`;

export const SimulationGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

export const ConditionCard = styled.section`
  min-width: 0;
  padding: 32px;
  background: #eaf7f4;
  border: 1px solid ${COLORS.pink};
  border-radius: 8px;
  @media (max-width: 600px) { padding: 24px; }
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 24px;
  @media (max-width: 600px) { font-size: 24px; }
`;

export const ConditionRow = styled.div`
  padding: 24px 0;
  border-top: 1px solid #c9e3da;
`;

export const ConditionName = styled.h3`
  display: block;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const BMIValues = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  span { display: flex; flex-direction: column; gap: 8px; font-size: 16px; }
  strong, output { font-size: 28px; font-weight: 700; }
  output { color: ${COLORS.pink}; }
`;

export const BMISlider = styled.input`
  width: 100%;
  height: 24px;
  accent-color: ${COLORS.pink};
  cursor: pointer;
  &:focus-visible { outline: 2px solid #174f40; outline-offset: 4px; }
`;

export const BMISliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 16px;
`;

export const OptionGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const OptionButton = styled.button`
  min-height: 56px;
  padding: 12px;
  border: 1px solid ${COLORS.pink};
  border-radius: 4px;
  background: ${({ $active }) => $active ? COLORS.pink : "#fff"};
  color: ${({ $active }) => $active ? "#fff" : "#202020"};
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover { box-shadow: inset 0 0 0 1px #174f40; }
  &:focus-visible { outline: 2px solid #174f40; outline-offset: 4px; }
  @media (max-width: 600px) { font-size: 16px; }
`;

export const PredictButton = styled.button`
  width: 100%;
  min-height: 64px;
  margin-top: 8px;
  padding: 16px;
  border-radius: 8px;
  background: ${COLORS.pink};
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #21876c; }
  &:focus-visible { outline: 2px solid #174f40; outline-offset: 4px; }
  @media (max-width: 600px) { font-size: 20px; }
`;

export const ResultCard = styled(ConditionCard)``;

export const CostBox = styled.div`
  padding: 24px;
  margin-top: 16px;
  background: #fff;
  border: 1px solid ${({ $highlight }) => $highlight ? COLORS.pink : "#c9e3da"};
  border-radius: 8px;
  @media (max-width: 600px) { padding: 20px; }
`;

export const CostLabel = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.5;
`;

export const CostAmount = styled.div`
  color: ${({ $highlight }) => $highlight ? COLORS.pink : "#202020"};
  font-size: 36px;
  font-weight: 800;
  overflow-wrap: anywhere;
  small { margin-left: 8px; font-size: 20px; font-weight: 500; }
  @media (max-width: 600px) { font-size: 32px; }
`;

export const DifferenceBox = styled.div`
  margin-top: 24px;
  line-height: 1.5;
`;

export const DifferenceAmount = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const DifferencePercent = styled.p`
  margin-top: 8px;
  font-size: 20px;
`;

export const Notice = styled.p`
  margin-top: 24px;
  color: #38594f;
  font-size: 16px;
  line-height: 1.6;
`;
