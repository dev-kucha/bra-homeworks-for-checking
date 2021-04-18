`use strict`;

let $number = prompt(`Перевірка на "паліндромність". Введіть 5-розрядне число`);

if ($number === `` || isNaN($number) || $number.length !== 5) {
    alert(`Це не схоже 5-ти розрядне число! Спробуйте ще раз.`);
} else if ($number[0] == $number[4] && $number[1] == $number[3]) {
    alert(`Число ${$number} є паліндромом`);
    console.log(`Число ${$number} є паліндромом`);
} else {
    alert(`Число ${$number} рік не є паліндромом`);
    console.log(`Число ${$number} рік не є паліндромом`);
}
