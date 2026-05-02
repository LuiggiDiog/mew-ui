// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Progress } from ".";

describe("Progress", () => {
  it("renders progress bar", () => {
    const { container } = render(<Progress value={50} />);
    const root = container.firstChild as HTMLElement;
    expect(root).toBeTruthy();
  });

  it("renders with role progressbar", () => {
    const { container } = render(<Progress value={50} />);
    const root = container.querySelector("[role='progressbar']");
    expect(root).toBeTruthy();
  });

  it("sets aria-valuenow from value prop", () => {
    const { container } = render(<Progress value={75} />);
    const root = container.querySelector("[role='progressbar']");
    expect(root).toHaveAttribute("aria-valuenow", "75");
  });

  it("applies correct transform for value=50", () => {
    const { container } = render(<Progress value={50} />);
    const indicator = container.querySelector("[role='progressbar'] > *") as HTMLElement;
    expect(indicator.style.transform).toBe("translateX(-50%)");
  });

  it("applies correct transform for value=0", () => {
    const { container } = render(<Progress value={0} />);
    const indicator = container.querySelector("[role='progressbar'] > *") as HTMLElement;
    expect(indicator.style.transform).toBe("translateX(-100%)");
  });

  it("applies correct transform for value=100", () => {
    const { container } = render(<Progress value={100} />);
    const indicator = container.querySelector("[role='progressbar'] > *") as HTMLElement;
    expect(indicator.style.transform).toBe("translateX(-0%)");
  });

  it("applies animate-shimmer class when indeterminate", () => {
    const { container } = render(<Progress />);
    const indicator = container.querySelector("[role='progressbar'] > *") as HTMLElement;
    expect(indicator).toHaveClass("animate-shimmer");
  });

  it("does not apply animate-shimmer when value is defined", () => {
    const { container } = render(<Progress value={50} />);
    const indicator = container.querySelector("[role='progressbar'] > *") as HTMLElement;
    expect(indicator).not.toHaveClass("animate-shimmer");
  });

  it("applies custom className to root", () => {
    const { container } = render(<Progress value={50} className="custom-bar" />);
    expect(container.firstChild).toHaveClass("custom-bar");
  });

  it("root has base classes", () => {
    const { container } = render(<Progress value={50} />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("rounded-full");
    expect(root).toHaveClass("bg-surface-elevated");
  });
});
