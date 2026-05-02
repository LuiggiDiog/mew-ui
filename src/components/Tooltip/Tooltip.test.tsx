// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from ".";

describe("Tooltip", () => {
  it("renders trigger", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByRole("button", { name: "Hover me" })).toBeTruthy();
  });

  it("renders TooltipProvider without crashing", () => {
    const { container } = render(
      <TooltipProvider>
        <div data-testid="child">content</div>
      </TooltipProvider>
    );
    expect(container.querySelector("[data-testid='child']")).toBeTruthy();
  });

  it("renders tooltip structure with trigger and content", () => {
    render(
      <TooltipProvider>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <button data-testid="trigger-btn">Hover</button>
          </TooltipTrigger>
          <TooltipContent>My tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByTestId("trigger-btn")).toBeTruthy();
    // Radix renders the text twice (visible + aria span), getAllByText handles that
    expect(screen.getAllByText("My tooltip").length).toBeGreaterThan(0);
  });

  it("applies custom className to TooltipContent", () => {
    render(
      <TooltipProvider>
        <Tooltip defaultOpen>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent className="custom-class">Tooltip label</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    // Target the visible content div (not the hidden aria span)
    const contentDiv = document.querySelector(".custom-class");
    expect(contentDiv).toBeTruthy();
    expect(contentDiv).toHaveClass("custom-class");
  });
});
