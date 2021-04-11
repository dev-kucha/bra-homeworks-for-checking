`use strict`;

function getTimeSeconds(h, m, s) {
    let seconds = (h * 3600) + (m * 60) + (s);
    return seconds;
}

console.log(getTimeSeconds(0, 0, 0));
console.log(getTimeSeconds(0, 0, 1));
console.log(getTimeSeconds(0, 1, 0));
console.log(getTimeSeconds(1, 0, 0));
console.log(getTimeSeconds(1, 1, 1));
