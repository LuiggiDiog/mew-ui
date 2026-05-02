// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from ".";

describe("Pagination", () => {
  it("renders nav with aria-label", () => {
    const { container } = render(<Pagination><PaginationContent /></Pagination>);
    expect(container.querySelector("nav")).toHaveAttribute("aria-label", "Pagination");
  });

  it("renders page buttons", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem><PaginationButton>1</PaginationButton></PaginationItem>
          <PaginationItem><PaginationButton isActive>2</PaginationButton></PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText("2")).toBeTruthy();
  });

  it("active button has aria-current=page", () => {
    render(<PaginationButton isActive>3</PaginationButton>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "page");
  });

  it("disabled button does not fire onClick", () => {
    const onClick = vi.fn();
    render(<PaginationButton disabled onClick={onClick}>1</PaginationButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders PaginationPrevious with aria-label", () => {
    render(<PaginationPrevious />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Previous page");
  });

  it("renders PaginationNext with aria-label", () => {
    render(<PaginationNext />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Next page");
  });

  it("renders ellipsis", () => {
    render(<PaginationEllipsis />);
    expect(screen.getByText("…")).toBeTruthy();
  });
});
