
import styled from "styled-components";


/* =========================
   Form Field Card
========================= */

export const FieldContainer = styled.div`
  width: 100%;
  min-height: 220px;

  padding: 34px 40px 32px;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(41, 174, 137, 0.8);
  border-radius: 8px;

  background: rgba(234, 247, 244, 0.2);
  @media (max-width: 600px) { padding: 24px; }
`;

export const FieldHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const FieldTitle = styled.h3`
  margin: 0;

  color: #202020;

  font-size: 32px;
  @media (max-width: 600px) { font-size: 28px; }
  font-weight: 700;
`;

export const FieldDescription = styled.p`
  margin-top: 8px;

  color: rgba(32, 32, 32, 0.9);

  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
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

  background: #29AE89;

  color: #FFFFFF;

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

  color: #FFFFFF;

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

  background: #29AE89;

  color: #FFFFFF;

  font-size: 18px;
  font-weight: 700;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const InputSuffix = styled.span`
  width: 44px;

  color: #29AE89;

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
  height: 58px;

  border: 1px solid #29AE89;
  border-radius: 4px;

  background: ${({ $active }) =>
    $active ? "#29AE89" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#FFFFFF" : "#21735d"};

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${({ $active }) =>
      $active
        ? "#29AE89"
        : "rgba(41, 174, 137, 0.08)"};
  }
`;
