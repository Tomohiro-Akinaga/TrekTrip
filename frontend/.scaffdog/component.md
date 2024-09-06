---
name: "component"
root: "./src/components"
output: "*"
ignore: [./src/components]
questions:
  name: "Please enter a component name:"
  test:
    confirm: "Do you need a test?"
    initial: false
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import React, { PropsWithChildren } from "react";

interface Props {}

const {{ inputs.name | pascal }} = ({ children }: PropsWithChildren<Props>) => {
  return <div>{children}</div>;
};

export default {{ inputs.name | pascal }};
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import {{ inputs.name | pascal }} from "./index";

const meta = {
  title: "{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary */
export const Primary: Story = {
  args: {
    children: "{{ inputs.name | pascal }}",
  },
};

/** Secondary */
export const Secondary: Story = {
  args: {
    children: "{{ inputs.name | pascal }}",
  },
};
```

# `{{ !inputs.test && '!' }}{{ inputs.name | pascal }}/index.test.tsx`

```tsx
import React from "react";
import {{ inputs.name | pascal }} from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe({{ inputs.name | pascal }}, () => {
  test("initial render", () => {
    const children = "{{ inputs.name | pascal }}";

    render(<{{ inputs.name | pascal }}>{children}</{{ inputs.name | pascal }}>);

    expect(screen.getByText("{{ inputs.name | pascal }}")).toBeInTheDocument();
  });
});
```

# `{{ inputs.name | pascal }}/index.module.css`

```css
.wrapper {
}
```
