import React from 'react';

function FizzBuzz2() {
    
    const resultats = [];

    for (let i = 1; i <= 100; i++) {
        let chaine = '';

        if (i % 3 === 0) {
            chaine += 'Fizz';
        }
        if (i % 5 === 0) {
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
