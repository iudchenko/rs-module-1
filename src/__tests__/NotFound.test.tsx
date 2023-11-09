// NotFound.test.js
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound'; // Import your 404 page component
import { Mock, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
import { SearchProvider } from '../context/SearchContext';
import { MOCK_NOTHING_FOUND } from './mockData';

const MockApp404 = () => {
  return (
    <SearchProvider>
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <NotFound />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('App with results', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_NOTHING_FOUND),
      })
    ) as Mock;
  });

  // Render the app
  beforeEach(() => {
    render(<MockApp404 />);
  });

  it('Ensure that the 404 page is displayed when navigating to an invalid route', async () => {
    await waitFor(() => {
      expect(screen.getByText('404 Not Found.')).toBeInTheDocument();
    });

    screen.debug();
  });
});
