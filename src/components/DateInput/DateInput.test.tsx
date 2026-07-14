// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DateInput } from ".";

describe("DateInput", () => {
  it("renders a date input", () => {
    render(<DateInput label="Due date" />);
    expect(screen.getByLabelText("Due date")).toHaveAttribute("type", "date");
  });

  it("renders description", () => {
    render(<DateInput label="Due date" description="Use local date" />);
    expect(screen.getByText("Use local date")).toBeTruthy();
  });
});
