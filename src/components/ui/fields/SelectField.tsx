import { cn } from "@/lib/utils";
import selectFieldStyle from "./select-field.module.scss";
import React, { createContext, useContext, useRef, useState } from "react";
import Icon from "../Icon";
import Field from "../forms/Field";
import useOutside from "@/hooks/outside-click.hook";

const SelectFieldContext = createContext<FormUI.SelectFieldContext | null>(
  null
);

export default function SelectField({
  items,
  renderElement,
  label,
  onValueChange,
  placeholder,
}: FormUI.SelectFieldProps) {
  const [activeElement, setActiveElement] =
    useState<FormUI.SelectSelectedValue>(null);
  const [openOptions, setOpenOptions] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutside(wrapperRef, () => setOpenOptions(false));

  const stringifiedValue =
    typeof activeElement === "string" ? activeElement : activeElement?.value;

  const stringifiedLabel =
    typeof activeElement === "string" ? activeElement : activeElement?.label;

  onValueChange?.(stringifiedValue ?? null);

  return (
    <Field label={label}>
      <SelectFieldContext.Provider value={{ activeElement, setActiveElement }}>
        <div
          ref={wrapperRef}
          className={cn(selectFieldStyle.select, {
            [selectFieldStyle.open]: openOptions,
          })}
          onClick={() => setOpenOptions(!openOptions)}
        >
          <span className={selectFieldStyle.value}>
            {stringifiedLabel ?? placeholder ?? "Select"}
          </span>
          <SelectFieldRenderer {...{ renderElement, items }} />
        </div>
      </SelectFieldContext.Provider>
    </Field>
  );
}

function SelectFieldRenderer({
  items,
  renderElement,
}: FormUI.SelectFieldRenderer) {
  return (
    <div className={selectFieldStyle.options}>
      {items.map((item, index) => {
        if (renderElement) return renderElement(item, index);
        return (
          <SelectFieldOption item={item} key={index}>
            {typeof item === "string" ? (
              <SelectFieldOptionLabel label={item} />
            ) : (
              <>
                {item.image && <SelectFieldOptionImage imageSrc={item.image} />}
                <SelectFieldOptionLabel label={item.label} />
                {item.icon && <SelectFieldOptionIcon iconName={item.icon} />}
              </>
            )}
          </SelectFieldOption>
        );
      })}
    </div>
  );
}

function SelectFieldOption({
  children,
  item,
}: {
  children: React.ReactNode;
  item: string | FormUI.SelectOptionItem;
}) {
  const context = useContext(SelectFieldContext);
  if (!context)
    throw new Error(
      "SelectFieldOption must be used within a SelectField component"
    );
  const { activeElement, setActiveElement } = context;
  return (
    <div
      onClick={() => setActiveElement(item)}
      className={cn(selectFieldStyle["option"], {
        active: activeElement === item,
      })}
    >
      {children}
    </div>
  );
}

function SelectFieldOptionLabel({ label }: { label: string | number }) {
  return <span className={selectFieldStyle.option_label}>{label}</span>;
}

function SelectFieldOptionImage({ imageSrc }: { imageSrc: string }) {
  return (
    <span className={selectFieldStyle.option_image}>
      <img src={imageSrc} />
    </span>
  );
}
function SelectFieldOptionIcon({ iconName }: { iconName: string }) {
  return (
    <span className={selectFieldStyle.option_icon}>
      <Icon name={iconName} />
    </span>
  );
}

SelectField.Option = SelectFieldOption;
SelectField.Label = SelectFieldOptionLabel;
SelectField.Image = SelectFieldOptionImage;
SelectField.Icon = SelectFieldOptionIcon;
