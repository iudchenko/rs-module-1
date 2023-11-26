import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { MOCK_CHARACTERS_10 } from "../__mocks__/mockData";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import AppWrapper from "../components/AppWrapper";
import ErrorButton from "../components/ErrorButton";
import Header from "../components/Header";
import PageCountSelect from "../components/PageCountSelect";
import Results from "../components/Results";
import Search from "../components/Search";
import mockRouter from "next-router-mock";

vi.mock("next/router", async () => await vi.importActual("next-router-mock"));

const MockApp = () => {
  return (
    <Provider store={makeStore()}>
      <AppWrapper>
        <Header>
          <Search />
          <PageCountSelect />
        </Header>
        <Results />
        <ErrorButton />
      </AppWrapper>
    </Provider>
  );
};

describe("Tests for the Pagination component", () => {
  // Render the app
  beforeEach(() => {
    render(<MockApp />);
  });

  it("Make sure the component updates URL query parameter when page changes.", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    // await waitFor(() => {
    const paginationPage5 = screen.getByTestId("page-5") as HTMLAnchorElement;

    expect(paginationPage5).toBeInTheDocument();

    act(() => {
      fireEvent.click(paginationPage5);
      mockRouter.push("/?page=5");
    });

    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: "/?page=5",
        pathname: "/",
        query: { page: "5" },
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
