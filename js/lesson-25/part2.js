`use strict`;

function getFactorial(x) {
    let $result = 1;
    for (let i = 1; i <= x; i++) {
        $result *= i;
    }
    return $result;
}

$Number = prompt(`Введіть ціле додатне число для обчисленя його факторіалу`);
if ($Number === `` || isNaN($Number) || $Number % 1 !== 0 || $Number <= 0) {
    console.log(`Не прийнято! Спробуйте ще раз спочатку.`);
} else {

    console.log(`Факторіал ${$Number} дорівнює ${getFactorial($Number)}`);
}