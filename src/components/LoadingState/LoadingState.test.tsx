// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoadingState } from ".";

describe("LoadingState", () => {
  it("renders loading state", () => {
    render(<LoadingState description="Fetching data" />);
    expect(screen.getByRole("status", { name: "Loading" })).toBeTruthy();
    expect(screen.getByText("Fetching data")).toBeTruthy();
  });
});
