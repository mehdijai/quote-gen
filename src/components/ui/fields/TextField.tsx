import { cn } from "@/lib/utils";
import inputField from "./input-field.module.scss";
import { forwardRef, Ref, useId } from "react";
import usePlaceholderTyping from "@/hooks/placeholder.hook";
import Field from "../forms/Field";

const TextField = forwardRef(
  (
    { label, withFieldWrapper, ...props }: FormUI.TextFieldProps,
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
          type="text"
          className={cn(props.className, inputField.input)}
        />
      </Field>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;
