// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ConfirmAction } from ".";

describe("ConfirmAction", () => {
  it("opens confirmation dialog", () => {
    render(<ConfirmAction label="Delete" title="Delete project?" onConfirm={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(screen.getByText("Delete project?")).toBeTruthy();
  });

  it("calls onConfirm", () => {
    const onConfirm = vi.fn();
    render(<ConfirmAction label="Open delete" title="Delete project?" confirmLabel="Delete" onConfirm={onConfirm} />);
    fireEvent.click(screen.getByRole("button", { name: "Open delete" }));
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(onConfirm).toHaveBeenCalledOnce();
  });
});
