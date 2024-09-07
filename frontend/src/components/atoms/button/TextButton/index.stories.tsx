import type { Meta, StoryObj } from "@storybook/react";
import TextButton from "./index";

const meta = {
  title: "TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "TextButton",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "TextButton",
  },
};