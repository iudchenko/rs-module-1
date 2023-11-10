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

import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import App from '../App';
import { MOCK_CHARACTERS_10 } from './mockData';
import { a } from 'vitest/dist/reporters-5f784f42';

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

    // await waitFor(() => {
    const paginationPage5 = screen.getByTestId('page-5') as HTMLAnchorElement;
    const { href } = paginationPage5;

    expect(paginationPage5).toBeInTheDocument();

    act(() => {
      fireEvent.click(paginationPage5);
    });

    await waitFor(() => {
      expect(href).toContain('/?page=5');
    });

    screen.debug();
  });
});
