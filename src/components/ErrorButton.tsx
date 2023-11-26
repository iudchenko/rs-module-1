"use client";
import React, { useState } from "react";

function ErrorButton() {
  const [error, setError] = useState(false);
  if (error) {
    // This will trigger the error boundary
    throw new Error("An error occurred and caught by the ErrorBoundary.");
  }

  return (
    <div className="p-5 fixed bottom-5 right-5">
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => setError(true)}
      >
        Throw Error
      </button>
    </div>
  );
}

export default ErrorButton;
