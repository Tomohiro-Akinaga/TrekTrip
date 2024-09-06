import { describe, expect, test } from "vitest";
import { Button } from "./index";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("initial render", () => {
    render(<Button />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
