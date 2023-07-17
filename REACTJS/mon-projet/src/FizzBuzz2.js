import React from 'react';

function FizzBuzz2() {
  const resultats = [];

  for (let i = 1; i <= 100; i++) {
    let chaine = '';

    const divisible3 = i % 3 === 0;
    const divisible5 = i % 5 === 0;
    const contient3 = String(i).includes('3');
    const contient5 = String(i).includes('5');

    if (contient3) {
      chaine += 'Fizz';
    }
    if (contient5) {
      chaine += 'Buzz';
    }
    if (divisible3) {
      chaine += 'Fizz';
    }
    if (divisible5) {
      chaine += 'Buzz';
    }

    if (chaine === '') {
      resultats.push(i);
    } else {
      resultats.push(chaine);
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

export default FizzBuzz2;
