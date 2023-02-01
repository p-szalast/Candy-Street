import { FieldInputProps } from "formik";
import { Input, Label, VFlexBox } from "../../common/styles/componentsStyles";

const PersonalDataFormInput = ({
  fieldName,
  error,
  touched,
  fieldInputProps,
  label,
}: {
  fieldName: string;
  error: string | undefined;
  touched: boolean | undefined;
  fieldInputProps: FieldInputProps<any>;
  label: string;
}) => {
  const hasError = Boolean(touched && error);
  return (
    <VFlexBox $hasError={hasError}>
      <Label htmlFor={fieldName}>{label}</Label>
      <Input id={fieldName} type="text" {...fieldInputProps} />
      {hasError && <div className="error-message">{error}</div>}
    </VFlexBox>
  );
};

export default PersonalDataFormInput;
