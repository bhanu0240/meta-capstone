import { ReactNode } from "react";

export interface FormFieldProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  hasError: boolean;
  errorMessage?: string;
}

const FormField = ({
  children,
  label,
  htmlFor,
  hasError,
  errorMessage,
}: FormFieldProps) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default FormField;
