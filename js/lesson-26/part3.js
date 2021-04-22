`use strict`;
const time = {
    hours: 20,
    minutes: 30,
    seconds: 40,
    adSeconds: function (n) {
        let sourceTime = new Date(2021, 0, 0, this.hours, this.minutes, this.seconds, 0);
        sourceTime.setSeconds(this.seconds + n);
        this.hours = sourceTime.getHours();
        this.minutes = sourceTime.getMinutes();
        this.seconds = sourceTime.getSeconds();
    },
    adMinutes: function (n) {
        let sourceTime = new Date(2021, 0, 0, this.hours, this.minutes, this.seconds, 0);
        sourceTime.setMinutes(this.minutes + n);
        this.hours = sourceTime.getHours();
        this.minutes = sourceTime.getMinutes();
        this.seconds = sourceTime.getSeconds();
    },
    adHours: function (n) {
        let sourceTime = new Date(2021, 0, 0, this.hours, this.minutes, this.seconds, 0);
        sourceTime.setHours(this.hours + n);
        this.hours = sourceTime.getHours();
        this.minutes = sourceTime.getMinutes();
        this.seconds = sourceTime.getSeconds();
    },
    display: function () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
}
// Окрема функція відображення часу
function displayTime(obj) {
    console.log(new Date(2021, 0, 0, obj.hours, obj.minutes, obj.seconds).toLocaleTimeString());
}
// Тестування функції відображення часу
displayTime(time); // окремою функцією
time.display(); // вбудованим методом

// Тестування функції додання секунд
time.adSeconds(2571);
time.display();

// Тестування функції додання хвилин
time.adMinutes(60);
time.display();

// Тестування функції додання годин
time.adHours(2);
time.display();

