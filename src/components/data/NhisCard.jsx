import {
  DataCard,
  CardHeader,
  CardName,
  CardSummary,
  DetailArea,
  DetailLabel,
  DetailTitle,
  DetailDescription,
  ReferenceFlow,
  ReferenceTags,
  ReferenceTag,
  ReferenceArrow,
  ReferenceResult,
} from "../../styles/Data.styles";

const NhisCard = ({
  expanded = false,
  onClick,
  transitionName,
}) => {
  return (
    <DataCard
      $expanded={expanded}
      onClick={onClick}
      transitionName={transitionName}
    >
      <CardHeader>
        <CardName>NHIS</CardName>

        <CardSummary>
          연령, 성별, 지역별
          <br />
          건강보험 관련 통계
        </CardSummary>
      </CardHeader>

      {expanded && (
        <DetailArea>
          <DetailLabel>
            POPULATION REFERENCE
          </DetailLabel>

          <DetailTitle>
            집단별 비교 기준
          </DetailTitle>

          <DetailDescription>
            연령·성별·지역별 통계를 활용하여 개인과
            유사한 집단의 비교 기준을 구성합니다.
          </DetailDescription>

          <ReferenceFlow>
            <ReferenceTags>
              <ReferenceTag>연령</ReferenceTag>
              <ReferenceTag>성별</ReferenceTag>
              <ReferenceTag>지역</ReferenceTag>
            </ReferenceTags>

            <ReferenceArrow>↓</ReferenceArrow>

            <ReferenceResult>
              유사 집단 비교 기준
            </ReferenceResult>
          </ReferenceFlow>
        </DetailArea>
      )}
    </DataCard>
  );
};

export default NhisCard;