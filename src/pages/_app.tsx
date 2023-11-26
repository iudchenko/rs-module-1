import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/ErrorBoundary";

const { default: AbortController } = require("abort-controller");
const { default: fetch, Headers, Request, Response } = require("node-fetch");

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

// const { wrapper } = require("../redux/store");
import { wrapper } from "../redux/store";

export function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);
