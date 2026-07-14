// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHeader } from ".";

describe("PageHeader", () => {
  it("renders title and description", () => {
    render(<PageHeader title="Projects" description="Manage projects" />);
    expect(screen.getByRole("heading", { name: "Projects" })).toBeTruthy();
    expect(screen.getByText("Manage projects")).toBeTruthy();
  });

  it("renders actions", () => {
    render(<PageHeader title="Projects" actions={<button>Create</button>} />);
    expect(screen.getByRole("button", { name: "Create" })).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<PageHeader title="Projects" className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
