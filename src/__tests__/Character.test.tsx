import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const mockedNavigator = vi.fn();

const MockApp = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
};

describe('Tests for the Card component', () => {
  // Render the character
  beforeEach(() => {
    render(<MockApp />);
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

    // screen.debug();
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

  // screen.debug();

  afterEach(() => {
    vi.clearAllMocks();
  });
});
