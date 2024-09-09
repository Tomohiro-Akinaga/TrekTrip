import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";

const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "Header",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "Header",
  },
};