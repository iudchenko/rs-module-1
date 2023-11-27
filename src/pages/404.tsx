import React from "react";
function NotFound() {
  return (
    <div
      data-testid="not-found"
      className="w-full h-screen bg-sw-bg bg-cover bg-no-repeat bg-top"
    >
      <div className="p-5 max-w-3xl mx-auto">
        <p className="text-white">404 Not Found.</p>
      </div>
    </div>
  );
}

export default NotFound;
