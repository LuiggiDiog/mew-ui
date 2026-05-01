import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SettingsIcon } from ".";

describe("SettingsIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<SettingsIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<SettingsIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<SettingsIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
