// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FileUpload } from ".";

describe("FileUpload", () => {
  it("renders file input with label", () => {
    render(<FileUpload label="Upload avatar" />);
    expect(screen.getByLabelText("Upload avatar")).toHaveAttribute("type", "file");
  });

  it("renders error", () => {
    render(<FileUpload error="Too large" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Too large");
  });

  it("applies custom className", () => {
    const { container } = render(<FileUpload className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
