// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SidebarNav } from ".";

describe("SidebarNav", () => {
  it("renders links", () => {
    render(<SidebarNav items={[{ label: "Home", href: "/" }]} />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  });

  it("marks active item", () => {
    render(<SidebarNav items={[{ label: "Home", href: "/", active: true }]} />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
  });

  it("supports button items", () => {
    const onClick = vi.fn();
    render(<SidebarNav items={[{ label: "Refresh", onClick }]} />);
    fireEvent.click(screen.getByRole("button", { name: "Refresh" }));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
