// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stepper } from ".";

describe("Stepper", () => {
  it("renders steps", () => {
    render(<Stepper currentStep={1} steps={[{ label: "Account" }, { label: "Profile" }]} />);
    expect(screen.getByText("Account")).toBeTruthy();
    expect(screen.getByText("Profile")).toBeTruthy();
  });

  it("renders descriptions", () => {
    render(<Stepper steps={[{ label: "Account", description: "Create credentials" }]} />);
    expect(screen.getByText("Create credentials")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Stepper className="custom" steps={[{ label: "Account" }]} />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
