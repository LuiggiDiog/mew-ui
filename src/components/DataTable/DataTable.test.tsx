// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from ".";

type RowT = { id: number; name: string };

const columns = [
  { key: "id", header: "ID", cell: (row: RowT) => row.id },
  { key: "name", header: "Name", cell: (row: RowT) => row.name },
];

const data: RowT[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

describe("DataTable", () => {
  it("renders column headers", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("ID")).toBeTruthy();
    expect(screen.getByText("Name")).toBeTruthy();
  });

  it("renders row data", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Alice")).toBeTruthy();
    expect(screen.getByText("Bob")).toBeTruthy();
  });

  it("shows default empty message when data is empty", () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText("No results found.")).toBeTruthy();
  });

  it("shows PawIcon in empty state", () => {
    const { container } = render(<DataTable columns={columns} data={[]} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("shows custom emptyMessage when data is empty", () => {
    render(
      <DataTable columns={columns} data={[]} emptyMessage="Nothing here." />
    );
    expect(screen.getByText("Nothing here.")).toBeTruthy();
  });

  it("renders custom emptyState override instead of default", () => {
    render(
      <DataTable
        columns={columns}
        data={[]}
        emptyState={<span>Custom empty</span>}
      />
    );
    expect(screen.getByText("Custom empty")).toBeTruthy();
    expect(screen.queryByText("No results found.")).toBeNull();
  });

  it("calls onRowClick when a row is clicked", () => {
    const onRowClick = vi.fn();
    render(<DataTable columns={columns} data={data} onRowClick={onRowClick} />);
    fireEvent.click(screen.getByText("Alice"));
    expect(onRowClick).toHaveBeenCalledWith(data[0]);
  });

  it("does not call onRowClick when onRowClick is not provided", () => {
    render(<DataTable columns={columns} data={data} />);
    fireEvent.click(screen.getByText("Alice"));
  });

  it("applies column className to cells", () => {
    const cols = [
      {
        key: "name",
        header: "Name",
        className: "w-32",
        cell: (row: RowT) => row.name,
      },
    ];
    const { container } = render(<DataTable columns={cols} data={data} />);
    const cells = container.querySelectorAll("td.w-32");
    expect(cells.length).toBe(2);
  });

  it("applies custom className to wrapper", () => {
    const { container } = render(
      <DataTable columns={columns} data={data} className="custom-wrapper" />
    );
    expect(container.firstChild).toHaveClass("custom-wrapper");
  });

  it("renders rows with keyboard support when onRowClick is provided", () => {
    const onRowClick = vi.fn();
    render(<DataTable columns={columns} data={data} onRowClick={onRowClick} />);
    const row = screen.getByText("Alice").closest("tr");
    expect(row?.getAttribute("tabindex")).toBe("0");
    fireEvent.keyDown(row!, { key: "Enter" });
    expect(onRowClick).toHaveBeenCalledWith(data[0]);
  });
});
