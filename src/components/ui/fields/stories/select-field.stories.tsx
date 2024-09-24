import type { Meta, StoryObj } from "@storybook/react";
import SelectField from "../SelectField";
import fieldBaseArgtypes from "./field-base-argtypes";

const meta: Meta<typeof SelectField> = {
  title: "Design System/UI/Select Field",
  component: SelectField,
  parameters: {
    docs: {
      description: {
        component: `Select Field UI Component.`,
      },
    },
  },
  render: (args) => <SelectField {...args} />,
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
  argTypes: {
    label: fieldBaseArgtypes.label,
    placeholder: fieldBaseArgtypes.placeholder,
    withFieldWrapper: fieldBaseArgtypes.withFieldWrapper,
    renderElement: {
      description: "Render function for the select field.",
      type: {
        name: "function",
      },
    },
    items: {
      description:
        "Items of the select field. It's an Array of Strings or Object.",
      control: {
        type: "object",
      },
      type: {
        name: "array",
        required: true,
        value: {
          name: "string",
        },
      },
      table: {
        type: {
          summary:
            "string[] | {value: string, label: string, icon?: string, image?: string}[}",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const SelectFieldStory: Story = {
  args: {
    label: "Label",
    placeholder: "Select a gender",
    withFieldWrapper: false,
    items: ["Male", "Female"],
  },
};

export const SelectFieldWithIconStory: Story = {
  args: {
    label: "Label",
    placeholder: "Select type",
    withFieldWrapper: false,
    items: [
      {
        value: "public",
        label: "Public",
        icon: "rss",
      },
      {
        value: "private",
        label: "Private",
        icon: "shield",
      },
    ],
  },
};

export const SelectFieldWithImageStory: Story = {
  args: {
    label: "Label",
    placeholder: "Select user",
    withFieldWrapper: false,
    items: [
      {
        value: "44274173-285a-405c-a102-ce80fcbc4ba5",
        label: "User 1",
        image: "https://i.pravatar.cc/50",
      },
      {
        value: "ae631808-0da8-4477-a640-8db925ba6ffe",
        label: "User 2",
        image: "https://i.pravatar.cc/55",
      },
    ],
  },
};

export const SelectFieldWithWrapperStory: Story = {
  args: {
    label: "Label",
    placeholder: "Select a gender",
    items: ["Male", "Female"],
    withFieldWrapper: true,
  },
};

export const SelectFieldWithRendererCallbackStory: Story = {
  args: {
    label: "Label",
    placeholder: "Select a gender",
    items: ["Male", "Female"],
    withFieldWrapper: true,
    renderElement: (item) => {
      return <span style={{ color: "red" }}>{item as string}</span>;
    },
  },
};

export const SelectFieldWithRendererCallbackWithOptionUIStory: Story = {
  args: {
    label: "Label",
    placeholder: "Select a gender",
    items: ["Male", "Female"],
    withFieldWrapper: true,
    renderElement: (item) => {
      return (
        <SelectField.Option item={item}>
          <span style={{ color: "red" }}>{item as string}</span>
        </SelectField.Option>
      );
    },
  },
};
