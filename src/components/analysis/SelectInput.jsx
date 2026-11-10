import {
  SelectContainer,
  Select,
  SelectArrow,
} from "../../styles/AnalysisForm.styles.js";

const SelectInput = ({
  value,
  onChange,
  options,
  ...selectProps
}) => {
  return (
    <SelectContainer>
      <Select
        {...selectProps}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>선택해주세요</option>
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