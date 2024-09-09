import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";

const meta = {
  title: "Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "Icon",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "Icon",
  },
};