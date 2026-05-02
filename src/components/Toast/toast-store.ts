"use client";

export type ToastVariant = "default" | "success" | "error" | "warning";

export type ToastData = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
};

type Listener = (toasts: ToastData[]) => void;

let toasts: ToastData[] = [];
const listeners: Listener[] = [];

function notify() {
  listeners.forEach((l) => l([...toasts]));
}

export function toast(data: Omit<ToastData, "id">) {
  const id = Math.random().toString(36).slice(2);
  toasts = [...toasts, { ...data, id }];
  notify();
  return id;
}

export function dismissToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

export function subscribeToasts(listener: Listener) {
  listeners.push(listener);
  return () => {
    const i = listeners.indexOf(listener);
    if (i > -1) listeners.splice(i, 1);
  };
}

export function getToasts() {
  return toasts;
}

export function _resetToasts() {
  toasts = [];
  notify();
}
