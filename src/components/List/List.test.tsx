// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { List, ListItem } from ".";

describe("List", () => {
  it("renders structured items", () => {
    render(<List><ListItem title="Project" description="Active" meta="Now" /></List>);
    expect(screen.getByText("Project")).toBeTruthy();
    expect(screen.getByText("Active")).toBeTruthy();
    expect(screen.getByText("Now")).toBeTruthy();
  });

  it("renders actions", () => {
    render(<List><ListItem title="Project" action={<button>Open</button>} /></List>);
    expect(screen.getByRole("button", { name: "Open" })).toBeTruthy();
  });
});
