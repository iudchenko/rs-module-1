import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { server } from './server';

beforeAll(() => server.listen());

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

// Mock local storage
class LocalStorageMock {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}

Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock(),
});
