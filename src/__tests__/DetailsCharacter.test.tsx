import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter, Router } from 'react-router-dom';
import { MOCK_CHARACTER } from './mockData';

import DetailsClose from '../components/DetailsClose';
import Details from '../components/Details';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import userEvent from '@testing-library/user-event';

import App from '../App';
import DetailsCharacter from '../components/DetailsCharacter';
import DetailsModal from '../components/DetailsModal';
import AppRoutes from '../components/AppRoutes';

const mockedNavigator = vi.fn();

const MockAppWithDetails = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <AppRoutes />
        <Details />
      </MemoryRouter>
    </Provider>
  );
};

const MockAppDetailsLuke = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <DetailsModal>
          <DetailsCharacter details={MOCK_CHARACTER} />
        </DetailsModal>
      </MemoryRouter>
    </Provider>
  );
};

const MockDetailsCloseButton = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <DetailsClose onClose={handleClose} />
      </MemoryRouter>
    </Provider>
  );
};

describe('Tests for the Detailed Card component', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    const user = userEvent.setup();
    render(<MockAppWithDetails />);

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

    const cards = screen.getAllByTestId('character-li');
    const cardCount = cards.length;
    expect(cardCount).toBe(10);

    const card = screen.getAllByTestId('character-li')[0];

    await user.click(card);

    expect(mockedNavigator).toHaveBeenCalledWith('/search/1?details=1');

    await waitFor(() => {
      const modal = screen.queryByTestId('modal');
      expect(modal).toBeInTheDocument();
    });

    await waitFor(() => {
      const detailsSpinner = screen.getByTestId('details-spinner');
      expect(detailsSpinner).toBeInTheDocument();
    });

    screen.debug();
  });

  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    render(<MockAppDetailsLuke />);

    await waitFor(() => {
      const name = screen.getByText(/Luke Skywalker/i);
      const birth_year = screen.getByText(/19BBY/i);
      const height = screen.getByText(/172/i);
      const mass = screen.getByText(/77/i);
      const gender = screen.getByText(/male/i);
      const skin_color = screen.getByText(/fair/i);
      const hair_color = screen.getByText(/blond/i);
      expect(name).toBeInTheDocument();
      expect(birth_year).toBeInTheDocument();
      expect(height).toBeInTheDocument();
      expect(mass).toBeInTheDocument();
      expect(gender).toBeInTheDocument();
      expect(skin_color).toBeInTheDocument();
      expect(hair_color).toBeInTheDocument();
    });

    screen.debug();
  });

  it('Ensure that clicking the close button hides the component', async () => {
    const user = userEvent.setup();
    const mockHandleClose = vi.fn();
    render(<MockDetailsCloseButton handleClose={mockHandleClose} />);

    const modalClose = screen.getByTestId('close-btn');

    await user.click(modalClose);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  screen.debug();

  afterEach(() => {
    vi.clearAllMocks();
  });
});
