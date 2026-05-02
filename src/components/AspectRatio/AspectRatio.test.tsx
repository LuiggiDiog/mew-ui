// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AspectRatio } from ".";

describe("AspectRatio", () => {
  it("renders children inside", () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="test.jpg" alt="Test image" />
      </AspectRatio>
    );
    expect(screen.getByAltText("Test image")).toBeTruthy();
  });

  it("renders text children", () => {
    render(
      <AspectRatio ratio={1}>
        <span>Square content</span>
      </AspectRatio>
    );
    expect(screen.getByText("Square content")).toBeTruthy();
  });

  it("applies overflow-hidden base class", () => {
    const { container } = render(
      <AspectRatio ratio={4 / 3}>
        <p>Content</p>
      </AspectRatio>
    );
    const inner = container.querySelector(".overflow-hidden");
    expect(inner).toBeTruthy();
  });

  it("applies custom className", () => {
    render(
      <AspectRatio ratio={16 / 9} className="custom-aspect">
        <p>Content</p>
      </AspectRatio>
    );
    const el = document.querySelector(".custom-aspect");
    expect(el).toBeTruthy();
  });

  it("renders without ratio prop", () => {
    render(
      <AspectRatio>
        <p>No ratio content</p>
      </AspectRatio>
    );
    expect(screen.getByText("No ratio content")).toBeTruthy();
  });
});
