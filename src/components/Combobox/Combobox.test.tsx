// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Combobox } from ".";

const options = [{ label: "Alpha", value: "a" }, { label: "Beta", value: "b" }];

describe("Combobox", () => {
  it("renders an accessible combobox", () => {
    render(<Combobox label="Model" options={options} />);
    expect(screen.getByRole("combobox", { name: "Model" })).toBeTruthy();
  });

  it("selects an option", () => {
    const onValueChange = vi.fn();
    render(<Combobox options={options} onValueChange={onValueChange} />);
    fireEvent.focus(screen.getByRole("combobox"));
    fireEvent.click(screen.getByRole("option", { name: "Beta" }));
    expect(onValueChange).toHaveBeenCalledWith("b");
  });

  it("shows empty message", () => {
    render(<Combobox options={options} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "zzz" } });
    expect(screen.getByText("No options found.")).toBeTruthy();
  });
});
