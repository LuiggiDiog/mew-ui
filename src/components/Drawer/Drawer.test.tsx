import { describe, expect, it } from "vitest";
import { Drawer, DrawerContent, DrawerTrigger } from ".";

describe("Drawer", () => {
  it("exports drawer aliases", () => {
    expect(Drawer).toBeDefined();
    expect(DrawerTrigger).toBeDefined();
    expect(DrawerContent).toBeDefined();
  });
});
