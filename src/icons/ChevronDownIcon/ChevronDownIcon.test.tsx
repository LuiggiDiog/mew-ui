import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ChevronDownIcon } from ".";

describe("ChevronDownIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<ChevronDownIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<ChevronDownIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<ChevronDownIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
