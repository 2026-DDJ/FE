import styled from "styled-components";

import {
  PageContainer,
  COLORS,
} from "./Common.styles";

export const DataContainer = styled(PageContainer)`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;
`;

export const DataContent = styled.main`
  position: relative;

  width: 100%;
  min-height: 100vh;

  padding-top: 145px;
  padding-bottom: 80px;

  display: grid;
  grid-template-columns: 520px 1fr;
`;

export const LeftSection = styled.section`
  position: absolute;

  top: 145px;
  left: 6.5%;

  width: 520px;

  display: flex;
  flex-direction: column;

  gap: 80px;
`;

/* =========================
   상세 카드
========================= */

export const DetailCardArea = styled.div`
  width: 100%;
  min-height: 315px;
`;

export const DataCard = styled.div`
  position: relative;

  width: 100%;
  min-height: ${({ $expanded }) =>
    $expanded ? "315px" : "140px"};

  border-radius: 8px;
  overflow: hidden;

  background: #504f5d;
  color: ${COLORS.pink};

  filter: drop-shadow(
    0 -40px 50px rgba(0, 0, 0, 0.25)
  );

  cursor: ${({ $expanded }) =>
    $expanded ? "default" : "pointer"};

  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.3s ease;

  &:hover {
    border-radius: 8px;
  }

  ${({ $expanded }) =>
    !$expanded &&
    `
      &:hover {
        transform: translateY(-8px);

        filter: drop-shadow(
          0 -45px 55px rgba(0, 0, 0, 0.3)
        );
      }

      &:active {
        transform: translateY(-4px);
      }
    `}
`;

export const CardHeader = styled.div`
  min-height: 140px;

  padding: 36px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardName = styled.h2`
  margin: 0;

  font-family: "Akira Expanded", sans-serif;

  font-size: 30px;
  font-weight: normal;
`;

export const CardSummary = styled.p`
  margin: 0;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;

  text-align: right;
`;

/* =========================
   하단 카드 리스트
========================= */

export const CardList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 22px;
`;

/* =========================
   상세 영역
========================= */

export const DetailArea = styled.div`
  padding: 0 36px 32px;

  animation: detailFade 0.45s ease both;
  animation-delay: 0.18s;

  @keyframes detailFade {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DetailLabel = styled.span`
  display: block;

  margin-bottom: 7px;

  font-family: "Akira Expanded", sans-serif;
  font-size: 10px;

  letter-spacing: 1px;

  opacity: 0.65;
`;

export const DetailTitle = styled.h3`
  margin: 0 0 16px;

  color: #ffffff;

  font-size: 20px;
  font-weight: 700;
`;

export const DetailDescription = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.8);

  font-size: 14px;
  line-height: 1.6;
`;

/* =========================
   KHP
========================= */

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 8px;
`;

export const FeatureItem = styled.div`
  padding: 9px 7px;

  border: 1px solid
    rgba(255, 219, 237, 0.28);

  border-radius: 4px;

  text-align: center;
`;

export const FeatureCode = styled.span`
  display: block;

  font-size: 9px;
  font-weight: 700;

  opacity: 0.6;
`;

export const FeatureName = styled.span`
  display: block;

  margin-top: 3px;

  color: #ffffff;

  font-size: 12px;
  font-weight: 600;
`;

export const TargetArea = styled.div`
  margin-top: 14px;
  padding-top: 12px;

  border-top: 1px solid
    rgba(255, 219, 237, 0.25);
`;

export const TargetLabel = styled.div`
  color: #ffffff;

  font-size: 12px;
  font-weight: 600;
`;

export const TargetFormula = styled.div`
  margin-top: 5px;

  font-size: 10px;

  opacity: 0.65;
`;

/* =========================
   HIRA
========================= */

export const CompareDiagram = styled.div`
  margin-top: 18px;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const CompareItem = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;

  align-items: center;

  gap: 10px;

  color: #ffffff;

  font-size: 11px;
`;

export const CompareBar = styled.div`
  height: 7px;

  border-radius: 999px;

  background: rgba(255, 219, 237, 0.15);

  overflow: hidden;
`;

export const CompareBarFill = styled.div`
  width: ${({ $width }) => $width};
  height: 100%;

  border-radius: inherit;

  background: ${COLORS.pink};
`;

/* =========================
   NHIS
========================= */

export const ReferenceFlow = styled.div`
  margin-top: 20px;

  text-align: center;
`;

export const ReferenceTags = styled.div`
  display: flex;
  justify-content: center;

  gap: 8px;
`;

export const ReferenceTag = styled.span`
  padding: 7px 16px;

  border: 1px solid
    rgba(255, 219, 237, 0.4);

  border-radius: 999px;

  color: #ffffff;

  font-size: 11px;
`;

export const ReferenceArrow = styled.div`
  margin: 7px 0;

  font-size: 15px;
`;

export const ReferenceResult = styled.div`
  color: #ffffff;

  font-size: 13px;
  font-weight: 700;
`;

/* =========================
   오른쪽
========================= */

export const RightSection = styled.section`
  position: absolute;

  top: 145px;
  right: 8%;

  width: 590px;
  min-height: calc(100vh - 225px);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DataTitle = styled.h1`
  margin: 0;

  color: ${COLORS.pink};

  font-family: "Akira Expanded", sans-serif;
  font-size: 64px;
  font-weight: normal;
  line-height: 0.95;

  text-align: right;
`;

export const DataDescription = styled.p`
  max-width: 590px;

  margin-top: 55px;

  color: #ffffff;

  font-size: 24px;
  font-weight: 400;
  line-height: 1.7;

  text-align: right;
`;

export const ButtonArea = styled.div`
  margin-top: 240px;
`;

export const ViewTransitionStyles = styled.div`
  @supports (view-transition-name: none) {
    &::view-transition-group(*) {
      animation-duration: 0.65s;
      animation-timing-function:
        cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
`;