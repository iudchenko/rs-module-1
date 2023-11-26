import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import mockRouter from "next-router-mock";
import NotFound from "../pages/404";

vi.mock("next/router", async () => await vi.importActual("next-router-mock"));

describe("App not found route", () => {
  test("Ensure that the 404 page is displayed when navigating to an invalid route", async () => {
    // Set the initial url:
    mockRouter.push("/nonexisting");

    render(<NotFound />);

    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({
      asPath: "/nonexisting",
      pathname: "/nonexisting",
    });

    await waitFor(() => {
      expect(screen.getByText(/404 Not found./i)).toBeInTheDocument();
    });
  });
});
