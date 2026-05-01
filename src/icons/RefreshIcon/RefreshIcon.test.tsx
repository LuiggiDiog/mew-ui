import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { RefreshIcon } from ".";

describe("RefreshIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<RefreshIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<RefreshIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<RefreshIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
