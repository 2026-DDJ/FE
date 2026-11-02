
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

  border: 1.5px solid #29AE89;
  border-radius: 50%;

  background: ${({ $active }) =>
    $active ? "#29AE89" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#FFFFFF" : "#29AE89"};

  font-family: "Akira Expanded", sans-serif;
  font-size: 22px;
  font-weight: 700;

  transition:
    background 0.3s ease,
    color 0.3s ease;
`;
