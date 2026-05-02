// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from ".";

describe("Breadcrumb", () => {
  it("renders nav with aria-label", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(container.querySelector("nav")).toHaveAttribute("aria-label", "Breadcrumb");
  });

  it("renders link text", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(screen.getByText("Home")).toBeTruthy();
  });

  it("renders current page with aria-current", () => {
    render(<BreadcrumbPage>Settings</BreadcrumbPage>);
    expect(screen.getByText("Settings")).toHaveAttribute("aria-current", "page");
  });

  it("renders separator with aria-hidden", () => {
    const { container } = render(<BreadcrumbSeparator />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
