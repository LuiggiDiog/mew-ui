// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CodeBlock } from ".";

Object.assign(navigator, {
  clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
});

describe("CodeBlock", () => {
  it("renders the code content", () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText("const x = 1;")).toBeTruthy();
  });

  it("renders language label when provided", () => {
    render(<CodeBlock code="x = 1" language="python" />);
    expect(screen.getByText("python")).toBeTruthy();
  });

  it("does not render language label when not provided", () => {
    render(<CodeBlock code="x = 1" />);
    expect(screen.queryByText("python")).toBeNull();
  });

  it("renders copy button by default", () => {
    render(<CodeBlock code="x = 1" />);
    expect(screen.getByRole("button", { name: "Copy code" })).toBeTruthy();
  });

  it("does not render copy button when showCopy=false", () => {
    render(<CodeBlock code="x = 1" showCopy={false} />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("calls clipboard.writeText on copy click", () => {
    render(<CodeBlock code="hello" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("hello");
  });

  it("applies custom className", () => {
    const { container } = render(<CodeBlock code="x" className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
