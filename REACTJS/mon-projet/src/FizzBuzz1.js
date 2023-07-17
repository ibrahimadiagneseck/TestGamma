import React from 'react';


function FizzBuzz1() {
    const resultats = [];
  
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resultats.push("FizzBuzz");
      } else if (i % 3 === 0) {
        resultats.push("Fizz");
      } else if (i % 5 === 0) {
        resultats.push("Buzz");
      } else {
        resultats.push(i);
      }
    }
  
    return (
      <div>
        <ul>
          {resultats.map((resultat, index) => (
            <li key={index}>{resultat}</li>
          ))}
        </ul>
      </div>
    );
  }
  

export default FizzBuzz1;
