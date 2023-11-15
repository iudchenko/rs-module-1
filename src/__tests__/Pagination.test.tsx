import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import { MOCK_CHARACTERS_10 } from './mockData';
import AppRoutes from '../components/AppRoutes';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const mockedNavigator = vi.fn();

const MockApp = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>
    </Provider>
  );
};

describe('Tests for the Pagination component', () => {
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

    // screen.debug();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
