// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContextMenu } from ".";

describe("ContextMenu", () => {
  it("renders children as trigger", () => {
    render(
      <ContextMenu items={[]}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    expect(screen.getByTestId("trigger")).toBeTruthy();
  });

  it("opens context menu on right-click", async () => {
    render(
      <ContextMenu items={[{ label: "Delete", onSelect: () => {} }]}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    await userEvent.pointer({ keys: "[MouseRight>]", target: screen.getByTestId("trigger") });
    expect(screen.getByRole("menuitem", { name: "Delete" })).toBeTruthy();
  });

  it("calls onSelect when item is clicked", async () => {
    const onSelect = vi.fn();
    render(
      <ContextMenu items={[{ label: "Delete", onSelect }]}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    await userEvent.pointer({ keys: "[MouseRight>]", target: screen.getByTestId("trigger") });
    await userEvent.click(screen.getByRole("menuitem", { name: "Delete" }));
    expect(onSelect).toHaveBeenCalledOnce();
  });

  it("renders separator for null items", async () => {
    render(
      <ContextMenu items={[{ label: "Edit", onSelect: () => {} }, null, { label: "Delete", onSelect: () => {} }]}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    await userEvent.pointer({ keys: "[MouseRight>]", target: screen.getByTestId("trigger") });
    expect(screen.getAllByRole("separator")).toHaveLength(1);
  });

  it("applies destructive variant styling", async () => {
    render(
      <ContextMenu items={[{ label: "Delete", onSelect: () => {}, variant: "destructive" }]}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    await userEvent.pointer({ keys: "[MouseRight>]", target: screen.getByTestId("trigger") });
    expect(screen.getByRole("menuitem", { name: "Delete" })).toHaveClass("text-error");
  });

  it("disables item when disabled is true", async () => {
    render(
      <ContextMenu items={[{ label: "Delete", onSelect: () => {}, disabled: true }]}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    await userEvent.pointer({ keys: "[MouseRight>]", target: screen.getByTestId("trigger") });
    expect(screen.getByRole("menuitem", { name: "Delete" })).toHaveAttribute("aria-disabled", "true");
  });
});
