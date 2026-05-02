import "@testing-library/jest-dom";

// jsdom does not implement scrollIntoView — mock it globally
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.scrollIntoView = () => {};
}

// jsdom does not implement ResizeObserver — mock it globally (required by @radix-ui/react-slider)
if (typeof window !== "undefined" && !window.ResizeObserver) {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
