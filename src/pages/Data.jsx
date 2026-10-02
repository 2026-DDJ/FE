import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/Button";

import HiraCard from "../components/data/HiraCard";
import KhpCard from "../components/data/KhpCard";
import NhisCard from "../components/data/NhisCard";

import {
  DataContainer,
  DataContent,
  LeftSection,
  DetailCardArea,
  CardList,
  RightSection,
  DataTitle,
  DataDescription,
  ButtonArea,
} from "../styles/Data.styles";

const DATA_SOURCES = [
  {
    id: "hira",
    Component: HiraCard,
  },
  {
    id: "khp",
    Component: KhpCard,
  },
  {
    id: "nhis",
    Component: NhisCard,
  },
];

const Data = () => {
  const navigate = useNavigate();

  const [selectedData, setSelectedData] =
    useState("khp");

  const handleSelect = (id) => {
    if (id === selectedData) return;

    const changeCard = () => {
      setSelectedData(id);
    };

    if (!document.startViewTransition) {
      changeCard();
      return;
    }

    document.startViewTransition(changeCard);
  };

  const selectedSource = DATA_SOURCES.find(
    (source) => source.id === selectedData
  );

  const SelectedCard = selectedSource.Component;

  return (
    <DataContainer>
      <Header />

      <DataContent>
        <LeftSection>
          <DetailCardArea>
            <SelectedCard
              expanded
              transitionName={`data-card-${selectedData}`}
            />
          </DetailCardArea>

          <CardList>
            {DATA_SOURCES
              .filter(
                (source) =>
                  source.id !== selectedData
              )
              .map(({ id, Component }) => (
                <Component
                  key={id}
                  onClick={() => handleSelect(id)}
                  transitionName={`data-card-${id}`}
                />
              ))}
          </CardList>
        </LeftSection>

        <RightSection>
          <DataTitle>
            DATA
            <br />
            OVERVIEW
          </DataTitle>

          <DataDescription>
            한국의료패널(KHP)의 개인 단위 데이터를 기반으로
            <br/>
            머신러닝 모델을 학습하여 연간
            의료비를 예측합니다.
            <br />
            <br />
            예측 결과는 HIRA·NHIS 공공통계와 비교하여
            <br/>
            유사 집단 내 의료비 수준을 함께 제공합니다.
          </DataDescription>

          <ButtonArea>
            <Button
              onClick={() =>
                navigate("/analysis")
              }
            >
              의료비 예측하기
            </Button>
          </ButtonArea>
        </RightSection>
      </DataContent>
    </DataContainer>
  );
};

export default Data;