import {
  DataCard,
  CardHeader,
  CardName,
  CardSummary,
  DetailArea,
  DetailLabel,
  DetailTitle,
  FeatureGrid,
  FeatureItem,
  FeatureCode,
  FeatureName,
  TargetArea,
  TargetLabel,
  TargetFormula,
} from "../../styles/Data.styles";

const KhpCard = ({
  expanded = false,
  onClick,
  transitionName,
}) => {
  const features = [
    {
      code: "BIRTH_Y",
      name: "연령",
    },
    {
      code: "SEX",
      name: "성별",
    },
    {
      code: "REGION1",
      name: "지역",
    },
    {
      code: "H_INC_TOT",
      name: "소득",
    },
    {
      code: "HT + WT",
      name: "BMI",
    },
    {
      code: "CD",
      name: "만성질환",
    },
    {
      code: "HS_SRH",
      name: "건강상태",
    },
    {
      code: "S3",
      name: "흡연",
    },
    {
      code: "D1 / D1_2",
      name: "음주",
    },
    {
      code: "P1",
      name: "운동",
    },
  ];

  return (
    <DataCard
      $expanded={expanded}
      onClick={onClick}
      transitionName={transitionName}
    >
      <CardHeader>
        <CardName>KHP</CardName>

        <CardSummary>
          개인의 생활 습관과
          <br />
          의료이용을 포함한 데이터
        </CardSummary>
      </CardHeader>

      {expanded && (
        <DetailArea>
          <DetailLabel>
            AI MODEL INPUT
          </DetailLabel>

          <DetailTitle>
            ML 학습 데이터
          </DetailTitle>

          <FeatureGrid>
            {features.map((feature) => (
              <FeatureItem key={feature.code}>
                <FeatureCode>
                  {feature.code}
                </FeatureCode>

                <FeatureName>
                  {feature.name}
                </FeatureName>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </DetailArea>
      )}
    </DataCard>
  );
};

export default KhpCard;