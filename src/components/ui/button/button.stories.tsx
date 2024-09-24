import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design System/UI/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Button UI component, with variant colors and styles.
        Also, Support fo lucid icon names,
        or just the Icon shape and attach the icon element inside`,
      },
    },
  },
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
  render: (args) => <Button {...args}>Button</Button>,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", undefined],
      description: "Button color",
      table: {
        defaultValue: {
          summary: "undefined",
        },
        type: {
          summary: '"primary" | "secondary" | "error" | "warning" | undefined',
        },
      },
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "text", "tonal", undefined],
      description: "Button style",
      table: {
        defaultValue: {
          summary: "undefined",
        },
        type: {
          summary: '"filled" | "outlined" | "text" | "tonal" | undefined',
        },
      },
    },
    icon: {
      control: "select",
      options: ["shield", "house", "user", false],
      description:
        "Set Button as icon wrapper. Either set the property to a `string`, it will inject an icon automatically, or set it as `true`, and it will only set the dimensions of the button to match icon style",
      table: {
        defaultValue: {
          summary: "undefined",
        },
        type: {
          summary: "string | boolean | undefined",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {};
