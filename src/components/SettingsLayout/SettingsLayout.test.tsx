// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SettingsLayout } from ".";

describe("SettingsLayout", () => {
  it("renders navigation and content", () => {
    render(<SettingsLayout title="Settings" items={[{ label: "Profile", href: "#profile" }]}><div>Content</div></SettingsLayout>);
    expect(screen.getByText("Settings")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Profile" })).toBeTruthy();
    expect(screen.getByText("Content")).toBeTruthy();
  });
});
