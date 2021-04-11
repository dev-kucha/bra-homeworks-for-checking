// введення даних та валідація
let $number;
let $length;

$number = prompt(`Введіть число`);

if ($number === `` || isNaN($number)) {
    console.log(`Не прийнято! Спробуйте ще раз.`);
} else {
    Number($number) > 0 ? $length = $number.length : $length = $number.length - 1;

    console.log($number);
    console.log($length);
    console.log(`У числі ${$number} ${$length} цифр`);
}
