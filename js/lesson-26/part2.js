`use strict`;
// Функція-конструктор створення об'єкта-дробу
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

// Функція отримання найбільшого спільного дільника
function getNsd($oneNumber, $twoNumber) {
    $oneNumber = Math.abs($oneNumber);
    $twoNumber = Math.abs($twoNumber);
    if ($oneNumber == 0 || $twoNumber == 0) {
        $nsd = 1;
    } else if ($oneNumber > $twoNumber) {
        for (i = $twoNumber; i >= 1; i--) {
            //console.log(i);
            if ($oneNumber % i == 0 && $twoNumber % i == 0) {
                $nsd = i;
                i = 1;
            }
        }
    } else {
        for (i = $oneNumber; i >= 1; i--) {
            //console.log(i);
            if ($twoNumber % i == 0 && $oneNumber % i == 0) {
                $nsd = i;
                i = 1;
            }
        }
    }
    return $nsd;
}
// Функція додання дробів
function getComposition(obj1, obj2) {
    let a = obj1.numerator;
    let b = obj1.denominator;
    let c = obj2.numerator;
    let d = obj2.denominator;
    if (b == d) {
        return getReduction(new Fraction((a + c), b));
    } else {
        return getReduction(new Fraction((a * d + c * b), (b * d)));
    }
}
// Функція віднімання дробів
function getDifference(obj1, obj2) {
    let a = obj1.numerator;
    let b = obj1.denominator;
    let c = obj2.numerator;
    let d = obj2.denominator;
    if (b == d) {
        return getReduction(new Fraction((a - c), b));
    } else {
        return getReduction(new Fraction((a * d - c * b), (b * d)));
    }
}
// Функція множення дробів
function getMultiplication(obj1, obj2) {
    let a = obj1.numerator;
    let b = obj1.denominator;
    let c = obj2.numerator;
    let d = obj2.denominator;
    return getReduction(new Fraction((a * c), (b * d)));
}
// Функція ділення дробів
function getDivision(obj1, obj2) {
    let a = obj1.numerator;
    let b = obj1.denominator;
    let c = obj2.numerator;
    let d = obj2.denominator;
    return getReduction(new Fraction((a * d), (b * c)));
}
// Функція скорочення дробів
function getReduction(obj) {
    let a = obj.numerator;
    let b = obj.denominator;
    nsd = getNsd(a, b);
    return new Fraction((a / nsd), (b / nsd));
}

//Створення дробів за допомогою функції-конструктора
let fraction1 = new Fraction(10, -20); // створимо перший об'єкт - дріб
console.log(fraction1);

let fraction2 = new Fraction(-2, 40); // створимо другий об'єкт - дріб
console.log(fraction2);


// Перевірки

let nsd = getNsd(25, 10);
console.log(`НСД 25 та 10 - ${nsd}`); // перевіряємо функцію отримання найбільшого спільного дільника

let fraction3 = getComposition(fraction1, fraction2);
console.log(fraction3); // Перевіряємо функцію додання дробів

let fraction4 = getDifference(fraction1, fraction2);
console.log(fraction4); // Перевіряємо функцію віднімання дробів

let fraction5 = getMultiplication(fraction1, fraction2);
console.log(fraction5); // Перевіряємо функцію множення дробів

let fraction6 = getDivision(fraction1, fraction2);
console.log(fraction6); // Перевіряємо функцію ділення дробів

let fraction7 = getReduction(fraction3);
console.log(fraction7); // Перевіряємо функцію скорочення дробу

