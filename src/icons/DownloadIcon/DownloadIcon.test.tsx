import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DownloadIcon } from ".";

describe("DownloadIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<DownloadIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("has aria-hidden attribute", () => {
    const { container } = render(<DownloadIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    const { container } = render(<DownloadIcon className="custom-class" />);
    expect(container.querySelector("svg")).toHaveClass("custom-class");
  });
});
