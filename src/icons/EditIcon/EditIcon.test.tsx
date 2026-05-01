import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { EditIcon } from ".";

describe("EditIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<EditIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<EditIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<EditIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
