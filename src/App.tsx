import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';

export interface Person {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

type AppProps = {};

type AppState = {
  searchTerm: string;
  results: Person[];
  status: string;
};

export class App extends Component<AppProps, AppState> {
  private abortController: AbortController;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchTerm: this.getInitialSearchTerm(),
      results: [],
      status: 'active', // active, loading, error
    };
    this.abortController = new AbortController();
  }

  componentDidMount() {
    this.handleStatus('loading');
    this.fetchData(this.state.searchTerm);
  }

  fetchData(searchTerm: string) {
    // this.handleStatus('loading');
    this.setState({ status: 'loading' });
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
        this.setState({ status: 'active' });
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Request was aborted.');
        } else {
          console.error(err);
          this.setState({ status: 'error' });
        }
      });
  }

  getInitialSearchTerm() {
    const searchTerm = window.localStorage.getItem('searchTerm');
    return searchTerm ? searchTerm : '';
  }

  handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
    window.localStorage.setItem('searchTerm', searchTerm);
  }

  handleSearch() {
    this.fetchData(this.state.searchTerm.trim());
  }

  handleStatus(status: string) {
    this.setState({ status });
  }

  render() {
    return (
      <ErrorBoundary>
        <AppWrapper>
          <SearchBar
            searchTerm={this.state.searchTerm}
            onLoading={() => this.handleStatus('loading')}
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
