import type { Meta, StoryObj } from "@storybook/react";
import NumberField from "../NumberField";
import fieldBaseArgtypes from "./field-base-argtypes";

const meta: Meta<typeof NumberField> = {
  title: "Design System/UI/Number Field",
  component: NumberField,
  parameters: {
    docs: {
      description: {
        component: `Number Field UI Component.`,
      },
    },
  },
  render: (args) => <NumberField {...args} />,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "3em 0",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    withFieldWrapper: false,
  },
  argTypes: {
    ...fieldBaseArgtypes,
    defaultValue: {
      ...fieldBaseArgtypes.defaultValue,
      control: "number",
      table: {
        ...fieldBaseArgtypes.defaultValue.table,
        type: {
          summary: "number | undefined",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const NumberFieldStory: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: 57,
  },
};

export const NumberFieldWithWrapper: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    withFieldWrapper: true,
  },
};
