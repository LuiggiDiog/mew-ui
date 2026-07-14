// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TableToolbar } from ".";

describe("TableToolbar", () => {
  it("renders title, search, and actions", () => {
    render(<TableToolbar title="Users" search={<input aria-label="Search users" />} actions={<button>Add</button>} />);
    expect(screen.getByText("Users")).toBeTruthy();
    expect(screen.getByRole("textbox", { name: "Search users" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Add" })).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<TableToolbar className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
