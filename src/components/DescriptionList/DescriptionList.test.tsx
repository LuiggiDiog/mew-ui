// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DescriptionList } from ".";

describe("DescriptionList", () => {
  it("renders terms and descriptions", () => {
    render(<DescriptionList items={[{ term: "Plan", description: "Pro" }]} />);
    expect(screen.getByText("Plan")).toBeTruthy();
    expect(screen.getByText("Pro")).toBeTruthy();
  });

  it("supports horizontal direction", () => {
    const { container } = render(<DescriptionList direction="horizontal" items={[]} />);
    expect(container.firstChild).toHaveClass("sm:grid-cols-[160px_minmax(0,1fr)]");
  });
});
