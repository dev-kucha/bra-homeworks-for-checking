`use strict`;

function checkPerfectNumber(x) {
    x = Number(x)
    if (x <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < x; i++) {
        if (x % i == 0) {
            sum += i;
        }
    }
    return (x == sum);
}

console.log(`-6 Досконале число? - `, checkPerfectNumber(-6));

console.log(`-1 Досконале число? - `, checkPerfectNumber(-1));

console.log(`0 Досконале число? - `, checkPerfectNumber(0));

console.log(`6 Досконале число? - `, checkPerfectNumber(6));

console.log(`15 Досконале число? - `, checkPerfectNumber(15));

console.log(`28 Досконале число? - `, checkPerfectNumber(28));

console.log(`496 Досконале число? - `, checkPerfectNumber(496));

console.log(`8128 Досконале число? - `, checkPerfectNumber(8128));

console.log(`33550336 Досконале число? - `, checkPerfectNumber(33550336));

