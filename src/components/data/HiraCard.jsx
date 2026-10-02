import {
  DataCard,
  CardHeader,
  CardName,
  CardSummary,
  DetailArea,
  DetailLabel,
  DetailTitle,
  DetailDescription,
  CompareDiagram,
  CompareItem,
  CompareBar,
  CompareBarFill,
} from "../../styles/Data.styles";

const HiraCard = ({
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
        <CardName>HIRA</CardName>

        <CardSummary>
          연령, 성별, 상병별
          <br />
          진료비 통계 데이터
        </CardSummary>
      </CardHeader>

      {expanded && (
        <DetailArea>
          <DetailLabel>
            MEDICAL COST COMPARISON
          </DetailLabel>

          <DetailTitle>
            유사 집단 의료비 비교
          </DetailTitle>

          <DetailDescription>
            연령군·성별·상병별 진료비 통계를 활용하여
            개인의 예상 의료비와 유사 집단의 의료비 수준을
            비교합니다.
          </DetailDescription>

          <CompareDiagram>
            <CompareItem>
              <span>나의 예상 의료비</span>

              <CompareBar>
                <CompareBarFill $width="82%" />
              </CompareBar>
            </CompareItem>

            <CompareItem>
              <span>유사 집단 의료비</span>

              <CompareBar>
                <CompareBarFill $width="61%" />
              </CompareBar>
            </CompareItem>
          </CompareDiagram>
        </DetailArea>
      )}
    </DataCard>
  );
};

export default HiraCard;