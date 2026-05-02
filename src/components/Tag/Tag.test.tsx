// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tag } from ".";

describe("Tag", () => {
  it("renders children", () => {
    render(<Tag>Label</Tag>);
    expect(screen.getByText("Label")).toBeTruthy();
  });

  it("applies default variant classes", () => {
    const { container } = render(<Tag>Label</Tag>);
    expect(container.firstChild).toHaveClass("bg-surface-elevated");
  });

  it("applies accent variant classes", () => {
    const { container } = render(<Tag variant="accent">Label</Tag>);
    expect(container.firstChild).toHaveClass("bg-accent-subtle");
  });

  it("does not show remove button when onRemove is not provided", () => {
    render(<Tag>Label</Tag>);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("shows remove button when onRemove is provided", () => {
    render(<Tag onRemove={() => {}}>Label</Tag>);
    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("calls onRemove when remove button is clicked", () => {
    const onRemove = vi.fn();
    render(<Tag onRemove={onRemove}>Label</Tag>);
    fireEvent.click(screen.getByRole("button"));
    expect(onRemove).toHaveBeenCalledOnce();
  });

  it("applies custom className", () => {
    const { container } = render(<Tag className="custom">Label</Tag>);
    expect(container.firstChild).toHaveClass("custom");
  });
});
