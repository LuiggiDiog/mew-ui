// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageLightbox } from ".";

describe("ImageLightbox", () => {
  it("renders nothing when closed", () => {
    render(<ImageLightbox open={false} onOpenChange={() => {}} src="/test.png" />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders image when open", () => {
    render(<ImageLightbox open onOpenChange={() => {}} src="/test.png" alt="Test" />);
    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(screen.getByAltText("Test")).toBeTruthy();
  });

  it("shows download button when downloadFileName is provided", () => {
    render(
      <ImageLightbox open onOpenChange={() => {}} src="/test.png" downloadFileName="image.png" />
    );
    expect(screen.getByLabelText("Download image")).toBeTruthy();
  });

  it("hides download button when downloadFileName is not provided", () => {
    render(<ImageLightbox open onOpenChange={() => {}} src="/test.png" />);
    expect(screen.queryByLabelText("Download image")).toBeNull();
  });

  it("calls onOpenChange with false when close button is clicked", async () => {
    const onOpenChange = vi.fn();
    render(<ImageLightbox open onOpenChange={onOpenChange} src="/test.png" />);
    await userEvent.click(screen.getByLabelText("Close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
