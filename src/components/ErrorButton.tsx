import React, { Component } from 'react';

interface ErrorButtonProps {}
interface ErrorButtonState {
  error: Boolean;
}

class ErrorButton extends Component<ErrorButtonProps, ErrorButtonState> {
  constructor(props: ErrorButtonProps) {
    super(props);
    this.state = { error: false };
  }

  handleClick = () => {
    try {
      // Simulate an error
      throw new Error('An error occurred');
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    if (this.state.error) {
      // This will trigger the error boundary
      throw new Error('An error occurred in the render method.');
    }

    return (
      <div className="p-5 absolute bottom-5 right-5">
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={this.handleClick}
        >
          Throw Error
        </button>
      </div>
    );
  }
}

export default ErrorButton;
