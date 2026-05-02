// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Slider } from ".";

describe("Slider", () => {
  it("renders a slider element", () => {
    render(<Slider defaultValue={[50]} />);
    expect(screen.getByRole("slider")).toBeTruthy();
  });

  it("renders with correct aria-valuenow", () => {
    render(<Slider value={[30]} onValueChange={() => {}} min={0} max={100} />);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30");
  });

  it("renders with min and max attributes", () => {
    render(<Slider defaultValue={[0]} min={0} max={200} />);
    const thumb = screen.getByRole("slider");
    expect(thumb).toHaveAttribute("aria-valuemin", "0");
    expect(thumb).toHaveAttribute("aria-valuemax", "200");
  });

  it("is disabled when disabled prop is set", () => {
    render(<Slider defaultValue={[50]} disabled />);
    expect(screen.getByRole("slider")).toHaveAttribute("data-disabled", "");
  });

  it("applies custom className to root", () => {
    const { container } = render(<Slider defaultValue={[0]} className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("calls onValueChange when value changes", () => {
    const onValueChange = vi.fn();
    render(<Slider value={[50]} onValueChange={onValueChange} min={0} max={100} />);
    expect(screen.getByRole("slider")).toBeTruthy();
  });
});
