// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Label", () => {
  it("renders children", () => {
    render(<Label>Name</Label>);
    expect(screen.getByText("Name")).toBeTruthy();
  });

  it("renders as a label element", () => {
    const { container } = render(<Label>Name</Label>);
    expect(container.querySelector("label")).toBeTruthy();
  });

  it("associates with an input via htmlFor", () => {
    render(<Label htmlFor="my-input">Name</Label>);
    expect(screen.getByText("Name").closest("label")).toHaveAttribute("for", "my-input");
  });

  it("renders required asterisk when required=true", () => {
    render(<Label required>Name</Label>);
    expect(screen.getByText("*")).toBeTruthy();
  });

  it("does not render asterisk when required is not set", () => {
    render(<Label>Name</Label>);
    expect(screen.queryByText("*")).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(<Label className="custom">Name</Label>);
    expect(container.querySelector("label")).toHaveClass("custom");
  });
});
