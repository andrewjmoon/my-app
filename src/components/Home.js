import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1> Home Page</h1>
      <Link className="Link" to="/placeholder">
        <h2>Placeholder</h2>
      </Link>
    </div>
  );
};