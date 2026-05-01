// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InlineEditor } from ".";

describe("InlineEditor", () => {
  it("renders textarea with value", () => {
    render(
      <InlineEditor value="Hello" onChange={() => {}} onSave={() => {}} onCancel={() => {}} />
    );
    expect(screen.getByLabelText("Edit message input")).toHaveValue("Hello");
  });

  it("calls onChange when typing", async () => {
    const onChange = vi.fn();
    render(
      <InlineEditor value="" onChange={onChange} onSave={() => {}} onCancel={() => {}} />
    );
    await userEvent.type(screen.getByLabelText("Edit message input"), "test");
    expect(onChange).toHaveBeenCalled();
  });

  it("calls onSave on Enter", async () => {
    const onSave = vi.fn();
    render(
      <InlineEditor value="Hello" onChange={() => {}} onSave={onSave} onCancel={() => {}} />
    );
    await userEvent.type(screen.getByLabelText("Edit message input"), "{Enter}");
    expect(onSave).toHaveBeenCalledOnce();
  });

  it("calls onCancel on Escape", async () => {
    const onCancel = vi.fn();
    render(
      <InlineEditor value="Hello" onChange={() => {}} onSave={() => {}} onCancel={onCancel} />
    );
    await userEvent.type(screen.getByLabelText("Edit message input"), "{Escape}");
    expect(onCancel).toHaveBeenCalledOnce();
  });

  it("renders custom labels", () => {
    render(
      <InlineEditor value="" onChange={() => {}} onSave={() => {}} onCancel={() => {}} saveLabel="Guardar" cancelLabel="Cancelar" />
    );
    expect(screen.getByLabelText("Guardar")).toBeTruthy();
    expect(screen.getByLabelText("Cancelar")).toBeTruthy();
  });

  it("disables save button when saveDisabled", () => {
    render(
      <InlineEditor value="" onChange={() => {}} onSave={() => {}} onCancel={() => {}} saveDisabled />
    );
    expect(screen.getByLabelText("Save")).toBeDisabled();
  });

  it("focuses textarea on mount by default", () => {
    render(
      <InlineEditor value="Hello" onChange={() => {}} onSave={() => {}} onCancel={() => {}} />
    );
    expect(screen.getByLabelText("Edit message input")).toHaveFocus();
  });

  it("does not focus textarea when autoFocusOnMount is false", () => {
    render(
      <InlineEditor value="Hello" onChange={() => {}} onSave={() => {}} onCancel={() => {}} autoFocusOnMount={false} />
    );
    expect(screen.getByLabelText("Edit message input")).not.toHaveFocus();
  });
});
