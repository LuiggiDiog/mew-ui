// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Callout } from ".";

describe("Callout", () => {
  it("renders title and content", () => {
    render(<Callout title="Note">Helpful detail</Callout>);
    expect(screen.getByText("Note")).toBeTruthy();
    expect(screen.getByText("Helpful detail")).toBeTruthy();
  });

  it("applies success variant", () => {
    const { container } = render(<Callout variant="success">Saved</Callout>);
    expect(container.firstChild).toHaveClass("border-success/40");
  });
});
