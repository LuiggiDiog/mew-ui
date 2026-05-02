// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from ".";

function TestAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

describe("Accordion", () => {
  it("renders accordion triggers", () => {
    render(<TestAccordion />);
    expect(screen.getByText("Section 1")).toBeTruthy();
    expect(screen.getByText("Section 2")).toBeTruthy();
  });

  it("content is initially closed", () => {
    render(<TestAccordion />);
    const trigger = screen.getByText("Section 1").closest("button");
    expect(trigger).toHaveAttribute("data-state", "closed");
  });

  it("expands when trigger is clicked", () => {
    render(<TestAccordion />);
    const trigger = screen.getByText("Section 1").closest("button")!;
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("data-state", "open");
  });

  it("collapses when trigger is clicked again", () => {
    render(<TestAccordion />);
    const trigger = screen.getByText("Section 1").closest("button")!;
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("data-state", "closed");
  });

  it("Accordion applies w-full class", () => {
    const { container } = render(<TestAccordion />);
    expect(container.firstChild).toHaveClass("w-full");
  });

  it("Accordion accepts custom className", () => {
    const { container } = render(
      <Accordion type="single" className="custom-accordion">
        <AccordionItem value="x">
          <AccordionTrigger>X</AccordionTrigger>
          <AccordionContent>X Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(container.firstChild).toHaveClass("custom-accordion");
  });

  it("AccordionTrigger renders chevron icon", () => {
    render(<TestAccordion />);
    const trigger = screen.getByText("Section 1").closest("button")!;
    const icon = trigger.querySelector("svg");
    expect(icon).toBeTruthy();
  });
});
