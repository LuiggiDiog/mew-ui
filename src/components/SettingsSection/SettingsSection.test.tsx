// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SettingsSection } from ".";

describe("SettingsSection", () => {
  it("renders title", () => {
    render(<SettingsSection title="General">Content</SettingsSection>);
    expect(screen.getByText("General")).toBeTruthy();
  });

  it("renders description when provided", () => {
    render(
      <SettingsSection title="General" description="General settings">
        Content
      </SettingsSection>
    );
    expect(screen.getByText("General settings")).toBeTruthy();
  });

  it("renders children", () => {
    render(<SettingsSection title="General">Child content</SettingsSection>);
    expect(screen.getByText("Child content")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <SettingsSection title="General" className="custom-class">
        Content
      </SettingsSection>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
