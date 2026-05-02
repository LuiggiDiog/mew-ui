// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { toast, dismissToast, subscribeToasts, getToasts, _resetToasts } from "./toast-store";
import { useToast } from "./useToast";
import { Toaster } from ".";
import { renderHook } from "@testing-library/react";

beforeEach(() => {
  _resetToasts();
});

// ─── Store ────────────────────────────────────────────────────────────────────

describe("toast-store", () => {
  it("toast() adds a toast and returns an id", () => {
    const id = toast({ title: "Hello" });
    expect(typeof id).toBe("string");
    expect(id.length).toBeGreaterThan(0);
    expect(getToasts()).toHaveLength(1);
    expect(getToasts()[0].title).toBe("Hello");
    expect(getToasts()[0].id).toBe(id);
  });

  it("toast() stores optional fields correctly", () => {
    toast({ title: "Error", description: "Something broke", variant: "error", duration: 5000 });
    const stored = getToasts()[0];
    expect(stored.description).toBe("Something broke");
    expect(stored.variant).toBe("error");
    expect(stored.duration).toBe(5000);
  });

  it("dismissToast(id) removes the toast", () => {
    const id = toast({ title: "Bye" });
    expect(getToasts()).toHaveLength(1);
    dismissToast(id);
    expect(getToasts()).toHaveLength(0);
  });

  it("dismissToast(id) does not remove unrelated toasts", () => {
    const id1 = toast({ title: "First" });
    toast({ title: "Second" });
    dismissToast(id1);
    const remaining = getToasts();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].title).toBe("Second");
  });

  it("subscribeToasts listener receives updates on add", () => {
    const received: ReturnType<typeof getToasts>[] = [];
    const unsub = subscribeToasts((list) => received.push(list));
    toast({ title: "Notify" });
    unsub();
    expect(received).toHaveLength(1);
    expect(received[0][0].title).toBe("Notify");
  });

  it("subscribeToasts listener receives updates on dismiss", () => {
    const id = toast({ title: "Gone" });
    const received: ReturnType<typeof getToasts>[] = [];
    const unsub = subscribeToasts((list) => received.push(list));
    dismissToast(id);
    unsub();
    expect(received).toHaveLength(1);
    expect(received[0]).toHaveLength(0);
  });

  it("unsubscribed listener is no longer called", () => {
    let callCount = 0;
    const unsub = subscribeToasts(() => { callCount++; });
    unsub();
    toast({ title: "After unsub" });
    expect(callCount).toBe(0);
  });

  it("_resetToasts clears all toasts and notifies listeners", () => {
    toast({ title: "A" });
    toast({ title: "B" });
    const received: ReturnType<typeof getToasts>[] = [];
    const unsub = subscribeToasts((list) => received.push(list));
    _resetToasts();
    unsub();
    expect(getToasts()).toHaveLength(0);
    expect(received[0]).toHaveLength(0);
  });
});

// ─── useToast hook ────────────────────────────────────────────────────────────

describe("useToast", () => {
  it("returns empty toasts initially after reset", () => {
    const { result } = renderHook(() => useToast());
    expect(result.current.toasts).toHaveLength(0);
  });

  it("reflects store updates reactively", () => {
    const { result } = renderHook(() => useToast());
    act(() => {
      toast({ title: "Reactive" });
    });
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe("Reactive");
  });

  it("exposes toast and dismiss helpers", () => {
    const { result } = renderHook(() => useToast());
    expect(typeof result.current.toast).toBe("function");
    expect(typeof result.current.dismiss).toBe("function");
  });

  it("dismiss via hook removes the toast", () => {
    const { result } = renderHook(() => useToast());
    let id: string;
    act(() => {
      id = result.current.toast({ title: "Remove me" });
    });
    act(() => {
      result.current.dismiss(id);
    });
    expect(result.current.toasts).toHaveLength(0);
  });
});

// ─── Toaster component ────────────────────────────────────────────────────────

describe("Toaster", () => {
  it("renders nothing when there are no toasts", () => {
    render(<Toaster />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("renders a toast title added to the store", () => {
    act(() => {
      toast({ title: "Rendered toast" });
    });
    render(<Toaster />);
    expect(screen.getByText("Rendered toast")).toBeTruthy();
  });

  it("renders the description when provided", () => {
    act(() => {
      toast({ title: "With desc", description: "Some details here" });
    });
    render(<Toaster />);
    expect(screen.getByText("With desc")).toBeTruthy();
    expect(screen.getByText("Some details here")).toBeTruthy();
  });

  it("renders multiple toasts", () => {
    act(() => {
      toast({ title: "First toast" });
      toast({ title: "Second toast" });
    });
    render(<Toaster />);
    expect(screen.getByText("First toast")).toBeTruthy();
    expect(screen.getByText("Second toast")).toBeTruthy();
  });

  it("renders a close button for each toast", () => {
    act(() => {
      toast({ title: "Closable" });
    });
    render(<Toaster />);
    const closeBtn = screen.getByRole("button", { name: /close/i });
    expect(closeBtn).toBeTruthy();
  });
});
