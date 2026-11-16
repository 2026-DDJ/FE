import {
  FieldContainer,
  FieldHeader,
  FieldTitle,
  FieldDescription,
  FieldCount,
  FieldControl,
} from "../../styles/AnalysisForm.styles.js";

const FormField = ({
  icon,
  title,
  description,
  count,
  children,
}) => {
  return (
    <FieldContainer>
      <FieldHeader>
        {icon && <span>{icon}</span>}

        <FieldTitle>{title}</FieldTitle>
      </FieldHeader>

      <FieldDescription>
        {description}
        {count != null && <FieldCount aria-live="polite">{count}명</FieldCount>}
      </FieldDescription>

      <FieldControl>
        {children}
      </FieldControl>
    </FieldContainer>
  );
};

export default FormField;