// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Separator } from ".";

describe("Separator", () => {
  it("renders a separator element", () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toBeTruthy();
  });

  it("applies horizontal classes by default", () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toHaveClass("h-px");
    expect(container.firstChild).toHaveClass("w-full");
  });

  it("applies vertical classes when orientation is vertical", () => {
    const { container } = render(<Separator orientation="vertical" />);
    expect(container.firstChild).toHaveClass("w-px");
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
