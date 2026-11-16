import { useId } from "react";
import { COLORS } from "../../styles/Common.styles";
import styled from "styled-components";

export default function IncomeSlider({ value, onChange, options, "aria-label": label }) {
  const id = useId();
  const selected = options.findIndex((option) => option.value === value);
  return (
    <Container>
      <Selection id={`${id}-value`} aria-live="polite">
        {selected < 0 ? "소득 구간을 선택해주세요." : options[selected].label}
      </Selection>
      <Hint id={`${id}-hint`}>원을 좌우로 움직여 소득 구간을 선택해주세요.</Hint>
      <Slider type="range" min="0" max={options.length - 1} step="1"
        value={Math.max(0, selected)} aria-label={label}
        aria-valuetext={selected < 0 ? "선택하지 않음" : options[selected].label}
        aria-describedby={`${id}-hint`}
        onPointerUp={(event) => onChange(options[Number(event.currentTarget.value)].value)}
        onChange={(event) => onChange(options[Number(event.target.value)].value)} />

    </Container>
  );
}
const Container = styled.div`min-width: 0;`;
const Selection = styled.p`
  color: ${COLORS.primaryText};
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
  &::-webkit-slider-runnable-track { height: 8px; background: ${COLORS.button}; border-radius: 4px; }
  &::-moz-range-track { height: 8px; background: ${COLORS.button}; border-radius: 4px; }
  cursor: pointer;
  &:focus-visible { outline: 3px solid ${COLORS.focus}; outline-offset: 3px; }
  &::-webkit-slider-thumb { appearance: none; width: 32px; height: 32px; margin-top: -12px; border: 2px solid ${COLORS.background}; border-radius: 50%; background: ${COLORS.primaryText}; box-shadow: 0 0 0 1px ${COLORS.primaryText}; }
  &::-moz-range-thumb { width: 32px; height: 32px; border: 2px solid ${COLORS.background}; border-radius: 50%; background: ${COLORS.primaryText}; box-shadow: 0 0 0 1px ${COLORS.primaryText}; }
`;
