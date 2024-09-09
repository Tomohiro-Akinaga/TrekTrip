import React from "react";
import Icon from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(Icon, () => {
  test("initial render", () => {
    const children = "Icon";

    render(<Icon>{children}</Icon>);

    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});