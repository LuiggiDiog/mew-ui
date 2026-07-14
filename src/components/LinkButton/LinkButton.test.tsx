// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LinkButton } from ".";

describe("LinkButton", () => {
  it("renders a link", () => {
    render(<LinkButton href="/docs">Docs</LinkButton>);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("href", "/docs");
  });

  it("applies primary variant", () => {
    render(<LinkButton href="#" variant="primary">Open</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("bg-accent");
  });

  it("applies custom className", () => {
    render(<LinkButton href="#" className="custom">Open</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("custom");
  });
});
