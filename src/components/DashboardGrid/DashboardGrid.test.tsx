// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { DashboardGrid } from ".";

describe("DashboardGrid", () => {
  it("renders children", () => {
    const { getByText } = render(<DashboardGrid><div>Card</div></DashboardGrid>);
    expect(getByText("Card")).toBeTruthy();
  });

  it("applies column style", () => {
    const { container } = render(<DashboardGrid columns={4} />);
    expect(container.firstChild).toHaveClass("xl:grid-cols-4");
  });
});
