// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { PasswordInput } from ".";

describe("PasswordInput", () => {
  it("renders password field", () => {
    render(<PasswordInput label="Password" />);
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password");
  });

  it("toggles visibility", () => {
    render(<PasswordInput label="Password" />);
    fireEvent.click(screen.getByRole("button", { name: "Show password" }));
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");
  });

  it("renders error state", () => {
    render(<PasswordInput label="Password" error="Required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });
});
