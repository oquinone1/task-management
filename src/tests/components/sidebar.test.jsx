import { it, describe, expect, vi, afterEach, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import SidebarComponent from "../../components/sidebar/sidebar";
import "@testing-library/jest-dom";

describe("Sidebar", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve([{ key: "Project-1", title: "Project 1" }]),
      });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // it("Render button with an icon", () => {
  //   // Arrange
  //   render(<SidebarComponent />);
  //   // Act
  //   const button = screen.getByRole("button");
  //   // Assert
  //   expect(button).toBeInTheDocument();
  // });

  it("renders user data after fetch call", async () => {
    // render(<SidebarComponent />);
    // expect(screen.findByTestId("menu-items")).toBeInTheDocument();
    // const button = screen.getByRole("button");
    // expect(button).toBeInTheDocument();
    // await waitFor(() => {
    //   expect(screen)
    // })
  });
});
