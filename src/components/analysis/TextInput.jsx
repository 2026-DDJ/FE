import {
  InputWrapper,
  Input,
  InputSuffix,
} from "../../styles/AnalysisForm.styles";

const TextInput = ({
  value,
  onChange,
  placeholder,
  suffix,
  type = "text",
  ...inputProps
}) => {
  return (
    <InputWrapper>
      <Input
        {...inputProps}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      {suffix && (
        <InputSuffix>
          {suffix}
        </InputSuffix>
      )}
    </InputWrapper>
  );
};

export default TextInput;