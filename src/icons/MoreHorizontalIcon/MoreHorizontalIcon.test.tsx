// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MoreHorizontalIcon } from ".";

describe("MoreHorizontalIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<MoreHorizontalIcon />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<MoreHorizontalIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<MoreHorizontalIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
