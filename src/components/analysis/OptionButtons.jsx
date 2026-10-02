import {
  OptionButtonContainer,
  OptionButton,
} from "../../styles/AnalysisForm.styles";

const OptionButtons = ({
  value,
  onChange,
  options,
}) => {
  return (
    <OptionButtonContainer
      $count={options.length}
    >
      {options.map((option) => (
        <OptionButton
          key={option.value}
          type="button"
          $active={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </OptionButton>
      ))}
    </OptionButtonContainer>
  );
};

export default OptionButtons;