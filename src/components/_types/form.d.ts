declare namespace FormUI {
  export type FormProps = React.HTMLAttributes<HTMLFormElement> & {
    children: React.ReactNode;
  };

  export type InputFieldProps = {
    label?: string;
    withFieldWrapper?: boolean;
  };

  export type FieldProps = {
    label?: string;
    children?: React.ReactNode;
    withFieldWrapper?: boolean;
  };

  export type TextFieldProps = InputFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>;

  export type NumberFieldProps = InputFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>;

  export type TextAreaProps = InputFieldProps &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  // Select Field

  export type SelectSelectedValue = string | FormUI.SelectOptionItem | null;
  export interface SelectFieldContext {
    activeElement: SelectSelectedValue;
    setActiveElement: (value: SelectSelectedValue) => void;
  }

  export type SelectOptionItem = {
    value: string | number;
    label: string;
    icon?: string;
    image?: string;
  };

  export type SelectFieldRenderer = {
    items: string[] | SelectOptionItem[];
    renderElement?: (
      item: string | SelectOptionItem,
      index: number
    ) => React.ReactNode;
  };

  export type SelectFieldProps = {
    placeholder?: string;
    onValueChange?: (value: string | number | null) => void;
  } & InputFieldProps &
    SelectFieldRenderer;
}
