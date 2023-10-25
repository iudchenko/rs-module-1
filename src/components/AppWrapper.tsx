import React, { Component } from "react";

interface AppWrapperProps {
  children: React.ReactNode;
}

export class AppWrapper extends Component<AppWrapperProps> {
  render() {
    return (
      <div className="p-5 h-full min-h-screen relative flex flex-col gap-5 w-full bg-sw-bg bg-cover bg-no-repeat bg-top">
        {this.props.children}
      </div>
    );
  }
}

export default AppWrapper;
