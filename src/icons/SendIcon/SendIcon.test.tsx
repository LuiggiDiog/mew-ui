import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SendIcon } from ".";

describe("SendIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<SendIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<SendIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<SendIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
