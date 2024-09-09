import React from "react";
import Header from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(Header, () => {
  test("initial render", () => {
    const children = "Header";

    render(<Header>{children}</Header>);

    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});