// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Toggle } from ".";

describe("Toggle", () => {
  it("renders with role switch", () => {
    render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole("switch")).toBeTruthy();
  });

  it("reflects checked state in aria-checked", () => {
    render(<Toggle checked onChange={() => {}} />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("reflects unchecked state in aria-checked", () => {
    render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
  });

  it("calls onChange when clicked", () => {
    const onChange = vi.fn();
    render(<Toggle checked={false} onChange={onChange} />);
    fireEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("is disabled when disabled prop is set", () => {
    render(<Toggle checked={false} onChange={() => {}} disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("sets aria-label from label prop", () => {
    render(<Toggle checked={false} onChange={() => {}} label="Dark mode" />);
    expect(screen.getByLabelText("Dark mode")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Toggle checked onChange={() => {}} className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
