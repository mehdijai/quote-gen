import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";
import fieldBaseArgtypes from "./field-base-argtypes";

const meta: Meta<typeof TextField> = {
  title: "Design System/UI/Text Field",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: `Text Field UI Component.`,
      },
    },
  },
  render: (args) => <TextField {...args} />,
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
  argTypes: fieldBaseArgtypes
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextFieldStory: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const TextFieldWithWrapper: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    withFieldWrapper: true,
  },
};
