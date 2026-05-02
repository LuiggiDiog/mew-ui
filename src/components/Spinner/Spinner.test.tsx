// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Spinner } from ".";

describe("Spinner", () => {
  it("renders an SVG element", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("has role=status", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toHaveAttribute("role", "status");
  });

  it("applies md size class by default", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toHaveClass("w-6");
  });

  it("applies sm size class", () => {
    const { container } = render(<Spinner size="sm" />);
    expect(container.querySelector("svg")).toHaveClass("w-4");
  });

  it("applies lg size class", () => {
    const { container } = render(<Spinner size="lg" />);
    expect(container.querySelector("svg")).toHaveClass("w-8");
  });

  it("applies custom className", () => {
    const { container } = render(<Spinner className="custom" />);
    expect(container.querySelector("svg")).toHaveClass("custom");
  });
});
