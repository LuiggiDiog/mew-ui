// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from ".";

describe("Popover", () => {
  it("renders trigger button", () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>Open popover</button>
        </PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>
    );
    expect(screen.getByRole("button", { name: "Open popover" })).toBeTruthy();
  });

  it("shows content after trigger click", async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>Toggle</button>
        </PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>
    );
    await userEvent.click(screen.getByRole("button", { name: "Toggle" }));
    expect(screen.getByText("Popover body")).toBeTruthy();
  });

  it("renders content when defaultOpen", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Always visible</PopoverContent>
      </Popover>
    );
    expect(screen.getByText("Always visible")).toBeTruthy();
  });

  it("renders PopoverClose inside content", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverClose asChild>
            <button>Close</button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    );
    expect(screen.getByRole("button", { name: "Close" })).toBeTruthy();
  });

  it("applies custom className to PopoverContent", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-popover">Content</PopoverContent>
      </Popover>
    );
    const content = screen.getByText("Content");
    expect(content).toHaveClass("custom-popover");
  });
});
