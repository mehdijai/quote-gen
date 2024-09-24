declare namespace ButtonUI {
  type ButtonColors = "primary" | "secondary" | "error" | "warning";
  type ButtonVariants = "filled" | "outlined" | "text" | "tonal";
  export type ButtonProps = {
    children?: React.ReactNode;
    color?: ButtonColors;
    variant?: ButtonVariants;
    icon?: string | boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
}
