import { cn } from "@/lib/utils";
import inputField from "./input-field.module.scss";
import { forwardRef, Ref, useId } from "react";
import usePlaceholderTyping from "@/hooks/placeholder.hook";
import Field from "../forms/Field";

const NumberField = forwardRef(
  (
    { label, withFieldWrapper, ...props }: FormUI.NumberFieldProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const cid = useId();
    usePlaceholderTyping(cid);

    return (
      <Field label={label} withFieldWrapper={withFieldWrapper}>
        <input
          {...props}
          id={cid}
          ref={ref}
          type="number"
          className={cn(props.className, inputField.input)}
        />
      </Field>
    );
  }
);

NumberField.displayName = "NumberField";
export default NumberField;
