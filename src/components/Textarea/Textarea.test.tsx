// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Textarea } from ".";

describe("Textarea", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders label, description and error", () => {
    render(
      <Textarea
        label="Message"
        description="Write your request"
        error="Message is required"
      />
    );

    const textarea = screen.getByLabelText("Message");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Write your request")).toBeTruthy();
    expect(screen.getByRole("alert")).toHaveTextContent("Message is required");
  });

  it("auto-resizes and clamps by maxRows", () => {
    render(<Textarea value="Hello" onChange={() => {}} minRows={1} maxRows={2} />);

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    vi.spyOn(window, "getComputedStyle").mockReturnValue({
      lineHeight: "20px",
    } as CSSStyleDeclaration);

    Object.defineProperty(textarea, "scrollHeight", {
      configurable: true,
      value: 160,
    });

    fireEvent.change(textarea, { target: { value: "Hello world" } });

    expect(textarea.style.height).toBe("40px");
    expect(textarea.style.overflowY).toBe("auto");
  });

  it("does not auto-resize when autoResize is false", () => {
    render(<Textarea autoResize={false} onChange={() => {}} />);

    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "No resize" } });

    expect(textarea.style.height).toBe("");
  });

  it("applies custom className", () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });
});
