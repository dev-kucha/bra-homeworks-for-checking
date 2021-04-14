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

function getPerfectNumbersOfRange(a, b) {
    a = Number(a);
    b = Number(b);
    if (b > 1) {
        if (a <= 1) {
            a = 1;
        }
    } else {
        return false;
    }

    for (let i = a; i <= b; i++) {
        if (checkPerfectNumber(i)) {
            console.log(i);
        }
    }
}

getPerfectNumbersOfRange(1, 10000);
getPerfectNumbersOfRange(100, -50);
getPerfectNumbersOfRange(0, 100);
getPerfectNumbersOfRange(-50, 10);