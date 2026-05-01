import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ImageIcon } from ".";

describe("ImageIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<ImageIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<ImageIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<ImageIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
