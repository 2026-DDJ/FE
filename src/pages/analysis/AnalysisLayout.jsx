import { useState } from "react";
import { Outlet } from "react-router-dom";
import { readAssessment, saveAssessment } from "../../utils/assessment";

const AnalysisLayout = () => {
  const [formData, setFormData] = useState(readAssessment);

  const updateField = (name, value) => {
    const next = { ...formData, [name]: value };
    setFormData(next);
    saveAssessment(next);
  };

  return <Outlet context={{ formData, updateField }} />;
};

export default AnalysisLayout;
