// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadioGroup, RadioGroupItem } from ".";

describe("RadioGroup", () => {
  it("renders with role radiogroup", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toBeTruthy();
  });

  it("renders radio items", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    );
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("reflects selected value via data-state", () => {
    render(
      <RadioGroup value="a">
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    );
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("data-state", "checked");
    expect(radios[1]).toHaveAttribute("data-state", "unchecked");
  });

  it("calls onValueChange when an item is clicked", () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup value="a" onValueChange={onValueChange}>
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    );
    fireEvent.click(screen.getAllByRole("radio")[1]);
    expect(onValueChange).toHaveBeenCalledWith("b");
  });

  it("disables all items when root is disabled", () => {
    render(
      <RadioGroup disabled>
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    );
    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  it("applies custom className to root", () => {
    render(
      <RadioGroup className="custom-class">
        <RadioGroupItem value="a" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("custom-class");
  });

  it("applies custom className to item", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" className="item-class" />
      </RadioGroup>
    );
    expect(screen.getByRole("radio")).toHaveClass("item-class");
  });
});
