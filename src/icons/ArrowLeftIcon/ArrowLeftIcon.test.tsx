import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ArrowLeftIcon } from ".";

describe("ArrowLeftIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<ArrowLeftIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<ArrowLeftIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<ArrowLeftIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
