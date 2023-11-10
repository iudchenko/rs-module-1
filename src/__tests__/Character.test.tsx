import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { Mock, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { MOCK_CHARACTERS_1 } from './mockData';

import App from '../App';

const mockedNavigator = vi.fn();

const MockApp = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('Character', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_CHARACTERS_1),
      })
    ) as Mock;
  });

  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Ensure that the card component renders the relevant card data', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
  });

  it('Validate that clicking on a card opens a detailed card component', async () => {
    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom');
      return {
        ...(actual as object),
        useNavigate: () => mockedNavigator,
      };
    });

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    const card = screen.getAllByTestId('character-li')[0];

    act(() => {
      fireEvent.click(card);
    });

    expect(mockedNavigator).toHaveBeenCalledWith('/search/1?details=1');
  });

  it('Check that clicking triggers an additional API call to fetch detailed information.', async () => {
    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom');
      return {
        ...(actual as object),
        useNavigate: () => mockedNavigator,
      };
    });

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    const card = screen.getAllByTestId('character-li')[0];

    act(() => {
      fireEvent.click(card);
    });

    expect(mockedNavigator).toHaveBeenCalledWith('/search/1?details=1');

    // Wait for the API call to be made
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  screen.debug();
});
