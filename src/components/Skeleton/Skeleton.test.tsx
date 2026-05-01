// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from ".";

describe("Skeleton", () => {
  it("renders with pulse variant by default", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("animate-pulse");
  });

  it("renders shimmer variant when requested", () => {
    const { container } = render(<Skeleton variant="shimmer" />);
    expect(container.firstChild).toHaveClass("animate-shimmer");
  });

  it("applies numeric width and height as px", () => {
    const { container } = render(<Skeleton width={48} height={16} />);
    expect(container.firstChild).toHaveStyle({ width: "48px", height: "16px" });
  });

  it("applies string width and rounded style", () => {
    const { container } = render(<Skeleton width="100%" rounded="full" />);
    expect(container.firstChild).toHaveStyle({ width: "100%" });
    expect(container.firstChild).toHaveClass("rounded-full");
  });
});
