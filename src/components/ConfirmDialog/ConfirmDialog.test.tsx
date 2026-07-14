// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmDialog } from ".";

describe("ConfirmDialog", () => {
  it("renders nothing when closed", () => {
    render(<ConfirmDialog open={false} onOpenChange={() => {}} title="Delete?" onConfirm={() => {}} />);
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });

  it("renders title and description when open", () => {
    render(
      <ConfirmDialog open onOpenChange={() => {}} title="Delete?" description="This cannot be undone" onConfirm={() => {}} />
    );
    expect(screen.getByRole("alertdialog")).toBeTruthy();
    expect(screen.getByText("Delete?")).toBeTruthy();
    expect(screen.getByText("This cannot be undone")).toBeTruthy();
  });

  it("calls onConfirm when confirm button is clicked", async () => {
    const onConfirm = vi.fn();
    render(
      <ConfirmDialog open onOpenChange={() => {}} title="Delete?" onConfirm={onConfirm} />
    );
    await userEvent.click(screen.getByRole("button", { name: "Confirm" }));
    expect(onConfirm).toHaveBeenCalledOnce();
  });

  it("calls onOpenChange with false when cancel is clicked", async () => {
    const onOpenChange = vi.fn();
    render(
      <ConfirmDialog open onOpenChange={onOpenChange} title="Delete?" onConfirm={() => {}} />
    );
    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("uses custom labels", () => {
    render(
      <ConfirmDialog open onOpenChange={() => {}} title="Delete?" confirmLabel="Yes" cancelLabel="No" onConfirm={() => {}} />
    );
    expect(screen.getByRole("button", { name: "Yes" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "No" })).toBeTruthy();
  });

  it("applies destructive variant styling", () => {
    render(
      <ConfirmDialog open onOpenChange={() => {}} title="Delete?" variant="destructive" onConfirm={() => {}} />
    );
    const confirmBtn = screen.getByRole("button", { name: "Confirm" });
    expect(confirmBtn).toHaveClass("bg-error");
  });
});
