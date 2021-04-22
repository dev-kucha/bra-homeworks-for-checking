`use strict`;
/* Створюємо масив */
const receipt = [
    {
        name: `cucumber`,
        amount: 1,
        price: 40.40,
        sum() {
            return Math.floor(this.amount * this.price * 100) / 100;
        },
    },
    {
        name: `tomato`,
        amount: 2,
        price: 30.30,
        sum() {
            return Math.floor(this.amount * this.price * 100) / 100;
        },
    },
    {
        name: `potatoes`,
        amount: 3,
        price: 20.20,
        sum() {
            return Math.floor(this.amount * this.price * 100) / 100;
        },
    },
    {
        name: `cabbage`,
        amount: 4,
        price: 10.20,
        sum() {
            return Math.floor(this.amount * this.price * 100) / 100;
        },
    },
];

/* Друк чека */
function displayOrdered(Arr) {
    console.log(`Відаємо у нашому магазині!`);
    for (let key of Arr) {
        console.log(`${key.name} : ${key.amount} * ${key.price} = ${key.sum()}`);
    };
};

/* Обраховуємо суму чека */
displayOrdered(receipt);

function getTotal() {
    let sum = 0;
    for (let key of receipt) {
        sum += key.sum();
    }
    return sum;
}
console.log(`ЗАГАЛОМ: ${getTotal()}`);

/* Отримуємо найдорожчу покупку */
function getMostExpensive() {
    mostExp = 0;
    for (let i = 0; i < receipt.length; i++) {
        receipt[i].sum() > receipt[mostExp].sum() ? mostExp = i : mostExp = mostExp;
    }
    return receipt[mostExp];

}
let MostExpensiveItem = getMostExpensive();
console.log(`Найдорожча покупка у чеку: ${MostExpensiveItem.name} - ${MostExpensiveItem.sum()} у.о.`);

/* Обраховуємо середню вартість покупки */
function getAverageCost() {
    let sum = 0;
    for (let key of receipt) {
        sum += key.sum();
    }
    return Math.floor((sum / receipt.length) * 100) / 100;
}
let AverageCost = getAverageCost();
console.log(`Середня вартість одного товару: ${AverageCost} у.о.`);