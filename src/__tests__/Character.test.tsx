import React from "react";
import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

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

describe("Tests for the Card component", () => {
  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  it("Ensure that the card component renders the relevant card data", async () => {
    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    });
  });

  it("Validate that clicking on a card opens a detailed card component", async () => {
    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    });

    const card = screen.getAllByTestId("character-li")[0];

    act(() => {
      fireEvent.click(card);
    });

    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({
      asPath: "/search/1?details=1",
      pathname: "/search/1",
      query: { details: "1" },
    });

    // screen.debug();
  });

  it("Check that clicking triggers an additional API call to fetch detailed information.", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    const card = screen.getAllByTestId("character-li")[0];

    act(() => {
      fireEvent.click(card);
    });

    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({
      asPath: "/search/1?details=1",
      pathname: "/search/1",
      query: { details: "1" },
    });
  });

  // screen.debug();

  afterEach(() => {
    vi.clearAllMocks();
  });
});
