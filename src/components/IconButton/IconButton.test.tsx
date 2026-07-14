// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from ".";

describe("IconButton", () => {
  it("renders an accessible icon button", () => {
    render(<IconButton label="Open menu">M</IconButton>);
    expect(screen.getByRole("button", { name: "Open menu" })).toBeTruthy();
  });

  it("calls onClick", () => {
    const onClick = vi.fn();
    render(<IconButton label="Copy" onClick={onClick}>C</IconButton>);
    fireEvent.click(screen.getByRole("button", { name: "Copy" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies custom className", () => {
    render(<IconButton label="Custom" className="custom">C</IconButton>);
    expect(screen.getByRole("button", { name: "Custom" })).toHaveClass("custom");
  });
});
