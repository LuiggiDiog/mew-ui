import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AttachIcon } from ".";

describe("AttachIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<AttachIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<AttachIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<AttachIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
