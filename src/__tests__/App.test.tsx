import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Mock, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import App from '../App';
import { MOCK_CHARACTERS_10, MOCK_NOTHING_FOUND } from './mockData';

const MockApp = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('App with results', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_CHARACTERS_10),
      })
    ) as Mock;
  });
  // Render the app
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Verify that the component renders the specified number of cards (5)', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    const select = screen.getByTestId('per_page');
    fireEvent.change(select, { target: { value: 5 } });

    await waitFor(() => {
      const cards = screen.getAllByRole('listitem');
      const cardCount = cards.length;
      expect(cardCount).toBe(5);
    });

    screen.debug();
  });

  it('Verify that the component renders the specified number of cards (10)', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    // await waitFor(() => {
    const cards = screen.getAllByRole('listitem');
    const cardCount = cards.length;
    expect(cardCount).toBe(10);
    // });
    screen.debug();
  });

  it('Verify that the component renders the specified number of cards (20)', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    const select = screen.getByTestId('per_page');
    act(() => {
      fireEvent.change(select, { target: { value: 20 } });
    });

    await waitFor(() => {
      const cards = screen.getAllByRole('listitem');
      const cardCount = cards.length;
      expect(cardCount).toBe(20);
    });

    screen.debug();
  });
});

describe('App with no results', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_NOTHING_FOUND),
      })
    ) as Mock;
  });

  // Render the app
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Check that an appropriate message is displayed if no cards are present.', async () => {
    await waitFor(() => {
      const nothingFound = screen.getByText('Nothing found');

      expect(nothingFound).toBeInTheDocument();
    });

    screen.debug();
  });
});
