import { useId } from "react";
import styled from "styled-components";

export default function IncomeSlider({ value, onChange, options, "aria-label": label }) {
  const id = useId();
  const selected = options.findIndex((option) => option.value === value);
  return (
    <Container>
      <Selection id={`${id}-value`} aria-live="polite">
        {selected < 0 ? "소득 구간을 선택해주세요." : options[selected].label}
      </Selection>
      <Hint id={`${id}-hint`}>원을 좌우로 움직이거나 아래 구간을 눌러주세요.</Hint>
      <Slider type="range" min="0" max={options.length - 1} step="1"
        value={Math.max(0, selected)} aria-label={label}
        aria-valuetext={selected < 0 ? "선택하지 않음" : options[selected].label}
        aria-describedby={`${id}-hint`}
        onChange={(event) => onChange(options[Number(event.target.value)].value)} />
      <Options role="group" aria-label="연간 소득 구간">
        {options.map((option) => (
          <Option key={option.value} type="button" $active={value === option.value}
            aria-pressed={value === option.value} onClick={() => onChange(option.value)}>
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}
const Container = styled.div`min-width: 0;`;
const Selection = styled.p`
  color: #21735d;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;
const Hint = styled.p`font-size: 18px; line-height: 1.5; margin-top: 8px;`;
const Slider = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  margin: 12px 0;
  appearance: none;
  background: transparent;
  &::-webkit-slider-runnable-track { height: 8px; background: #a5d7c9; border-radius: 4px; }
  &::-moz-range-track { height: 8px; background: #a5d7c9; border-radius: 4px; }
  cursor: pointer;
  &:focus-visible { outline: 3px solid #1558a6; outline-offset: 3px; }
  &::-webkit-slider-thumb { appearance: none; width: 32px; height: 32px; margin-top: -12px; border: 2px solid #fff; border-radius: 50%; background: #21735d; box-shadow: 0 0 0 1px #21735d; }
  &::-moz-range-thumb { width: 32px; height: 32px; border: 2px solid #fff; border-radius: 50%; background: #21735d; box-shadow: 0 0 0 1px #21735d; }
`;
const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  @media (max-width: 380px) { grid-template-columns: 1fr; }
`;
const Option = styled.button`
  min-height: 56px;
  padding: 10px;
  border: 2px solid #21735d;
  border-radius: 6px;
  background: ${({ $active }) => $active ? "#21735d" : "#fff"};
  color: ${({ $active }) => $active ? "#fff" : "#21735d"};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  cursor: pointer;
  &:focus-visible { outline: 3px solid #1558a6; outline-offset: 3px; }
`;
