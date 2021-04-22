`use strict`;
/* Створюємо масив */
const shoppingList = [
    {
        name: `cucumber`,
        amount: 1,
        bought: true,
    },
    {
        name: `tomato`,
        amount: 2,
        bought: false,
    },
    {
        name: `potatoes`,
        amount: 3,
        bought: true,
    },
    {
        name: `cabbage`,
        amount: 4,
        bought: false,
    }
];
/* Пробуємо різні способи виводу */
console.log(shoppingList);
console.log(shoppingList.length);
console.log(shoppingList[0]);
console.log(shoppingList[1].name);
console.log(shoppingList[2].amount);
console.log(shoppingList[3].bought);
/* Додаємо новий елемент масиву */
let newVegetable = { name: `carrot`, amount: 5, bought: true };
shoppingList.push(newVegetable);
console.log(shoppingList.length);
console.log(shoppingList[4]);
console.log(shoppingList);
/* Тестуємо різні цикли */
for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}
for (let key of shoppingList) {
    console.log(key.name);
}
for (let key in shoppingList) {
    console.log(shoppingList[key].amount);
}
/* Вивід спочатку некуплених потім куплених */
function displayOrdered() {
    console.log(`Ще не придбано:`);
    for (let key of shoppingList) {
        key.bought || console.log(`${key.name} : ${key.amount}`);
    };
    console.log(`Вже придбано:`);
    for (let key of shoppingList) {
        key.bought && console.log(`${key.name} : ${key.amount}`);
    };
};
displayOrdered();

/* Додання покупки у список */
let beet = {
    // нове найменування
    name: `beet`,
    amount: 6,
    bought: false,
};
let cucumber = {
    // така, що вже існує
    name: `cucumber`,
    amount: 4,
    bought: false,
};

function addItemToList(obj) {
    let find = shoppingList.find(item => item.name == obj.name) || false;
    find == false ? shoppingList.push(obj) : find.amount += obj.amount, find.bought = false;
    console.log(`Додали ${obj.amount} ${obj.name} `);
    displayOrdered();

};
addItemToList(cucumber); // додаємо присутню у списку покупку
addItemToList(beet); // додаємо нову покупку

console.log(shoppingList);

/* Додання інформації про купівлю */
function markToBought(name) {
    let find = shoppingList.find(item => item.name == name) || false;
    find == false ? alert(`Цього немає у списку!`) : find.bought = true;
    console.log(`Купили ${name}`);
    displayOrdered();
}

markToBought(`cucumber`);
markToBought(`tomato`);
markToBought(`cabbage`);
markToBought(`beet`);