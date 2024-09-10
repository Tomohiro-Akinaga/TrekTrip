import type { Meta, StoryObj } from "@storybook/react";
import SelectDateTime from "./index";

const meta = {
  title: "SelectDateTime",
  component: SelectDateTime,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SelectDateTime>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "SelectDateTime",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "SelectDateTime",
  },
};