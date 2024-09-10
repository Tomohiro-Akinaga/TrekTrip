import type { Meta, StoryObj } from "@storybook/react";
import SearchForm from "./index";

const meta = {
  title: "SearchForm",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "SearchForm",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "SearchForm",
  },
};