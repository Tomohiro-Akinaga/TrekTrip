import React from "react";
import TextButton from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(TextButton, () => {
  test("initial render", () => {
    const children = "TextButton";

    render(<TextButton>{children}</TextButton>);

    expect(screen.getByText("TextButton")).toBeInTheDocument();
  });
});