`use strict`;

function calcAreaOfRectangle(a, b) {
    return Number(a) * Number(b || a);
}

console.log(calcAreaOfRectangle(10, 20));
console.log(calcAreaOfRectangle("30", "40"));
console.log(calcAreaOfRectangle(50));
console.log(calcAreaOfRectangle("60"));