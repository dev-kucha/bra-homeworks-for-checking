`use strict`;

function showTime(h, m = '00', s = '00') {
    let now = new Date(0, 0, 0, h, m, s);
    console.log(now.toLocaleTimeString());
}

console.log(showTime(1, 2, 3));
console.log(showTime(10, 20, 30));
console.log(showTime(28, 70, 95));
console.log(showTime(30, 90));
console.log(showTime(56));