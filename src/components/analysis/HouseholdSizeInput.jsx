import styled from "styled-components";

export default function HouseholdSizeInput({ value, onChange, "aria-label": label }) {
  return (
    <Choices role="group" aria-label={label}>
      {Array.from({ length: 10 }, (_, index) => String(index + 1)).map((count) => (
        <Choice key={count} type="button" $active={value === count}
          aria-pressed={value === count} onClick={() => onChange(count)}>
          <svg width="24" height="28" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="4" />
            <path d="M7 11h10a3 3 0 0 1 3 3v7h-4v7H8v-7H4v-7a3 3 0 0 1 3-3Z" />
          </svg>
          <span>{count}명</span>
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
  border: 2px solid #21735d;
  border-radius: 8px;
  background: ${({ $active }) => $active ? "#21735d" : "#fff"};
  color: ${({ $active }) => $active ? "#fff" : "#21735d"};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:hover { box-shadow: inset 0 0 0 2px #21735d; }
  &:focus-visible { outline: 3px solid #1558a6; outline-offset: 3px; }
`;
