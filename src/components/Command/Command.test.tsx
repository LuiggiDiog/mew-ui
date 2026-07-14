// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Command } from ".";

const items = [{ label: "Create project", value: "create" }, { label: "Open settings", value: "settings" }];

describe("Command", () => {
  it("renders commands", () => {
    render(<Command items={items} />);
    expect(screen.getByRole("option", { name: "Create project" })).toBeTruthy();
  });

  it("filters commands", () => {
    render(<Command items={items} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Command search" }), { target: { value: "settings" } });
    expect(screen.queryByText("Create project")).toBeNull();
    expect(screen.getByText("Open settings")).toBeTruthy();
  });

  it("selects a command", () => {
    const onSelect = vi.fn();
    render(<Command items={items} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole("option", { name: "Create project" }));
    expect(onSelect).toHaveBeenCalledWith("create");
  });
});
