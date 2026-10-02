import {
  SelectContainer,
  Select,
  SelectArrow,
} from "../../styles/AnalysisForm.styles.js";

const SelectInput = ({
  value,
  onChange,
  options,
}) => {
  return (
    <SelectContainer>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>

      <SelectArrow>▼</SelectArrow>
    </SelectContainer>
  );
};

export default SelectInput;