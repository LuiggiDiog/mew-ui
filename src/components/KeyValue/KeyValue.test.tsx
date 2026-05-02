// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { KeyValue } from ".";

const items = [
  { label: "Name", value: "Alice" },
  { label: "Role", value: "Admin" },
];

describe("KeyValue", () => {
  it("renders all labels", () => {
    render(<KeyValue items={items} />);
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Role")).toBeTruthy();
  });

  it("renders all values", () => {
    render(<KeyValue items={items} />);
    expect(screen.getByText("Alice")).toBeTruthy();
    expect(screen.getByText("Admin")).toBeTruthy();
  });

  it("renders as a dl element", () => {
    const { container } = render(<KeyValue items={items} />);
    expect(container.querySelector("dl")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<KeyValue items={items} className="custom" />);
    expect(container.querySelector("dl")).toHaveClass("custom");
  });

  it("renders horizontal layout", () => {
    const { container } = render(<KeyValue items={items} direction="horizontal" />);
    expect(container.querySelector("dl")).toHaveClass("flex-wrap");
  });
});
