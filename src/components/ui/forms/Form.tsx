import formStyle from "./form.module.scss";
import { cn } from "@/lib/utils";
import Button from "@cmp/ui/button/Button";
import TextField from "../fields/TextField";
import NumberField from "../fields/NumberField";
import TextArea from "../fields/TextArea";
import SelectField from "../fields/SelectField";

export default function Form({ children, ...props }: FormUI.FormProps) {
  return (
    <form {...props} className={cn(props.className, formStyle.form)}>
      {children}
    </form>
  );
}

Form.TextField = TextField;
Form.NumberField = NumberField;
Form.TextArea = TextArea;
Form.SelectField = SelectField;
Form.Button = Button;
