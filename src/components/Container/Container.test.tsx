// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from ".";

describe("Container", () => {
  it("renders children", () => {
    render(<Container><p>Content</p></Container>);
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("applies max-w-screen-lg by default", () => {
    const { container } = render(<Container><p>Content</p></Container>);
    expect(container.firstChild).toHaveClass("max-w-screen-lg");
  });

  it("applies correct max-width for sm size", () => {
    const { container } = render(<Container size="sm"><p>Content</p></Container>);
    expect(container.firstChild).toHaveClass("max-w-screen-sm");
  });

  it("applies custom className", () => {
    const { container } = render(<Container className="custom"><p>Content</p></Container>);
    expect(container.firstChild).toHaveClass("custom");
  });
});
