// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stack } from ".";

describe("Stack", () => {
  it("renders children", () => {
    render(<Stack><span>A</span><span>B</span></Stack>);
    expect(screen.getByText("A")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
  });

  it("renders as a flex column by default", () => {
    const { container } = render(<Stack><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("flex-col");
  });

  it("renders as flex row when direction=row", () => {
    const { container } = render(<Stack direction="row"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("applies gap class", () => {
    const { container } = render(<Stack gap="lg"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("gap-4");
  });

  it("applies custom className", () => {
    const { container } = render(<Stack className="custom"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("custom");
  });
});
