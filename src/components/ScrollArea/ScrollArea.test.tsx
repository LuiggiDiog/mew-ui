// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScrollArea } from ".";

describe("ScrollArea", () => {
  it("renders children", () => {
    render(
      <ScrollArea>
        <p>Scrollable content</p>
      </ScrollArea>
    );
    expect(screen.getByText("Scrollable content")).toBeTruthy();
  });

  it("renders viewport element", () => {
    const { container } = render(
      <ScrollArea>
        <p>Content</p>
      </ScrollArea>
    );
    const viewport = container.querySelector("[data-radix-scroll-area-viewport]");
    expect(viewport).toBeTruthy();
  });

  it("children are visible inside viewport", () => {
    render(
      <ScrollArea>
        <span data-testid="inner">Inner item</span>
      </ScrollArea>
    );
    expect(screen.getByTestId("inner")).toBeTruthy();
  });

  it("applies custom className to root", () => {
    const { container } = render(
      <ScrollArea className="custom-scroll">
        <p>Content</p>
      </ScrollArea>
    );
    expect(container.firstChild).toHaveClass("custom-scroll");
  });

  it("root has overflow-hidden class", () => {
    const { container } = render(
      <ScrollArea>
        <p>Content</p>
      </ScrollArea>
    );
    expect(container.firstChild).toHaveClass("overflow-hidden");
  });

  it("renders multiple children", () => {
    render(
      <ScrollArea>
        <p>Item A</p>
        <p>Item B</p>
        <p>Item C</p>
      </ScrollArea>
    );
    expect(screen.getByText("Item A")).toBeTruthy();
    expect(screen.getByText("Item B")).toBeTruthy();
    expect(screen.getByText("Item C")).toBeTruthy();
  });
});
