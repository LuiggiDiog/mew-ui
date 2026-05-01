import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { PlusIcon } from ".";

describe("PlusIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<PlusIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<PlusIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<PlusIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
