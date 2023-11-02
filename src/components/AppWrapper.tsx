import React from 'react';

interface IAppWrapperProps {
  children: React.ReactNode;
}

function AppWrapper({ children }: IAppWrapperProps) {
  return (
    <div className="p-5 h-full min-h-screen relative flex flex-col gap-5 w-full bg-sw-bg bg-cover bg-no-repeat bg-top">
      {children}
    </div>
  );
}

export default AppWrapper;
