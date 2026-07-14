// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { NumberInput } from ".";

describe("NumberInput", () => {
  it("renders a spinbutton", () => {
    render(<NumberInput label="Amount" />);
    expect(screen.getByRole("spinbutton", { name: "Amount" })).toBeTruthy();
  });

  it("renders error state", () => {
    render(<NumberInput label="Amount" error="Invalid" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid");
    expect(screen.getByRole("spinbutton")).toHaveAttribute("aria-invalid", "true");
  });

  it("applies custom className", () => {
    render(<NumberInput aria-label="Amount" className="custom" />);
    expect(screen.getByRole("spinbutton")).toHaveClass("custom");
  });
});
