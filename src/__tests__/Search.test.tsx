import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import { Mock, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { MOCK_CHARACTERS_10 } from './mockData';

import App from '../App';

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
        json: () => Promise.resolve(MOCK_CHARACTERS_10),
      })
    ) as Mock;
  });

  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
    const search = screen.getByRole('search');
    const searchInput = search.querySelector('input');
    const searchBtn = search.querySelector('button');

    fireEvent.change(searchInput as Element | Node | Document | Window, {
      target: { value: 'yoda' },
    });
    fireEvent.click(searchBtn as Element | Node | Document | Window);
    const ls = localStorage.store.searchTerm;

    expect(ls).toBe('yoda');
  });

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
    const ls = localStorage.store.searchTerm;
    expect(ls).toBe('yoda');
  });
});
