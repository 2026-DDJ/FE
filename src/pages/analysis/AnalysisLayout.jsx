import { useState } from "react";
import { Outlet } from "react-router-dom";

const AnalysisLayout = () => {
  const [formData, setFormData] = useState({
    // 1단계 - 기본 정보
    birthYear: "2005",
    gender: "female",
    region: "서울특별시",
    income: "300-500",

    // 2단계 - 건강 정보
    height: "160",
    chronicDisease: "none",
    weight: "50",
    healthStatus: "very-good",

    // 3단계 - 건강 행태
    smoking: "never",
    exercise: "regular",
    drinking: "once-week",
  });

  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Outlet
      context={{
        formData,
        updateField,
      }}
    />
  );
};

export default AnalysisLayout;