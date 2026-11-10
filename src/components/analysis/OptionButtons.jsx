import {
  OptionButtonContainer,
  OptionButton,
} from "../../styles/AnalysisForm.styles";

const OptionButtons = ({
  value,
  onChange,
  options,
  "aria-label": label,
}) => {
  return (
    <OptionButtonContainer
      $count={options.length}
      role="group"
      aria-label={label}
    >
      {options.map((option) => (
        <OptionButton
          key={option.value}
          type="button"
          $active={value === option.value}
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </OptionButton>
      ))}
    </OptionButtonContainer>
  );
};

export default OptionButtons;