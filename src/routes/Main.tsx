import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <li>
        <Link to="/uncontrolled">Uncontrolled Form</Link>
      </li>
      <li>
        <Link to="/hook-form">Hook Form</Link>
      </li>
    </div>
  );
};

export default Main;
