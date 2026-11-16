import { useState } from "react";
import { COLORS } from "../../styles/Common.styles";
import styled from "styled-components";

export default function HouseholdSizeInput({ value, onChange, "aria-label": label }) {
  const [selected, setSelected] = useState(() =>
    Array.from({ length: 10 }, (_, index) => index < Number(value)),
  );
  const togglePerson = (index) => {
    const next = selected.map((active, person) => person === index ? !active : active);
    setSelected(next);
    const count = next.filter(Boolean).length;
    onChange(count ? String(count) : "");
  };
  return (
    <Choices role="group" aria-label={label}>
      {Array.from({ length: 10 }, (_, index) => index).map((index) => (
        <Choice key={index} type="button" $active={selected[index]}
          aria-label={`${index + 1}번째 사람`}
          aria-pressed={selected[index]} onClick={() => togglePerson(index)}>
          <svg width="40" height="48" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="4" />
            <path d="M7 11h10a3 3 0 0 1 3 3v7h-4v7H8v-7H4v-7a3 3 0 0 1 3-3Z" />
          </svg>
        </Choice>
      ))}
    </Choices>
  );
}

const Choices = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
`;
const Choice = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 44px;
  min-height: 76px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${COLORS.pink};
  svg { opacity: ${({ $active }) => $active ? 1 : 0.3}; }
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:hover svg { opacity: 0.7; }
  &:focus-visible { outline: 3px solid ${COLORS.focus}; outline-offset: 3px; }
`;
