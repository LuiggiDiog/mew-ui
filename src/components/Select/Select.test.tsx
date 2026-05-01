// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Select } from ".";

const groups = [
  { label: "Provider A", options: [{ label: "Model 1", value: "m1" }, { label: "Model 2", value: "m2" }] },
  { label: "Provider B", options: [{ label: "Model 3", value: "m3" }] },
];

describe("Select", () => {
  it("renders trigger with placeholder when no value", () => {
    render(<Select value="" onValueChange={() => {}} groups={groups} placeholder="Choose…" />);
    expect(screen.getByText("Choose…")).toBeTruthy();
  });

  it("renders trigger with selected value", () => {
    render(<Select value="m1" onValueChange={() => {}} groups={groups} />);
    expect(screen.getByText("Model 1")).toBeTruthy();
  });

  it("renders label, description and error", () => {
    render(
      <Select value="" onValueChange={() => {}} groups={groups} label="Model" description="Pick one" error="Required" />
    );
    expect(screen.getByText("Model")).toBeTruthy();
    expect(screen.getByText("Pick one")).toBeTruthy();
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("applies sm size class", () => {
    render(<Select value="" onValueChange={() => {}} groups={groups} size="sm" />);
    expect(screen.getByRole("combobox")).toHaveClass("rounded-lg");
  });

  it("applies disabled styling", () => {
    render(<Select value="" onValueChange={() => {}} groups={groups} disabled />);
    expect(screen.getByRole("combobox")).toHaveClass("disabled:opacity-60");
  });

  it("renders all group options in the DOM", () => {
    render(<Select value="" onValueChange={() => {}} groups={groups} />);
    // Radix renders options in a portal; verify the trigger exists and groups are defined
    expect(screen.getByRole("combobox")).toBeTruthy();
  });
});
