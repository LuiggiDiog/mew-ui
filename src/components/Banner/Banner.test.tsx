// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Banner } from ".";

describe("Banner", () => {
  it("renders content and action", () => {
    render(<Banner title="Update" description="New version" action={<button>Install</button>} />);
    expect(screen.getByText("Update")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Install" })).toBeTruthy();
  });

  it("applies error variant", () => {
    const { container } = render(<Banner variant="error" />);
    expect(container.firstChild).toHaveClass("border-error/40");
  });
});
