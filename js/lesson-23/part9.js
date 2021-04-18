`use strict`;

let $rate = 0;

$answer1 = prompt(`Скільки буде 2 + 2 ? Варіанти відповідей: "2", "4", "6"`);
$answer1 == `4` ? $rate += 2 : alert(`Невірно`);
console.log($rate);
$answer2 = prompt(`Скільки буде 2 х 2 ? Варіанти відповідей: "2", "4", "6"`);
$answer2 == `4` ? $rate += 2 : alert(`Невірно`);
console.log($rate);
$answer3 = prompt(`Скільки буде 2 / 2 ? Варіанти відповідей: "1", "2", "4"`);
$answer3 == `1` ? $rate += 2 : alert(`Невірно`);
console.log($rate);
alert(`Ви набрали ${$rate} бали(ів)`);
console.log(`Ви набрали ${$rate} бали(ів)`);



