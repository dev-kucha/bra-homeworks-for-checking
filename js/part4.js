`use strict`;

let $year = prompt(`Перевірка на "високосність". Який рік вас цікавить?`);

if ($year === `` || isNaN($year)) {
    alert(`Це не схоже на рік! Спробуйте ще раз.`);
} else if ((+$year % 400 == 0) || +$year % 4 == 0 && +$year % 100 !== 0) {
    alert(`${$year} рік є високосним`);
    console.log(`${$year} рік є високосним`);
} else {
    alert(`${$year} рік не є високосним`);
    console.log(`${$year} рік не є високосним`);
}
