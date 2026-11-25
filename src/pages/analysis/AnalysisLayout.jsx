import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DEFAULT_ASSESSMENT } from "../../utils/assessment";

const AnalysisLayout = () => {
  const [formData, setFormData] = useState(() => ({ ...DEFAULT_ASSESSMENT }));

  const updateField = (name, value) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return <Outlet context={{ formData, updateField }} />;
};

export default AnalysisLayout;
