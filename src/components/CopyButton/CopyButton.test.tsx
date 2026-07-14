// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CopyButton } from ".";

describe("CopyButton", () => {
  it("copies text", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<CopyButton text="hello" />);
    fireEvent.click(screen.getByRole("button", { name: /copy/i }));
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("hello"));
  });

  it("calls onCopied", async () => {
    Object.assign(navigator, { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } });
    const onCopied = vi.fn();
    render(<CopyButton text="hello" onCopied={onCopied} />);
    fireEvent.click(screen.getByRole("button", { name: /copy/i }));
    await waitFor(() => expect(onCopied).toHaveBeenCalledOnce());
  });
});
