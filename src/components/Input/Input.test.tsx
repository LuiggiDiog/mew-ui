// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input", () => {
  it("renders a plain input when no meta props are provided", () => {
    render(<Input placeholder="Email" />);

    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
    expect(screen.queryByText("Email label")).toBeNull();
  });

  it("renders label, description and error", () => {
    render(
      <Input
        label="Email label"
        description="Use your account email"
        error="Invalid email"
      />
    );

    const input = screen.getByLabelText("Email label");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Use your account email")).toBeTruthy();
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid email");
  });

  it("applies sm size class", () => {
    const { container } = render(<Input size="sm" />);
    expect(container.querySelector("input")).toHaveClass("rounded-lg");
  });

  it("calls onChange handler", () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "hello" } });
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("applies custom className", () => {
    const { container } = render(<Input className="custom-class" />);
    expect(container.querySelector("input")).toHaveClass("custom-class");
  });
});
