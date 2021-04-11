`use strict`;

let $circumference = prompt(`Введіть довжину окружності`);
let $perimeterOfASquare;

if ($circumference === `` || +$circumference <= 0 || isNaN($circumference)) {
    alert(`Ви впевнені? Спробуйте ще раз.`);
} else {
    $perimeterOfASquare = prompt(`Введіть периметр квадрата`);

    if ($perimeterOfASquare === `` || +$perimeterOfASquare <= 0 || isNaN($perimeterOfASquare)) {
        alert(`Ви впевнені? Спробуйте ще раз.`);
    } else if (($circumference / Math.PI) <= ($perimeterOfASquare / 4)) {
        console.log(`Окружність довжиною ${$circumference} вміститься у квадрат з периметром ${$perimeterOfASquare}`); alert(`Окружність довжиною ${$circumference} вміститься у квадрат з периметром ${$perimeterOfASquare}`);
    } else {
        console.log(`Окружність довжиною ${$circumference} не вміститься у квадрат з периметром ${$perimeterOfASquare}`);
        alert(`Окружність довжиною ${$circumference} не вміститься у квадрат з периметром ${$perimeterOfASquare}`);

    }
}