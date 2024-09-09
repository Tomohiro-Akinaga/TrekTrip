import type { Meta, StoryObj } from "@storybook/react";
import HomeLayout from "./index";

const meta = {
  title: "HomeLayout",
  component: HomeLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HomeLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "HomeLayout",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "HomeLayout",
  },
};