import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { MOCK_CHARACTER } from './mockData';

import DetailsCharacter from '../components/DetailsCharacter';
import DetailsModal from '../components/DetailsModal';
import Spinner from '../components/Spinner';
import DetailsClose from '../components/DetailsClose';
import Details from '../components/Details';

const MockDetailedCardLoading = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <DetailsModal>
          <Spinner />
        </DetailsModal>
      </MemoryRouter>
    </SearchProvider>
  );
};
const MockDetailedCard = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <DetailsModal>
          <DetailsCharacter details={MOCK_CHARACTER} />
        </DetailsModal>
      </MemoryRouter>
    </SearchProvider>
  );
};

const MockDetailsClose = ({ handleClose }: { handleClose: () => void }) => {
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
    render(<MockDetailedCardLoading />);

    await waitFor(() => {
      const spinner = screen.getByTestId('spinner');

      expect(spinner).toBeInTheDocument();
    });
  });

  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
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
  });

  it('Ensure that clicking the close button hides the component', () => {
    const mockHandleClose = vi.fn();
    // Render the component
    render(<MockDetailsClose handleClose={mockHandleClose} />);

    // Trigger the event (clicking the close button)
    const modalClose = screen.getByTestId('close-btn');

    fireEvent.click(modalClose);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  screen.debug();

  afterEach(() => {
    vi.clearAllMocks();
  });
});
