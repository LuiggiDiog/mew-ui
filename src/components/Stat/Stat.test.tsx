// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stat, StatLabel, StatValue, StatDelta } from ".";

describe("Stat", () => {
  it("renders children", () => {
    render(
      <Stat>
        <StatLabel>Users</StatLabel>
        <StatValue>1,234</StatValue>
      </Stat>
    );
    expect(screen.getByText("Users")).toBeTruthy();
    expect(screen.getByText("1,234")).toBeTruthy();
  });

  it("applies custom className to Stat", () => {
    const { container } = render(<Stat className="custom"><span /></Stat>);
    expect(container.firstChild).toHaveClass("custom");
  });
});

describe("StatDelta", () => {
  it("shows positive delta with success color", () => {
    const { container } = render(<StatDelta current={150} previous={100} />);
    expect(container.firstChild).toHaveClass("text-success");
    expect(screen.getByText("+50.0%")).toBeTruthy();
  });

  it("shows negative delta with error color", () => {
    const { container } = render(<StatDelta current={80} previous={100} />);
    expect(container.firstChild).toHaveClass("text-error");
  });

  it("shows N/A with secondary color when previous is 0", () => {
    const { container } = render(<StatDelta current={10} previous={0} />);
    expect(container.firstChild).toHaveClass("text-text-secondary");
  });
});
