`use strict`;

let $dayOfWeek;
let $daysCounter;
let $do = true;

while ($do) {
    for (let i = 0; i <= 6; i++) {
        switch (i) {
            case 0:
                $dayOfWeek = `Неділя`;
                break;
            case 1:
                $dayOfWeek = `Понеділок`;
                break;
            case 2:
                $dayOfWeek = `Вівторок`;
                break;
            case 3:
                $dayOfWeek = `Середа`;
                break;
            case 4:
                $dayOfWeek = `Четвер`;
                break;
            case 5:
                $dayOfWeek = `П'ятниця`;
                break;
            case 6:
                $dayOfWeek = `Субота`;
                break;
        }
        $do = confirm(`
        ** "${$dayOfWeek}" **
        Хочете побачити наступний день?`);
        if (!$do) { i = 6 }
    }
}