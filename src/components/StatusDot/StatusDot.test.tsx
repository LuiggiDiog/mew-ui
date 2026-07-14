// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatusDot } from ".";

describe("StatusDot", () => {
  it("renders label", () => {
    render(<StatusDot status="success" label="Online" />);
    expect(screen.getByText("Online")).toBeTruthy();
  });

  it("keeps hidden label accessible", () => {
    render(<StatusDot label="Offline" showLabel={false} />);
    expect(screen.getByText("Offline")).toHaveClass("sr-only");
  });
});
