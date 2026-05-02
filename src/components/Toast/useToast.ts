"use client";

import { useState, useEffect } from "react";
import { subscribeToasts, getToasts, toast, dismissToast } from "./toast-store";
import type { ToastData } from "./toast-store";

export function useToast() {
  const [toasts, setToasts] = useState<ToastData[]>(getToasts);

  useEffect(() => {
    return subscribeToasts(setToasts);
  }, []);

  return { toasts, toast, dismiss: dismissToast };
}
