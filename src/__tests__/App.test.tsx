import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
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

describe("Tests for the Card List component", () => {
  // Render the app
  beforeEach(() => {
    render(<MockApp />);
  });

  it("Verify that the component renders the specified number of cards (5)", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    const select = screen.getByTestId("per_page");
    fireEvent.change(select, { target: { value: 5 } });

    await waitFor(() => {
      const cards = screen.getAllByRole("listitem");
      const cardCount = cards.length;
      expect(cardCount).toBe(5);
    });

    // screen.debug();
  });

  it("Verify that the component renders the specified number of cards (10)", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    const select = screen.getByTestId("per_page");
    fireEvent.change(select, { target: { value: 10 } });

    // await waitFor(() => {
    const cards = screen.getAllByRole("listitem");
    const cardCount = cards.length;
    expect(cardCount).toBe(10);
    // });
    // screen.debug();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});

describe("Tests for the Card List component (no results)", () => {
  // Render the app
  beforeEach(() => {
    render(<MockApp />);
  });

  it("Check that an appropriate message is displayed if no cards are present.", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });

    const search = screen.getByRole("search");
    const searchInput = search.querySelector("input");
    const searchBtn = search.querySelector("button");

    // Search for character that does not exist to return no results
    act(() => {
      fireEvent.change(searchInput as Element | Node | Document | Window, {
        target: { value: "kylo ren" },
      });
    });

    act(() => {
      fireEvent.click(searchBtn as Element | Node | Document | Window);
    });

    await waitFor(() => {
      const nothingFound = screen.getByText(/Nothing found/i);
      expect(nothingFound).toBeInTheDocument();
    });

    // screen.debug();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
