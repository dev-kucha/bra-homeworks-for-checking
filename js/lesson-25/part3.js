`use strict`;

function getNumber(a, b, c) {
    return Number(String(a) + String(b) + String(c));
}

console.log(getNumber(1, 2, 3));
console.log(getNumber("4", "5", "6"));