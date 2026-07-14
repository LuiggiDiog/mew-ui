// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MewEmptyState } from ".";

describe("MewEmptyState", () => {
  it("renders empty state content", () => {
    render(<MewEmptyState title="No cats" description="Try again" />);
    expect(screen.getByText("No cats")).toBeTruthy();
    expect(screen.getByText("Try again")).toBeTruthy();
  });
});
