`use strict`;

// введення даних та валідація
let $startNumber;
let $endNumber;

$startNumber = +prompt(`Введіть число - початок діапазону`);

if ($startNumber === `` || isNaN($startNumber)) {
    console.log(`Не прийнято! Спробуйте ще раз.`);
} else {
    console.log(`Діапазон починається з`, $startNumber);
    $endNumber = +prompt(`Введіть число - закінчення діапазону`);

    if ($endNumber === `` || isNaN($endNumber)) {
        console.log(`Не прийнято! Спробуйте ще раз.`);
    } else {
        console.log(`Діапазон закінчується на`, $endNumber);
    }
}

// розрахунок

let $sum = $startNumber;

if ($startNumber < $endNumber) {
    for (let i = $startNumber + 1; i <= $endNumber; i++) {
        $sum = $sum + i;
    }
} else if ($startNumber > $endNumber) {
    for (let i = $startNumber - 1; i >= $endNumber; i--) {
        $sum = $sum + i;
    }
} else {
    $sum = $startNumber;
}


console.log(`Сума чисел діапазону від ${$startNumber} до ${$endNumber} дорівнює ${$sum}`);