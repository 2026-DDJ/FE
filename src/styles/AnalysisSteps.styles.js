import styled from "styled-components";

import { COLORS } from "./Common.styles";

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0;
`;

export const StepCircle = styled.div`
  width: 62px;
  height: 62px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.5px solid ${COLORS.pink};
  border-radius: 50%;

  background: ${({ $active }) =>
    $active ? COLORS.pink : "transparent"};

  color: ${({ $active }) =>
    $active ? COLORS.background : COLORS.pink};

  font-family: "Akira Expanded", sans-serif;
  font-size: 22px;
  font-weight: 700;

  transition:
    background 0.3s ease,
    color 0.3s ease;
`;