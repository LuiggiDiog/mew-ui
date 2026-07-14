// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorState } from ".";

describe("ErrorState", () => {
  it("renders default title", () => {
    render(<ErrorState />);
    expect(screen.getByText("Something went wrong")).toBeTruthy();
  });

  it("renders action", () => {
    render(<ErrorState action={<button>Retry</button>} />);
    expect(screen.getByRole("button", { name: "Retry" })).toBeTruthy();
  });
});
