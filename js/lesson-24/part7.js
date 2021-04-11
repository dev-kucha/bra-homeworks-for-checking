`use strict`;

let $sourceNumber = ``;
let $targetNumber = ``;
let $shift = 0;
let $length;

$sourceNumber = prompt(`Введіть число`);
if ($sourceNumber === `` || isNaN($sourceNumber)) {
    console.log(`Не прийнято! Спробуйте ще раз спочатку.`);
} else {
    console.log(`Введено число ${$sourceNumber}`);
    $length = Number($sourceNumber.length);
    $shift = +prompt(`Введіть кількість розрядів для зсуву. Вона має бути меньша за кількість розрядів введеного числа!`);
    if ($shift === `` || isNaN($shift) || $shift > $length) {
        console.log(`Не прийнято! Спробуйте ще раз спочатку.`);
    } else {
        console.log(`Зсуваємо на ${$shift} розрядів`);
        for (i = 0; i < $length - $shift; i++) {
            j = i + $shift
            $targetNumber = $targetNumber + $sourceNumber[j];
        }
        for (i = 0; i < $shift; i++) {
            $targetNumber = $targetNumber + $sourceNumber[i];
        }

        console.log(`Отримано число ${$targetNumber}`);
    }
}

