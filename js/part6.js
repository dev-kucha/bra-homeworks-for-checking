`use strict`;

let $eurBid = 0.85;
let $uahBid = 27.76;
let $aznBid = 1.70;

let $usdAmount = prompt(`Конверот валют. Введіть, будь ласка, скільки USD ви хочете обміняти.`);

if ($usdAmount === `` || isNaN($usdAmount) || +$usdAmount <= 0) {
    alert(`Ви впевнені, що хочете обміняти саме цю суму? Спробуйте ще раз.`);
    console.log(`Ви впевнені, що хочете обміняти саме цю суму? Спробуйте ще раз.`);
} else {
    let $currency = prompt(`На яку валюту ви хочете обміняти USD? Для вибору введіть код валюти: EUR (євро) - "978", UAH (українська гривня) - "980", AZN (азербайджанський манат) - "944".`);

    if ($currency !== `978` && $currency !== `980` && $currency !== `944`) {
        alert(`Такий вибір валюти недоступний Спробуйте ще раз.`);
        console.log(`Такий вибір валюти недоступний Спробуйте ще раз.`);
    }
    else {
        switch ($currency) {
            case `978`:
                alert(`За ${$usdAmount} USD ви можете придбати ${+$usdAmount * $eurBid} Євро (EUR)`);
                console.log(`За ${$usdAmount} USD ви можете придбати ${+$usdAmount * $eurBid} Євро (EUR)`);
                break;
            case `980`:
                alert(`За ${$usdAmount} USD ви можете придбати ${+$usdAmount * $uahBid} українських гривень (UAH)`);
                console.log(`За ${$usdAmount} USD ви можете придбати ${+$usdAmount * $uahBid} українських гривень (UAH)`);
                break;
            case `944`:
                alert(`За ${$usdAmount} USD ви можете придбати ${+$usdAmount * $aznBid} азербайджанських манат (AZN)`);
                console.log(`За ${$usdAmount} USD ви можете придбати ${+$usdAmount * $aznBid} азербайджанських манат (AZN)`);
                break;
        }

    }
}