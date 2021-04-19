`use strict`;

function getTimeSeconds(h, m, s) {
    let seconds = (h * 3600) + (m * 60) + (s);
    return seconds;
}

function getTimeString(s) {
    let now = new Date(0, 0, 0, 0, 0, s);
    return now.toLocaleTimeString();
}

function getDifferenceOfTimes(h1, m1, s1, h2, m2, s2) {

    if (
        (h1 || h2 || s1 || s2 || m1 || m2) === `` ||
        isNaN((h1 || h2 || s1 || s2 || m1 || m2)) ||
        (23 < (h1 || h2)) ||
        (h1 || h2) < 0 ||
        23 < (h1 || h2) ||
        (s1 || s2 || m1 || m2) < 0 ||
        59 < (s1 || s2 || m1 || m2)
    ) {
        console.log(`Incoming data error`);
    } else {
        let time1 = new Date(0, 0, 0, h1, m1, s1);
        let time2 = new Date(0, 0, 0, h2, m2, s2);
        let difference = Math.abs(getTimeSeconds(h1, m1, s1) - getTimeSeconds(h2, m2, s2));
        console.log(difference);
        return getTimeString(difference);
    }
}

console.log(getDifferenceOfTimes(0, 0, 0, 0, 0, 0));
console.log(getDifferenceOfTimes(0, 0, 0, 0, 0, 10));
console.log(getDifferenceOfTimes(0, 0, 0, 0, 10, 0));
console.log(getDifferenceOfTimes(0, 0, 0, 10, 0, 0));
console.log(getDifferenceOfTimes(0, 0, 10, 0, 0, 0));
console.log(getDifferenceOfTimes(10, 20, 30, 40, 50, 60));
console.log(getDifferenceOfTimes(0, 0, 0, 24, 0, 0));
console.log(getDifferenceOfTimes(-1, 0, 0, 0, 0, 0));
console.log(getDifferenceOfTimes(0, 60, 0, 0, 0, 0));
console.log(getDifferenceOfTimes(0, 0, 0, 0, 0, "r"));
