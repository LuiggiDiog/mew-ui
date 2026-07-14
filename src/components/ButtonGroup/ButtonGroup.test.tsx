// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonGroup } from ".";

describe("ButtonGroup", () => {
  it("renders a grouped control", () => {
    render(<ButtonGroup><button>One</button><button>Two</button></ButtonGroup>);
    expect(screen.getByRole("group")).toBeTruthy();
  });

  it("supports vertical orientation", () => {
    render(<ButtonGroup orientation="vertical"><button>One</button></ButtonGroup>);
    expect(screen.getByRole("group")).toHaveClass("flex-col");
  });

  it("applies custom className", () => {
    render(<ButtonGroup className="custom"><button>One</button></ButtonGroup>);
    expect(screen.getByRole("group")).toHaveClass("custom");
  });
});
