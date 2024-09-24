import fieldStyle from "./field.module.scss";

export default function Field({
  label,
  withFieldWrapper,
  children,
}: FormUI.FieldProps) {
  return (
    <Wrapper withField={Boolean(withFieldWrapper)}>
      {withFieldWrapper && label && (
        <label className={fieldStyle.label}>{label}</label>
      )}
      {children}
    </Wrapper>
  );
}

function Wrapper({
  withField,
  children,
}: {
  withField: boolean;
  children: React.ReactNode;
}) {
  return withField ? (
    <fieldset className={fieldStyle.fieldset}>{children}</fieldset>
  ) : (
    <>{children}</>
  );
}
