import { cn } from "@/lib/utils";
import textAreaStyle from "./text-area.module.scss";
import { forwardRef, Ref, useId } from "react";
import usePlaceholderTyping from "@/hooks/placeholder.hook";
import Field from "../forms/Field";

const TextArea = forwardRef(
  (
    { label, withFieldWrapper, ...props }: FormUI.TextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const cid = useId();
    usePlaceholderTyping(cid);
    return (
      <Field label={label} withFieldWrapper={withFieldWrapper}>
        <textarea
          {...props}
          ref={ref}
          className={cn(props.className, textAreaStyle["text-area"])}
        />
      </Field>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
