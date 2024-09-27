import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OperationsComponent from "../../components/operations/operations";

describe("Operations", () => {
  it("add column button should exists", () => {
    render(<OperationsComponent />);

    // const columnsButtonElement = screen.getByTestId("columns-id");
    const columnsButtonElement = screen.getByText("Add new column");

    expect(columnsButtonElement).toBeInTheDocument();
  });

  it("add task button should exists", () => {
    render(<OperationsComponent />);

    const taskButtonElement = screen.getByText("Add new task");

    expect(taskButtonElement).toBeInTheDocument();
  });

  it("after clicking add new task button a modal should open", () => {
    render(<OperationsComponent />);

    const taskButtonElement = screen.getByText("Add new task");

    fireEvent.click(taskButtonElement);

    const taskModal = screen.getByText(/Add task/i);

    expect(taskModal).toBeInTheDocument();
  });

  it("after clicking add new column button a modal should open", () => {
    render(<OperationsComponent />);

    const columsButtonElement = screen.getByText("Add new column");

    fireEvent.click(columsButtonElement);

    const columnModal = screen.getByText(/Add column/i);

    expect(columnModal).toBeInTheDocument();
  });
});
