`use strict`;

let $number;
let $pos = 0;
let $neg = 0;
let $zero = 0;
let $even = 0;
let $odd = 0;

for (i = 1; i <= 10; i++) {
    $number = prompt(`Введіть число`);
    if ($number === `` || isNaN($number)) {
        console.log(`Не прийнято! Спробуйте ще раз спочатку.`);
        break;
    } else {
        if (Number($number) == 0) {
            $zero += 1;
        } else {
            Number($number) > 0 ? $pos += 1 : null;
            Number($number) < 0 ? $neg += 1 : null;
            Number($number) % 2 == 0 ? $even += 1 : $odd += 1;
        }
        console.log(`${i}-е число - ${$number}, нулів - ${$zero}, додатніх - ${$pos}, від'ємних - ${$neg}, парних - ${$even}, непарних - ${$odd}`);
    }
}

console.log(`Серед введених вами чисел нулів - ${$zero}, додатніх - ${$pos}, від'ємних - ${$neg}, парних - ${$even}, непарних - ${$odd}`);
