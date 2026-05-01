import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { StopIcon } from ".";

describe("StopIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<StopIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<StopIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<StopIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
