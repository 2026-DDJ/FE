import styled from "styled-components";
import { COLORS } from "../styles/Common.styles";

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  min-width: 194px;
  height: 74px;
  padding: 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${COLORS.button};
  color: ${COLORS.pink};

  border: 1px solid ${COLORS.pink};
  border-radius: 8px;

  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background: ${COLORS.pink};
    color: ${COLORS.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;