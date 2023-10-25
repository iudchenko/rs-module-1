import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import AppWrapper from "./components/AppWrapper";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorButton from "./components/ErrorButton";
import { Person } from "./interfaces/interfaces";

type AppProps = {};

export enum AppStatus {
  active = "active",
  loading = "loading",
  error = "error",
}

type AppState = {
  searchTerm: string;
  results: Person[];
  status: AppStatus;
};

export class App extends Component<AppProps, AppState> {
  private abortController: AbortController;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchTerm: this.getInitialSearchTerm(),
      results: [],
      status: AppStatus.active, // active, loading, error
    };
    this.abortController = new AbortController();
  }

  componentDidMount() {
    this.handleStatus(AppStatus.loading);
    this.fetchData(this.state.searchTerm);
  }

  fetchData(searchTerm: string) {
    this.setState({ status: AppStatus.loading });
    // Cancel the previous request, if any
    this.abortController.abort();

    // Create a new AbortController
    this.abortController = new AbortController();
    const { signal } = this.abortController;

    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : `https://swapi.dev/api/people/`;

    fetch(url, { signal })
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          results: res.results,
        });
      })
      .then(() => {
        this.setState({ status: AppStatus.active });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Request was aborted.");
        } else {
          console.error(err);
          this.setState({ status: AppStatus.error });
        }
      });
  }

  getInitialSearchTerm() {
    const searchTerm = window.localStorage.getItem("searchTerm");
    return searchTerm ? searchTerm : "";
  }

  handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
    window.localStorage.setItem("searchTerm", searchTerm);
  }

  handleSearch() {
    this.fetchData(this.state.searchTerm.trim());
  }

  handleStatus(status: AppStatus) {
    this.setState({ status });
  }

  render() {
    return (
      <ErrorBoundary>
        <AppWrapper>
          <SearchBar
            searchTerm={this.state.searchTerm}
            onLoading={() => this.handleStatus(AppStatus.loading)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleSearchTermChange(e)
            }
            onSearch={() => this.handleSearch()}
          />
          <Results status={this.state.status} results={this.state.results} />
          <ErrorButton />
        </AppWrapper>
      </ErrorBoundary>
    );
  }
}

export default App;
