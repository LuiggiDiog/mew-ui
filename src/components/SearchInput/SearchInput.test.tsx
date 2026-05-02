// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from ".";

describe("SearchInput", () => {
  it("renders an input of type search", () => {
    render(<SearchInput />);
    expect(screen.getByRole("searchbox")).toBeTruthy();
  });

  it("renders search icon", () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("does not show clear button when value is empty", () => {
    render(<SearchInput value="" onClear={() => {}} onChange={() => {}} />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("shows clear button when value is non-empty and onClear provided", () => {
    render(<SearchInput value="hello" onClear={() => {}} onChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Clear search" })).toBeTruthy();
  });

  it("calls onClear when clear button is clicked", () => {
    const onClear = vi.fn();
    render(<SearchInput value="hello" onClear={onClear} onChange={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(onClear).toHaveBeenCalledOnce();
  });

  it("calls onChange on input change", () => {
    const onChange = vi.fn();
    render(<SearchInput onChange={onChange} />);
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "mew" } });
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("applies custom className to wrapper", () => {
    const { container } = render(<SearchInput className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
