import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import AppRoutes from '../components/AppRoutes';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const MockApp = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>
    </Provider>
  );
};

describe('Tests for the Search component', () => {
  // Render the character
  beforeEach(() => {
    render(<MockApp />);
  });

  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
    const search = screen.getByRole('search');
    const searchInput = search.querySelector('input');
    const searchBtn = search.querySelector('button');

    fireEvent.change(searchInput as Element | Node | Document | Window, {
      target: { value: 'yoda' },
    });
    fireEvent.click(searchBtn as Element | Node | Document | Window);
    const ls = localStorage.store.searchTerm;

    expect(ls).toBe('yoda');
  });

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
    const ls = localStorage.store.searchTerm;
    expect(ls).toBe('yoda');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
