import type { Meta, StoryObj } from "@storybook/react";
import DateTimeLocal from "./index";

const meta = {
  title: "DateTimeLocal",
  component: DateTimeLocal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DateTimeLocal>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "DateTimeLocal",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "DateTimeLocal",
  },
};