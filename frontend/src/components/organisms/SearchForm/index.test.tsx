import React from "react";
import SearchForm from "./index";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe(SearchForm, () => {
  test("initial render", () => {
    const children = "SearchForm";

    render(<SearchForm>{children}</SearchForm>);

    expect(screen.getByText("SearchForm")).toBeInTheDocument();
  });
});