`use strict`;

function getTimeString(s) {
    let now = new Date(0, 0, 0, 0, 0, s);
    return now.toLocaleTimeString();
}

console.log(getTimeString(0));
console.log(getTimeString(1));
console.log(getTimeString(70));
console.log(getTimeString(3600));
console.log(getTimeString(3661));
