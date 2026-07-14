// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timeline } from ".";

describe("Timeline", () => {
  it("renders timeline items", () => {
    render(<Timeline items={[{ title: "Created", description: "Project created", time: "Today" }]} />);
    expect(screen.getByText("Created")).toBeTruthy();
    expect(screen.getByText("Project created")).toBeTruthy();
    expect(screen.getByText("Today")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Timeline className="custom" items={[]} />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
