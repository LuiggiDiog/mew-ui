// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from ".";

describe("Dialog", () => {
  it("renders nothing when closed", () => {
    render(<Dialog open={false} onOpenChange={() => {}} />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders content when open", () => {
    render(
      <Dialog open onOpenChange={() => {}}>
        <p>Dialog body</p>
      </Dialog>
    );
    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(screen.getByText("Dialog body")).toBeTruthy();
  });

  it("renders title and description", () => {
    render(
      <Dialog open onOpenChange={() => {}} title="Confirm" description="Are you sure?">
        <p>Body</p>
      </Dialog>
    );
    expect(screen.getByText("Confirm")).toBeTruthy();
    expect(screen.getByText("Are you sure?")).toBeTruthy();
  });

  it("calls onOpenChange when Escape is pressed", async () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog open onOpenChange={onOpenChange}>
        <p>Body</p>
      </Dialog>
    );
    await userEvent.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("applies fullscreen size class", () => {
    render(
      <Dialog open onOpenChange={() => {}} size="fullscreen">
        <p>Full</p>
      </Dialog>
    );
    expect(screen.getByRole("dialog")).toHaveClass("inset-0");
  });
});
