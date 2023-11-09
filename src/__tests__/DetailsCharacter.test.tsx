import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Mock, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { MemoryRouter, useSearchParams } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import App from '../App';
import { MOCK_CHARACTERS_10 } from './mockData';
import { mockUseSearchParams } from '../__mocks__/react-router-dom';

const MockApp = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('Detailed Card', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_CHARACTERS_10),
      })
    ) as Mock;
  });
  // beforeAll(() => {
  //   // vi.mocked(mockUseSearchParams).mockReturnValue({ details: '0' });
  // });
  // Render the app
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Check that a loading indicator is displayed while fetching data', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    const cards = screen.getAllByTestId('character-li');
    const cardCount = cards.length;
    expect(cardCount).toBe(10);
    act(() => {
      fireEvent.click(cards[0]);
    });

    // await waitFor(() => {
    //   const modal = screen.getByTestId('modal');

    //   expect(modal).toBeInTheDocument();
    // });

    // screen.debug();
    // screen.debug();
    // screen.debug();
    // screen.debug();
  });
});
