// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from ".";

describe("Sheet", () => {
  it("renders trigger button", () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open sheet</button>
        </SheetTrigger>
        <SheetContent>Sheet body</SheetContent>
      </Sheet>
    );
    expect(screen.getByRole("button", { name: "Open sheet" })).toBeTruthy();
  });

  it("shows content after trigger click", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent>
          <p>Sheet content here</p>
        </SheetContent>
      </Sheet>
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Sheet content here")).toBeTruthy();
  });

  it("renders title and description", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Manage your preferences</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Settings")).toBeTruthy();
    expect(screen.getByText("Manage your preferences")).toBeTruthy();
  });

  it("closes when SheetClose is clicked", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent>
          <SheetClose asChild>
            <button>Close sheet</button>
          </SheetClose>
          <p>Content</p>
        </SheetContent>
      </Sheet>
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Content")).toBeTruthy();
    await userEvent.click(screen.getByRole("button", { name: "Close sheet" }));
    expect(screen.queryByText("Content")).toBeNull();
  });

  it("applies side=left styles to content", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent side="left" data-testid="sheet-content">
          Left sheet
        </SheetContent>
      </Sheet>
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog.className).toContain("left-0");
  });

  it("applies side=bottom styles to content", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open</button>
        </SheetTrigger>
        <SheetContent side="bottom">Bottom sheet</SheetContent>
      </Sheet>
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog.className).toContain("bottom-0");
  });

  it("calls onOpenChange when Escape is pressed", async () => {
    const onOpenChange = vi.fn();
    render(
      <Sheet open onOpenChange={onOpenChange}>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );
    await userEvent.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
