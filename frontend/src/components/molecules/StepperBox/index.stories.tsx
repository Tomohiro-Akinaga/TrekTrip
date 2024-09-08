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
  {
    summary: "summary",
    station: "東京",
    time: "14:10",
    transport: { line: "西武新宿線", destination: "所沢行き" },
  },
  {
    summary: "summary",
    station: "東京",
    time: "14:10着16:10出",
    transport: { line: "", destination: "" },
  },
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
