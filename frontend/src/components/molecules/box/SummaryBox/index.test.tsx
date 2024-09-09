import React from "react";
import SummaryBox from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(SummaryBox, () => {
  test("initial render", () => {
    const children = "SummaryBox";

    render(<SummaryBox>{children}</SummaryBox>);

    expect(screen.getByText("SummaryBox")).toBeInTheDocument();
  });
});