// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginCard } from ".";

describe("LoginCard", () => {
  it("renders title and fields", () => {
    render(<LoginCard title="Sign in"><input aria-label="Email" /></LoginCard>);
    expect(screen.getByRole("heading", { name: "Sign in" })).toBeTruthy();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeTruthy();
  });

  it("renders footer", () => {
    render(<LoginCard footer="Need access?"><div /></LoginCard>);
    expect(screen.getByText("Need access?")).toBeTruthy();
  });
});
