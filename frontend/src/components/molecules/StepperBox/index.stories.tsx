import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./index";

const meta = {
  title: "Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { label: "label", description: "desc" },
  { label: "label", description: "desc" },
];

/** Primary */
export const Primary: Story = {
  args: {
    children: "Stepper",
    steps: steps,
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "Stepper",
    steps: steps,
  },
};
