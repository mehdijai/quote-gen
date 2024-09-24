import { cn } from "@/lib/utils";
import buttonStyle from "./button.module.scss";
import Icon from "../Icon";

export default function Button({
  children,
  color,
  variant,
  icon,
  ...props
}: ButtonUI.ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        buttonStyle.button,
        color ? buttonStyle["c-" + color] : buttonStyle["c-default"],
        variant ? buttonStyle["v-" + variant] : buttonStyle["v-default"],
        icon && buttonStyle["is-icon"]
      )}
    >
      {icon && typeof icon === "string" ? <Icon name={icon} /> : children}
    </button>
  );
}
