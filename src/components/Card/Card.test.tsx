// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardValue } from ".";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>content</Card>);
    expect(screen.getByText("content")).toBeTruthy();
  });

  it("renders as a div", () => {
    const { container } = render(<Card>x</Card>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("applies base surface class", () => {
    const { container } = render(<Card>x</Card>);
    expect(container.firstChild).toHaveClass("bg-surface");
  });

  it("merges custom className", () => {
    const { container } = render(<Card className="custom-cls">x</Card>);
    expect(container.firstChild).toHaveClass("custom-cls");
    expect(container.firstChild).toHaveClass("bg-surface");
  });

  it("forwards native div props", () => {
    render(<Card data-testid="card-root">x</Card>);
    expect(screen.getByTestId("card-root")).toBeTruthy();
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>header</CardHeader>);
    expect(screen.getByText("header")).toBeTruthy();
  });

  it("renders as a div", () => {
    const { container } = render(<CardHeader>x</CardHeader>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("applies flex layout class", () => {
    const { container } = render(<CardHeader>x</CardHeader>);
    expect(container.firstChild).toHaveClass("flex");
  });

  it("merges custom className", () => {
    const { container } = render(<CardHeader className="extra">x</CardHeader>);
    expect(container.firstChild).toHaveClass("extra");
  });
});

describe("CardTitle", () => {
  it("renders children", () => {
    render(<CardTitle>My Title</CardTitle>);
    expect(screen.getByText("My Title")).toBeTruthy();
  });

  it("renders as h3", () => {
    const { container } = render(<CardTitle>x</CardTitle>);
    expect(container.firstChild?.nodeName).toBe("H3");
  });

  it("applies muted text class", () => {
    const { container } = render(<CardTitle>x</CardTitle>);
    expect(container.firstChild).toHaveClass("text-text-secondary");
  });

  it("merges custom className", () => {
    const { container } = render(<CardTitle className="custom">x</CardTitle>);
    expect(container.firstChild).toHaveClass("custom");
  });
});

describe("CardValue", () => {
  it("renders children", () => {
    render(<CardValue>42</CardValue>);
    expect(screen.getByText("42")).toBeTruthy();
  });

  it("renders as p", () => {
    const { container } = render(<CardValue>x</CardValue>);
    expect(container.firstChild?.nodeName).toBe("P");
  });

  it("applies tabular-nums class", () => {
    const { container } = render(<CardValue>x</CardValue>);
    expect(container.firstChild).toHaveClass("tabular-nums");
  });

  it("merges custom className", () => {
    const { container } = render(<CardValue className="custom">x</CardValue>);
    expect(container.firstChild).toHaveClass("custom");
  });
});
