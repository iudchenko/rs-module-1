import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { Mock, afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { MOCK_CHARACTER } from './mockData';

import DetailsClose from '../components/DetailsClose';
import Details from '../components/Details';

const MockDetailedCard = () => {
  return (
    <SearchProvider>
      <MemoryRouter initialEntries={['/search/1?details=1']}>
        <Details />
      </MemoryRouter>
    </SearchProvider>
  );
};

const MockDetailsCloseButton = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <DetailsClose onClose={handleClose} />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('Tests for the Detailed Card component', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    render(<MockDetailedCard />);

    await waitFor(() => {
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toBeInTheDocument();
    });
  });

  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_CHARACTER),
      })
    ) as Mock;

    render(<MockDetailedCard />);

    await waitFor(() => {
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();

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
    const mockHandleClose = vi.fn();
    render(<MockDetailsCloseButton handleClose={mockHandleClose} />);

    const modalClose = screen.getByTestId('close-btn');

    act(() => {
      fireEvent.click(modalClose);
    });

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  screen.debug();

  afterEach(() => {
    vi.clearAllMocks();
  });
});
