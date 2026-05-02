// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormField } from ".";

describe("FormField", () => {
  it("renders children", () => {
    render(<FormField><input data-testid="ctrl" /></FormField>);
    expect(screen.getByTestId("ctrl")).toBeTruthy();
  });

  it("renders label when provided", () => {
    render(<FormField label="Email" htmlFor="email"><input id="email" /></FormField>);
    expect(screen.getByText("Email")).toBeTruthy();
  });

  it("renders hint text", () => {
    render(<FormField hint="Enter your email"><input /></FormField>);
    expect(screen.getByText("Enter your email")).toBeTruthy();
  });

  it("renders error over hint when both provided", () => {
    render(<FormField hint="hint" error="Required"><input /></FormField>);
    expect(screen.getByText("Required")).toBeTruthy();
    expect(screen.queryByText("hint")).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(<FormField className="custom"><input /></FormField>);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("renders required asterisk in label when required=true", () => {
    render(<FormField label="Name" required><input /></FormField>);
    expect(screen.getByText("*")).toBeTruthy();
  });
});
