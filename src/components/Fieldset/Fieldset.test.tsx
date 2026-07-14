// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Fieldset } from ".";

describe("Fieldset", () => {
  it("renders legend and children", () => {
    render(<Fieldset legend="Profile"><input aria-label="Name" /></Fieldset>);
    expect(screen.getByText("Profile")).toBeTruthy();
    expect(screen.getByRole("textbox", { name: "Name" })).toBeTruthy();
  });

  it("renders error as alert", () => {
    render(<Fieldset error="Required"><input /></Fieldset>);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("applies custom className", () => {
    const { container } = render(<Fieldset className="custom"><input /></Fieldset>);
    expect(container.firstChild).toHaveClass("custom");
  });
});
