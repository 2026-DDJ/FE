
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

  background: color-mix(in srgb, ${COLORS.pink} 80%, transparent);

  box-shadow: 0 0 20px 0 color-mix(in srgb, ${COLORS.white} 25%, transparent);

  color: ${COLORS.background};

  font-size: 28px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background: color-mix(in srgb, ${COLORS.pink} 95%, transparent);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
