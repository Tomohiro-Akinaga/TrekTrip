import type { Meta, StoryObj } from "@storybook/react";
import SummaryBox from "./index";

const meta = {
  title: "SummaryBox",
  component: SummaryBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SummaryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "SummaryBox",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "SummaryBox",
  },
};