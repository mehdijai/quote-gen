import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";

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
  argTypes: {
    label: {
      control: "text",
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
      control: "text",
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
      control: "boolean",
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
  },
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
