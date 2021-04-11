// введення даних та валідація
let $oneNumber;
let $twoNumber;
let $nsd;

$oneNumber = +prompt(`Введіть перше число`);

if ($oneNumber === `` || isNaN($oneNumber)) {
    console.log(`Не прийнято! Спробуйте ще раз.`);
} else {
    console.log(`Перше число`, $oneNumber);
    $twoNumber = +prompt(`Введіть друге число`);

    if ($twoNumber === `` || isNaN($twoNumber)) {
        console.log(`Не прийнято! Спробуйте ще раз.`);
    } else {
        console.log(`Друге число`, $twoNumber);
    }
}

// приводимо аргументи до абсолюютного значення
$oneNumber = Math.abs($oneNumber);
$twoNumber = Math.abs($twoNumber);

// обраховуємо НСД
if ($oneNumber == 0 || $twoNumber == 0) {
    console.log(`На 0 ділити не можна`);
} else if ($oneNumber > $twoNumber) {
    for (i = $twoNumber; i >= 1; i--) {
        console.log(i);
        if ($oneNumber % i == 0 && $twoNumber % i == 0) {
            $nsd = i;
            i = 1;
        }

    }
} else {
    for (i = $oneNumber; i >= 1; i--) {
        console.log(i);
        if ($twoNumber % i == 0 && $oneNumber % i == 0) {
            $nsd = i;
            i = 1;
        }
    }
    // виводимо результат
    console.log(`${$nsd} - найбільший спільний дільник чисел ${$oneNumber} та ${$twoNumber}`);
}

