import React from "react";
import SelectDateTime from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(SelectDateTime, () => {
  test("initial render", () => {
    const children = "SelectDateTime";

    render(<SelectDateTime>{children}</SelectDateTime>);

    expect(screen.getByText("SelectDateTime")).toBeInTheDocument();
  });
});