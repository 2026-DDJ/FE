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

  border: none;
  border-radius: 0.5rem;

  background: rgba(255, 219, 237, 0.8);

  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

  color: ${COLORS.background};

  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background: rgba(255, 219, 237, 0.95);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;