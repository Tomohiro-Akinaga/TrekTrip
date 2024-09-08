import type { Meta, StoryObj } from "@storybook/react";
import TypeText from "./index";

const meta = {
  title: "TypeText",
  component: TypeText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TypeText>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "TypeText",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "TypeText",
  },
};