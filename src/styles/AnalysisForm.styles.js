
import styled from "styled-components";
import { COLORS } from "./Common.styles";


/* =========================
   Form Field Card
========================= */

export const FieldContainer = styled.div`
  width: 100%;
  min-height: 220px;

  padding: 34px 40px 32px;

  display: flex;
  flex-direction: column;

  border: 1px solid color-mix(in srgb, ${COLORS.pink} 80%, transparent);
  border-radius: 8px;

  background: color-mix(in srgb, ${COLORS.button} 20%, transparent);
  @media (max-width: 600px) { min-height: 190px; padding: 20px; }
`;

export const FieldHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const FieldTitle = styled.h3`
  margin: 0;

  color: ${COLORS.white};

  font-size: 32px;
  @media (max-width: 600px) { font-size: 24px; }
  font-weight: 700;
`;

export const FieldDescription = styled.p`
  @media (max-width: 600px) { font-size: 16px; }
  ${({ $withCount }) => $withCount && "display: flex; align-items: baseline; gap: 8px;"}
  margin-top: 8px;

  color: color-mix(in srgb, ${COLORS.white} 90%, transparent);

  font-size: 20px;
  line-height: 1.5;
  white-space: pre-line;
  font-weight: 400;
`;

export const FieldCount = styled.span`
  display: inline-block;
  flex-shrink: 0;
  color: ${COLORS.pink};
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
`;

export const FieldControl = styled.div`
  width: 100%;

  margin-top: auto;
  padding-top: 26px;
`;

/* =========================
   Select
========================= */

export const SelectContainer = styled.div`
  position: relative;

  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 58px;

  padding: 0 52px 0 20px;

  border: none;
  border-radius: 4px;

  outline: none;

  background: ${COLORS.pink};

  color: ${COLORS.background};

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  appearance: none;
`;

export const SelectArrow = styled.span`
  position: absolute;

  top: 50%;
  right: 20px;

  transform: translateY(-50%);

  color: ${COLORS.background};

  font-size: 18px;

  pointer-events: none;
`;

/* =========================
   Text Input
========================= */

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 20px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;

  height: 58px;

  padding: 0 20px;

  border: none;
  border-radius: 4px;

  outline: none;

  background: ${COLORS.pink};

  color: ${COLORS.background};

  font-size: 18px;
  font-weight: 700;

  &::placeholder {
    color: color-mix(in srgb, ${COLORS.background} 45%, transparent);
  }
`;

export const InputSuffix = styled.span`
  width: 44px;

  color: ${COLORS.pink};

  font-size: 18px;
  font-weight: 700;

  flex-shrink: 0;
`;

/* =========================
   Option Buttons
========================= */

export const OptionButtonContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: ${({ $count }) =>
    `repeat(${$count}, minmax(0, 1fr))`};

  gap: 12px;
  @media (max-width: 600px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;

export const OptionButton = styled.button`
  min-height: 58px;
  padding: 10px 8px;

  border: 1px solid ${COLORS.pink};
  border-radius: 4px;

  background: ${({ $active }) =>
    $active ? COLORS.pink : "transparent"};

  color: ${({ $active }) =>
    $active ? COLORS.background : COLORS.pink};

  font-size: 18px;
  font-weight: 700;

  > span { white-space: pre-line; line-height: 1.3; }
  @media (max-width: 600px) { font-size: 16px; }

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:focus-visible { outline: 3px solid ${COLORS.focus}; outline-offset: 3px; }

  &:hover {
    background: ${({ $active }) =>
      $active
        ? COLORS.pink
        : `color-mix(in srgb, ${COLORS.pink} 8%, transparent)`};
  }
`;
