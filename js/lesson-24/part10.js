`use strict`;

let startOfRange = 0;
let engOfRange = 100;
let temp;
let win = false;

while (!win) {
    temp = Math.floor(startOfRange + ((engOfRange - startOfRange) / 2))
    if (confirm(`Ваше число ${temp}?`)) {
        win = true;
    } else {
        (confirm(`Ваше число < ${temp}?`)) ? engOfRange = temp : startOfRange = temp;
    }
    if (win) alert(`Ура!`);
}


