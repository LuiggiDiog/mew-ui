import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MenuIcon } from ".";

describe("MenuIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<MenuIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<MenuIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<MenuIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
