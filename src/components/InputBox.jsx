import styled from "styled-components";
import { COLORS } from "../styles/Common.styles";

const InputBox = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  autoComplete,
  status,
}) => {
  return (
    <InputBoxContainer>
      <Label htmlFor={name}>{label}</Label>

      <InputWrapper>
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
        />

        {status && (
          <StatusIcon>
            {status === "success" ? "✅" : "❌"}
          </StatusIcon>
        )}
      </InputWrapper>
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div`
  width: 580px;
  padding: 34px 38px 40px;

  display: flex;
  flex-direction: column;
  gap: 26px;

  background: ${COLORS.button};

  border: 1px solid ${COLORS.pink};
  border-radius: 8px;
`;

const Label = styled.label`
  color: ${COLORS.pink};

  font-size: 27px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  position: relative;

  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;

  padding: 0 60px 0 20px;

  background: ${COLORS.pink};
  color: ${COLORS.background};

  border: none;
  border-radius: 3px;
  outline: none;

  font-size: 18px;
  font-weight: 600;
`;

const StatusIcon = styled.span`
  position: absolute;

  top: 50%;
  right: 20px;

  transform: translateY(-50%);

  font-size: 22px;
`;