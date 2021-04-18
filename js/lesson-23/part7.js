`use strict`;

let $oneCategoryDiscont = 0.03;
let $twoCategoryDiscont = 0.05;
let $threeCategoryDiscont = 0.07;

let $amount = prompt(`Розрахунок суми до оплати зі знижкою. Введіть початкову суму у гривнях.`);

if ($amount === `` || +$amount <= 0 || isNaN($amount)) {
    alert(`Ви впевнені? Спробуйте ще раз.`);
} else if (+$amount < 200) {
    alert(`До оплати ${+$amount} (знижки немає)`);
} else if (+$amount >= 200 && +$amount < 300) {
    alert(`До оплати ${+$amount - (+$amount * $oneCategoryDiscont)} (знижка ${$oneCategoryDiscont * 100}%)`);
    console.log(`До оплати ${+$amount - (+$amount * $oneCategoryDiscont)} (знижка ${$oneCategoryDiscont * 100}%)`);
} else if (+$amount >= 300 && +$amount < 500) {
    alert(`До оплати ${+$amount - (+$amount * $twoCategoryDiscont)} (знижка ${$twoCategoryDiscont * 100}%)`);
    console.log(`До оплати ${+$amount - (+$amount * $twoCategoryDiscont)} (знижка ${$twoCategoryDiscont * 100}%)`);
} else if (+$amount >= 500) {
    alert(`До оплати ${+$amount - (+$amount * $threeCategoryDiscont)} (знижка ${$threeCategoryDiscont * 100}%)`);
    console.log(`До оплати ${+$amount - (+$amount * $threeCategoryDiscont)} (знижка ${$threeCategoryDiscont * 100}%)`);
}
