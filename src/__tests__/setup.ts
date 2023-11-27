import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/vitest";

import { server } from "./server";
import LocalStorageMock from "../__mocks__/localStorage";

beforeAll(() => {
  server.listen();
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

Object.defineProperty(window, "localStorage", {
  value: new LocalStorageMock(),
});
