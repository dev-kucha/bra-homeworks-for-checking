`use strict`;

let $do = true;
let $number1;
let $number2;
let $action;
let $result;

while ($do) {
    $number1 = prompt(`Введіть перше число`);
    if ($number1 === `` || isNaN($number1)) {
        console.log(`Не прийнято! Спробуйте ще раз спочатку.`);
        break;
    } else {
        console.log(`Перший операнд ${$number1}`);
        $number2 = prompt(`Введіть друге число`);
        if ($number2 === `` || isNaN($number2)) {
            console.log(`Не прийнято! Спробуйте ще раз спочатку.`);
            break;
        } else {
            console.log(`Другий операнд ${$number2}`);
            $action = prompt(`Введіть дію ("+" - додати, "-" - відняти, "*" - помножити, "/" - розділити)`);
            console.log(`Дія ${$action}`);

            switch ($action) {
                case `+`:
                    $result = +$number1 + +$number2;
                    console.log(`${$number1} + ${$number2} = ${$result}`);
                    break;
                case `-`:
                    $result = +$number1 - +$number2;
                    console.log(`${$number1} - ${$number2} = ${$result}`);
                    break;
                case `*`:
                    $result = +$number1 * +$number2;
                    console.log(`${$number1} * ${$number2} = ${$result}`);
                    break;
                case `/`:
                    $result = +$number1 / +$number2;
                    console.log(`${$number1} / ${$number2} = ${$result}`);
                    break;
                default:
                    console.log(`Неочікувана дія`);
                    break;
            }
        }
    }
    $do = confirm(`Порахуємо ще?`);
}