import Character from '../components/Character';
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
  test,
  vi,
} from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { ICharacter } from '../types/types';
import DetailsCharacter from '../components/DetailsCharacter';
import DetailsModal from '../components/DetailsModal';
import { MOCK_CHARACTERS_1 } from './mockData';
import { useParams, useSearchParams } from 'react-router-dom';

import App from '../App';
import { mockUseSearchParams } from '../__mocks__/react-router-dom';

const MockApp = () => {
  return (
    <SearchProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </SearchProvider>
  );
};

describe('Character', () => {
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_CHARACTERS_1),
      })
    ) as Mock;
  });

  // beforeAll(() => {
  //   vi.spyOn(URLSearchParams.prototype, 'get').mockImplementation(
  //     (details) => '0'
  //   );
  // });

  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Ensure that the card component renders the relevant card data', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
  });

  // it('Validate that clicking on a card opens a detailed card component', async () => {
  //   // vi.mocked(useSearchParams).mockReturnValue({ details: '0' });
  //   await waitFor(() => {
  //     const card = screen.getByTestId('character-li');
  //     // console.log(card);

  //     fireEvent.click(card);
  //   });
  //   // Check the updated URL search parameters
  //   const searchParams = new URLSearchParams(window.location.search);
  //   expect(searchParams.get('details')).toBe('1');
  //   console.log(searchParams.get('details'));

  //   screen.debug();
  //   screen.debug();
  //   screen.debug();
  //   screen.debug();

  // });

  // it('Check that clicking triggers an additional API call to fetch detailed information', async () => {
  //   const card = screen.getAllByRole('listitem')[0];

  //   fireEvent.click(card);

  //   // const modal = screen.getByTestId('modal');

  //   // expect(modal).toBeInTheDocument();

  //   // Wait for the API call to resolve
  //   // const luke_height = await screen.findByText('172');
  //   // const luke_height = await screen.findByText('172');

  //   // expect(luke_height).toBeInTheDocument();

  //   // Assert that the API was called with the expected URL
  //   await waitFor(() => {
  //     // Assert that the API was called with the expected URL
  //     // expect(global.fetch).toHaveBeenCalled();
  //     expect(global.fetch).toHaveBeenCalledWith(
  //       'https://swapi.dev/api/people/1'
  //     );
  //   });

  //   //  Clean up the mock
  //   screen.debug();
  // });
});
