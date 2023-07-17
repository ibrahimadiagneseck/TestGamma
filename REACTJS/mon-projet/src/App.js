import React from 'react';

import FizzBuzz1 from './FizzBuzz1';
import FizzBuzz2 from './FizzBuzz2';

import './FizzBuzz.css';

function App() {
  return (
    <div className="container">
      <div className="column">
        <h1>FizzBuzz</h1>
        <h3>Méthode 1:</h3>
        <ul className="list">
          <FizzBuzz1 />
        </ul>
      </div>

      <div className="column">
        <h1>FizzBuzz</h1>
        <h3>Méthode 2:</h3>
        <ul className="list">
          <FizzBuzz2 />
        </ul>
      </div>
    </div>
  );
}

export default App;
