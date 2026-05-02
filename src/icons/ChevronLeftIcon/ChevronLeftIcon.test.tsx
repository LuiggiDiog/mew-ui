// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ChevronLeftIcon } from ".";

describe("ChevronLeftIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<ChevronLeftIcon />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<ChevronLeftIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<ChevronLeftIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
