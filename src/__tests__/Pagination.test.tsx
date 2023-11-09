import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import {
  Mock,
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { MemoryRouter, useLocation, useSearchParams } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import App from '../App';
import { MOCK_CHARACTERS_10 } from './mockData';

const MockApp = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('Pagination', () => {
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

  it('Make sure the component updates URL query parameter when page changes.', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    // await waitFor(() => {
    const paginationPage5 = screen.getByTestId('page-5');
    expect(paginationPage5).toBeInTheDocument();
    act(() => {
      /* fire events that update state */
      fireEvent.click(paginationPage5);
    });

    screen.debug();
  });
});
