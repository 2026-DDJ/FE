import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Button from "../../components/Button";

import AnalysisSteps from "../../components/analysis/AnalysisSteps";
import FormField from "../../components/analysis/FormField";
import SelectInput from "../../components/analysis/SelectInput";
import OptionButtons from "../../components/analysis/OptionButtons";

import {
  AnalysisContainer,
  AnalysisContent,
  Title,
  FormGrid,
  ButtonArea,
} from "../../styles/Analysis.styles";

const Analysis1 = () => {
  const navigate = useNavigate();

  const [birthYear, setBirthYear] = useState("2005");
  const [gender, setGender] = useState("female");
  const [region, setRegion] = useState("서울특별시");
  const [income, setIncome] = useState("300-500");

  return (
    <AnalysisContainer>
      <Header />

      <AnalysisContent>
        <AnalysisSteps currentStep={1} />

        <Title>기본 정보</Title>

        <FormGrid>
          <FormField
            icon="🎂"
            title="출생년도"
            description="태어난 연도를 선택해주세요."
          >
            <SelectInput
              value={birthYear}
              onChange={setBirthYear}
              options={Array.from({ length: 100 }, (_, i) => {
                const year = 2026 - i;
                return {
                  value: year.toString(),
                  label: year.toString(),
                };
              })}
            />
          </FormField>

          <FormField
            icon="🚻"
            title="성별"
            description="성별을 선택해주세요."
          >
            <OptionButtons
              value={gender}
              onChange={setGender}
              options={[
                {
                  value: "female",
                  label: "여성",
                },
                {
                  value: "male",
                  label: "남성",
                },
              ]}
            />
          </FormField>

          <FormField
            icon="📍"
            title="거주 지역"
            description="거주하는 지역을 선택해주세요."
          >
            <SelectInput
  value={region}
  onChange={setRegion}
  options={[
    { value: "서울특별시", label: "서울특별시" },
    { value: "부산광역시", label: "부산광역시" },
    { value: "대구광역시", label: "대구광역시" },
    { value: "인천광역시", label: "인천광역시" },
    { value: "광주광역시", label: "광주광역시" },
    { value: "대전광역시", label: "대전광역시" },
    { value: "울산광역시", label: "울산광역시" },
    { value: "세종특별자치시", label: "세종특별자치시" },
    { value: "경기도", label: "경기도" },
    { value: "강원특별자치도", label: "강원특별자치도" },
    { value: "충청북도", label: "충청북도" },
    { value: "충청남도", label: "충청남도" },
    { value: "전북특별자치도", label: "전북특별자치도" },
    { value: "전라남도", label: "전라남도" },
    { value: "경상북도", label: "경상북도" },
    { value: "경상남도", label: "경상남도" },
    { value: "제주특별자치도", label: "제주특별자치도" },
  ]}
/>
          </FormField>

          <FormField
            icon="💰"
            title="연간 소득"
            description="연 평균 소득을 선택해주세요."
          >
<SelectInput
  value={income}
  onChange={setIncome}
  options={[
    {
      value: "none",
      label: "소득 없음",
    },
    {
      value: "under-3000",
      label: "3,000만원 미만",
    },
    {
      value: "3000-4000",
      label: "3,000만원 ~ 4,000만원",
    },
    {
      value: "4000-5000",
      label: "4,000만원 ~ 5,000만원",
    },
    {
      value: "5000-6000",
      label: "5,000만원 ~ 6,000만원",
    },
    {
      value: "6000-7000",
      label: "6,000만원 ~ 7,000만원",
    },
    {
      value: "7000-8000",
      label: "7,000만원 ~ 8,000만원",
    },
    {
      value: "8000-9000",
      label: "8,000만원 ~ 9,000만원",
    },
    {
      value: "9000-10000",
      label: "9,000만원 ~ 1억원",
    },
    {
      value: "over-10000",
      label: "1억원 이상",
    },
  ]}
/>
          </FormField>
        </FormGrid>

        <ButtonArea>
          <Button
            onClick={() => navigate("/analysis/2")}
          >
            다음으로 →
          </Button>
        </ButtonArea>
      </AnalysisContent>
    </AnalysisContainer>
  );
};

export default Analysis1;