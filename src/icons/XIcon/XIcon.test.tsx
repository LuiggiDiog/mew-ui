import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { XIcon } from ".";

describe("XIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<XIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<XIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<XIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
