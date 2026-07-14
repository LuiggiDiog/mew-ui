// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { FilterBar } from ".";

describe("FilterBar", () => {
  it("updates query", () => {
    const onQueryChange = vi.fn();
    render(<FilterBar query="" onQueryChange={onQueryChange} />);
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "mew" } });
    expect(onQueryChange).toHaveBeenCalledWith("mew");
  });

  it("renders filters and actions", () => {
    render(<FilterBar query="" onQueryChange={() => {}} filters={<button>All</button>} actions={<button>Create</button>} />);
    expect(screen.getByRole("button", { name: "All" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Create" })).toBeTruthy();
  });
});
