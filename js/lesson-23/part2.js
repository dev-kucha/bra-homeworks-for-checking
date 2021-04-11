`use strict`;

let keyNumber = prompt(`Введіть число від 0 до 9`);

switch (keyNumber) {
    case `1`:
        alert(`Клавіші ${keyNumber} відповідає символ '!'`);
        break;

    case `2`:
        alert(`Клавіші ${keyNumber} відповідає символ '@'`);
        break;

    case `3`:
        alert(`Клавіші ${keyNumber} відповідає символ '#'`);
        break;

    case `4`:
        alert(`Клавіші ${keyNumber} відповідає символ '$'`);
        break;

    case `5`:
        alert(`Клавіші ${keyNumber} відповідає символ '%'`);
        break;

    case `6`:
        alert(`Клавіші ${keyNumber} відповідає символ '^'`);
        break;

    case `7`:
        alert(`Клавіші ${keyNumber} відповідає символ '&'`);
        break;

    case `8`:
        alert(`Клавіші ${keyNumber} відповідає символ '*'`);
        break;

    case `9`:
        alert(`Клавіші ${keyNumber} відповідає символ '('`);
        break;

    case `0`:
        alert(`Клавіші ${keyNumber} відповідає символ ')'`);
        break;
    default:
        alert(`Спробуйте ще`);
        break;
}