import {
  FieldContainer,
  FieldHeader,
  FieldTitle,
  FieldDescription,
  FieldControl,
} from "../../styles/AnalysisForm.styles.js";

const FormField = ({
  icon,
  title,
  description,
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
      </FieldDescription>

      <FieldControl>
        {children}
      </FieldControl>
    </FieldContainer>
  );
};

export default FormField;