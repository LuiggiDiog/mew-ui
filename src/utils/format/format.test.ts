import { describe, it, expect } from "vitest";
import {
  formatDuration,
  formatBytes,
  formatDate,
  formatRelativeDate,
  truncate,
  percentageDiff,
} from ".";

describe("formatDuration", () => {
  it("formats milliseconds when under 1s", () => {
    expect(formatDuration(0.5)).toBe("500ms");
  });

  it("formats seconds when under 60s", () => {
    expect(formatDuration(3.14)).toBe("3.14s");
  });

  it("formats minutes and seconds", () => {
    expect(formatDuration(90)).toBe("1m 30s");
  });

  it("handles zero", () => {
    expect(formatDuration(0)).toBe("0ms");
  });
});

describe("formatBytes", () => {
  it("formats zero bytes", () => {
    expect(formatBytes(0)).toBe("0 B");
  });

  it("formats bytes", () => {
    expect(formatBytes(512)).toBe("512 B");
  });

  it("formats kilobytes", () => {
    expect(formatBytes(1024)).toBe("1 KB");
  });

  it("formats megabytes", () => {
    expect(formatBytes(1024 * 1024)).toBe("1 MB");
  });
});

describe("formatDate", () => {
  it("returns a non-empty string for a valid date", () => {
    const result = formatDate(new Date("2024-01-15T10:00:00Z"));
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  it("accepts a date string", () => {
    const result = formatDate("2024-01-15T10:00:00Z");
    expect(typeof result).toBe("string");
  });
});

describe("formatRelativeDate", () => {
  it("returns 'just now' for recent dates", () => {
    const now = new Date();
    expect(formatRelativeDate(now)).toBe("just now");
  });

  it("returns minutes ago", () => {
    const past = new Date(Date.now() - 5 * 60 * 1000);
    expect(formatRelativeDate(past)).toBe("5m ago");
  });

  it("returns hours ago", () => {
    const past = new Date(Date.now() - 3 * 3600 * 1000);
    expect(formatRelativeDate(past)).toBe("3h ago");
  });

  it("returns days ago for recent days", () => {
    const past = new Date(Date.now() - 2 * 86400 * 1000);
    expect(formatRelativeDate(past)).toBe("2d ago");
  });
});

describe("truncate", () => {
  it("returns string unchanged when within limit", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  it("truncates and appends ellipsis when over limit", () => {
    expect(truncate("hello world", 5)).toBe("hello…");
  });

  it("returns string at exact limit unchanged", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });
});

describe("percentageDiff", () => {
  it("returns N/A when base is zero", () => {
    expect(percentageDiff(0, 10)).toBe("N/A");
  });

  it("returns positive diff with sign", () => {
    expect(percentageDiff(100, 150)).toBe("+50.0%");
  });

  it("returns negative diff", () => {
    expect(percentageDiff(100, 80)).toBe("-20.0%");
  });

  it("returns 0% when values are equal", () => {
    expect(percentageDiff(100, 100)).toBe("+0.0%");
  });
});
