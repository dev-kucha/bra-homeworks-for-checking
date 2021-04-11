`use strict`;

// визначення змінних
let $day;
let $month;
let $year;

// введення початкових даних та попередня валідація
$year = prompt(`Введіть рік`, 2021);
console.log($year);
if ($year === `` || +$year <= 0 || isNaN($year) || $year.length !== 4) {
    $year = 2021;
    alert(`Ви впевнені? Спробуйте ще раз.`);
} else {
    $month = prompt(`Введіть номер місяця`, 10);
    console.log($month);
    if ($month === `` || +$month <= 0 || +$month > 12 || isNaN($month)) {
        $month = 10;
        alert(`Такого місяця небуває! Спробуйте ще раз.`);
    } else {
        $day = prompt(`Введіть день`, 28);
        console.log($day);
        if ($day === `` || isNaN($day) || +$day <= 0 || (+$day > 31) || ((+$day > 29) && (+$month == 2)) || ((+$day > 30) && (+$month !== 1 && +$month !== 3 && +$month !== 5 && +$month !== 7 && +$month !== 8 && +$month !== 10 && +$month !== 12)) || ((+$day > 28) && (+$month == 2) && !((+$year % 400 == 0) || (+$year % 4 == 0 && +$year % 100 !== 0)))) {
            $day = 28;
            alert(`Такого дня в календарі немає! Спробуйте ще раз.`);
        } else {
            console.log(`введено дату ${$day}.${$month}.${$year}`);
        }
    }
}

// перетворення на цифри
$day = Number($day);
$month = Number($month);
$year = Number($year);

// проміжковий контроль
console.log(`введено дату ${$day}.${$month}.${$year}`);

// основний розрахунок 
switch ($day) {
    case (31):
        if ($month !== 12) {
            $day = 1;
            $month += 1;
        } else {
            $day = 1;
            $month = 1;
            $year += 1;
        }
        break;
    case (30):
        if ($month == 1 || $month == 3 || $month == 5 || $month == 7 || $month == 8 || $month == 10 || $month == 12) {
            $day += 1;
        } else {
            $day = 1;
            $month += 1;
        }
        break;
    case (29):
        if ($month == 2 && (($year % 400 == 0) || $year % 4 == 0 && $year % 100 !== 0)) {
            $day = 1;
            $month += 1;
        }
        break;
    case (28):
        if ($month == 2 && (($year % 400 == 0) || $year % 4 == 0 && $year % 100 !== 0)) {
            $day += 1;
        } else if ($month == 2) {
            $day = 1;
            $month += 1;
        } else {
            $day += 1;
        }
        break;
    default:
        $day += 1;
}

// фінальний вивід результату
console.log(`Наступна дата ${$day}.${$month}.${$year}`);