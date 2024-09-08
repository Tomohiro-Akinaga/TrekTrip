import React from "react";
import TypeText from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(TypeText, () => {
  test("initial render", () => {
    const children = "TypeText";

    render(<TypeText>{children}</TypeText>);

    expect(screen.getByText("TypeText")).toBeInTheDocument();
  });
});