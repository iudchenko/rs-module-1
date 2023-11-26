import React from "react";
import { waitFor, render, screen, fireEvent } from "@testing-library/react";
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

describe("Tests for the Search component", () => {
  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  it("Verify that clicking the Search button saves the entered value to the local storage", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });
    const search = screen.getByRole("search");
    const searchInput = search.querySelector("input");
    const searchBtn = search.querySelector("button");

    fireEvent.change(searchInput as Element | Node | Document | Window, {
      target: { value: "yoda" },
    });
    fireEvent.click(searchBtn as Element | Node | Document | Window);
    const ls = localStorage.store.searchTerm;

    expect(ls).toBe("yoda");
  });

  it("Check that the component retrieves the value from the local storage upon mounting", async () => {
    await waitFor(() => {
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    });
    const ls = localStorage.store.searchTerm;
    expect(ls).toBe("yoda");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
