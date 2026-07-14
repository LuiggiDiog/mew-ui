// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TopNav } from ".";

describe("TopNav", () => {
  it("renders brand and items", () => {
    render(<TopNav brand="Mew" items={[{ label: "Docs", href: "/docs" }]} />);
    expect(screen.getByText("Mew")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("href", "/docs");
  });

  it("marks active link", () => {
    render(<TopNav items={[{ label: "Docs", href: "/docs", active: true }]} />);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("aria-current", "page");
  });
});
