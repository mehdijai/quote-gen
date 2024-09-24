import { Control } from "@storybook/blocks";

export default {
  label: {
    control: "text" as Control,
    description: "Label text for the text field",
    table: {
      defaultValue: {
        summary: "undefined",
      },
      type: {
        summary: "string | undefined",
      },
    },
  },
  placeholder: {
    control: "text" as Control,
    description: "Placeholder text for the text field",
    table: {
      defaultValue: {
        summary: "undefined",
      },
      type: {
        summary: "string | undefined",
      },
    },
  },
  withFieldWrapper: {
    control: "boolean" as Control,
    description: "Show the `fieldset` wrapper including the label",
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
    },
  },
  defaultValue: {
    control: "text" as Control,
    description: "The value of the input, the default React HTML behavior",
    table: {
      defaultValue: {
        summary: "undefined",
      },
      type: {
        summary: "string | undefined",
      },
    },
  },
};
