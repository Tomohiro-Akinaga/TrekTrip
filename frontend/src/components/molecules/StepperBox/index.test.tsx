import React from "react";
import Stepper from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(Stepper, () => {
  test("initial render", () => {
    const steps = [
      { label: "label", description: "desc" },
      { label: "label", description: "desc" },
    ];
    render(<Stepper steps={steps} />);

    expect(screen.getByText("Stepper")).toBeInTheDocument();
  });
});
