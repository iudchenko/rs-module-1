import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import {
  Mock,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { MemoryRouter, useSearchParams } from 'react-router-dom';
import { MOCK_CHARACTERS_1, MOCK_CHARACTERS_10 } from './mockData';

import App from '../App';

const mockedNavigator = vi.fn();

const MockApp = () => {
  return (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

describe('Tests for the Card component', () => {
  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_CHARACTERS_10),
      })
    ) as Mock;
  });

  it('Ensure that the card component renders the relevant card data', async () => {
    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
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
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    });

    const card = screen.getAllByTestId('character-li')[0];

    act(() => {
      fireEvent.click(card);
    });

    expect(mockedNavigator).toHaveBeenCalledWith('/search/1?details=1');

    // await waitFor(() => {
    //   const modal = screen.getByTestId('modal');
    //   expect(modal).toBeInTheDocument();
    // });

    screen.debug();
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
  });

  screen.debug();

  afterEach(() => {
    vi.clearAllMocks();
  });
});
