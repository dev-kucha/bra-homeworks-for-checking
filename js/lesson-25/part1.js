`use strict`;

function getCompare(a, b) {
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else if (a > b) {
        return 1;
    }
}

console.log(`Результат порівняння 1 і 2:`, getCompare(1, 2));
console.log(`Результат порівняння 2 і 2:`, getCompare(2, 2));
console.log(`Результат порівняння 2 і 1:`, getCompare(2, 1));
