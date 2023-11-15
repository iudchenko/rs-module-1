import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import AppRoutes from '../components/AppRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('App not found route', () => {
  test('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Not found./i)).toBeInTheDocument();

    // screen.debug();
  });
});
