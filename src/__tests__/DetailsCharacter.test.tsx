import {
  waitFor,
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { Mock, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { MOCK_CHARACTER, MOCK_CHARACTERS_10 } from './mockData';

import App from '../App';
import DetailsCharacter from '../components/DetailsCharacter';
import DetailsModal from '../components/DetailsModal';
import Spinner from '../components/Spinner';
import DetailsClose from '../components/DetailsClose';

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
          <Spinner />
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

describe('Detailed Card', () => {
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
      // const spinner = screen.getByTestId('spinner');

      expect(modal.textContent).toContain('Luke Skywalker');
    });
  });

  it('Ensure that clicking the close button hides the component', () => {
    const handleClose = vi.fn();
    // Render the component
    render(<MockDetailsClose handleClose={handleClose} />);

    // Trigger the event (clicking the close button)
    const modalClose = screen.getByTestId('close-btn');

    fireEvent.click(modalClose);

    expect(handleClose).toHaveBeenCalled();
  });

  screen.debug();
});
