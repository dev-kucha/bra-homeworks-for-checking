`use strict`;

let startOfRange = 0;
let engOfRange = 100;
let win = false;

while (!win) {
    if (confirm(`Ваше число ${Math.floor(startOfRange + ((engOfRange - startOfRange) / 2))}?`)) {
        win = true;
    } else {
        if (confirm(`Ваше число < ${(Math.floor(startOfRange + (engOfRange - startOfRange) / 2))}?`)) {
            engOfRange = (engOfRange - startOfRange) / 2;
        } else {
            startOfRange = startOfRange + ((engOfRange - startOfRange) / 2);
        }
    }
    if (win) alert(`Ура!`);
}
