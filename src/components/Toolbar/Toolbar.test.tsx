// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Toolbar } from ".";

describe("Toolbar", () => {
  it("renders regions", () => {
    render(<Toolbar leading="Rows" search={<input aria-label="Search" />} actions={<button>Create</button>} />);
    expect(screen.getByText("Rows")).toBeTruthy();
    expect(screen.getByRole("textbox", { name: "Search" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Create" })).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Toolbar className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
