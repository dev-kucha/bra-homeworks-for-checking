`use strict`;

let age = prompt(`Скільки вам років?`);

if (age === `` || age <= 0 || isNaN(age)) {
    alert(`Ви впевнені? Зазвичай, так не буває!`);
} else if (age <= 12) {
    alert(`Вам ${age} років. Ви ще дитина.`)
} else if (age >= 60) {
    alert(`Вам ${age} років. Напевно, ви пенсіонер.`)
} else alert(`Вам ${age} років. Ви доросла людина.`);