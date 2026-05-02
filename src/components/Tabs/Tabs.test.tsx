// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from ".";

function TestTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("renders tabs list", () => {
    render(<TestTabs />);
    expect(screen.getByRole("tablist")).toBeTruthy();
  });

  it("renders tab triggers", () => {
    render(<TestTabs />);
    expect(screen.getByRole("tab", { name: "Tab 1" })).toBeTruthy();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeTruthy();
  });

  it("default tab is active", () => {
    render(<TestTabs />);
    const tab1 = screen.getByRole("tab", { name: "Tab 1" });
    expect(tab1).toHaveAttribute("data-state", "active");
  });

  it("inactive tab does not have active state", () => {
    render(<TestTabs />);
    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    expect(tab2).toHaveAttribute("data-state", "inactive");
  });

  it("active tab panel content is visible", () => {
    render(<TestTabs />);
    expect(screen.getByText("Content 1")).toBeTruthy();
  });

  it("TabsList applies base classes", () => {
    render(<TestTabs />);
    const list = screen.getByRole("tablist");
    expect(list).toHaveClass("bg-surface-elevated");
    expect(list).toHaveClass("rounded-xl");
  });

  it("TabsTrigger applies base classes", () => {
    render(<TestTabs />);
    const trigger = screen.getByRole("tab", { name: "Tab 1" });
    expect(trigger).toHaveClass("text-sm");
    expect(trigger).toHaveClass("font-medium");
  });

  it("TabsList accepts custom className", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList className="custom-list">
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    expect(screen.getByRole("tablist")).toHaveClass("custom-list");
  });

  it("TabsContent accepts custom className", () => {
    const { container } = render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a" className="custom-content">
          Content
        </TabsContent>
      </Tabs>
    );
    const panel = container.querySelector("[role='tabpanel']");
    expect(panel).toHaveClass("custom-content");
  });
});
