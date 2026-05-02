// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from ".";

describe("Alert", () => {
  it("renders children", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByText("Message")).toBeTruthy();
  });

  it("has role=alert", () => {
    const { container } = render(<Alert>Message</Alert>);
    expect(container.querySelector('[role="alert"]')).toBeTruthy();
  });

  it("renders default variant classes", () => {
    const { container } = render(<Alert>Msg</Alert>);
    expect(container.firstChild).toHaveClass("bg-surface-elevated");
  });

  it("renders error variant classes", () => {
    const { container } = render(<Alert variant="error">Msg</Alert>);
    expect(container.firstChild).toHaveClass("bg-error/10");
  });

  it("renders success variant classes", () => {
    const { container } = render(<Alert variant="success">Msg</Alert>);
    expect(container.firstChild).toHaveClass("bg-success/10");
  });

  it("renders an icon for non-default variants", () => {
    const { container } = render(<Alert variant="info">Msg</Alert>);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("does not render icon for default variant", () => {
    const { container } = render(<Alert variant="default">Msg</Alert>);
    expect(container.querySelector("svg")).toBeNull();
  });

  it("renders custom icon", () => {
    render(<Alert icon={<span data-testid="icon" />}>Msg</Alert>);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Alert className="custom">Msg</Alert>);
    expect(container.firstChild).toHaveClass("custom");
  });
});

describe("AlertTitle", () => {
  it("renders text", () => {
    render(<AlertTitle>Title</AlertTitle>);
    expect(screen.getByText("Title")).toBeTruthy();
  });
});

describe("AlertDescription", () => {
  it("renders text", () => {
    render(<AlertDescription>Desc</AlertDescription>);
    expect(screen.getByText("Desc")).toBeTruthy();
  });
});
