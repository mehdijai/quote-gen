import type { Meta, StoryObj } from "@storybook/react";
import fieldBaseArgtypes from "./field-base-argtypes";
import TextArea from "../TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Design System/UI/Text Area",
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: `Text Area UI Component.`,
      },
    },
  },
  render: (args) => <TextArea {...args} />,
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
type Story = StoryObj<typeof TextArea>;

export const TextAreaStory: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const TextAreaWithWrapper: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    withFieldWrapper: true,
  },
};
