// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AppShell } from ".";

describe("AppShell", () => {
  it("renders header sidebar and content", () => {
    render(<AppShell header={<div>Header</div>} sidebar={<nav>Nav</nav>}><div>Content</div></AppShell>);
    expect(screen.getByText("Header")).toBeTruthy();
    expect(screen.getByText("Nav")).toBeTruthy();
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<AppShell className="custom"><div>Content</div></AppShell>);
    expect(container.firstChild).toHaveClass("custom");
  });
});
