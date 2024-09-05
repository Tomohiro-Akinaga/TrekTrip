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

```typescript
export type Props = React.PropsWithChildren<{}>;

export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default { component: {{ inputs.name | pascal }} };
export const Overview = { args: {} };
```

# `{{ !inputs.test && '!' }}{{ inputs.name | pascal }}/index.test.tsx`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default { component: {{ inputs.name | pascal }} };
export const Overview = { args: {} };
```

# `{{ inputs.name | pascal }}/index.module.css`

```css
.wrapper {
}
```
