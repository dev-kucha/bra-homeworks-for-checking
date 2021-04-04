`use strict`;

let $3_digitNumber = prompt(`Введіть тризначне число`);

if ($3_digitNumber === `` || isNaN($3_digitNumber) || $3_digitNumber.length !== 3) {
    alert(`Це не тризначне число! Спробуйте ще раз.`);
} else if ($3_digitNumber[0] == $3_digitNumber[1] || $3_digitNumber[0] == $3_digitNumber[2] || $3_digitNumber[1] == $3_digitNumber[2]) {
    alert(`У вашому числі ${$3_digitNumber} є однакові цифри`);
    console.log(`У вашому числі ${$3_digitNumber} є однакові цифри`);
} else {
    alert(`У вашому числі ${$3_digitNumber} немає однакових цифр`);
    console.log(`У вашому числі ${$3_digitNumber} немає однакових цифр`);
}
