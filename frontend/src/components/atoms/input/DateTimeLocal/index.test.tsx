import React from "react";
import DateTimeLocal from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(DateTimeLocal, () => {
  test("initial render", () => {
    const children = "DateTimeLocal";

    render(<DateTimeLocal>{children}</DateTimeLocal>);

    expect(screen.getByText("DateTimeLocal")).toBeInTheDocument();
  });
});