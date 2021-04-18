// введення даних та валідація
let $number;

$number = Math.abs(+prompt(`Введіть додатне число`));

if ($number === `` || isNaN($number)) {
    console.log(`Не прийнято! Спробуйте ще раз.`);
} else {
    for (i = $number; i >= 1; i--) {
        if ($number % i == 0) {
            console.log(`${$number} без залишку ділиться на ${i}`)
        }
    }
}
