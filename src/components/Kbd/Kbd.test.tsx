// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Kbd } from ".";

describe("Kbd", () => {
  it("renders children", () => {
    render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeTruthy();
  });

  it("renders as a kbd element", () => {
    const { container } = render(<Kbd>Enter</Kbd>);
    expect(container.querySelector("kbd")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Kbd className="custom">K</Kbd>);
    expect(container.querySelector("kbd")).toHaveClass("custom");
  });
});
