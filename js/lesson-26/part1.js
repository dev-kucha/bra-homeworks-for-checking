`use strict`;

const vehicle = {
    manufacturer: `AUDI`,
    model: `A80`,
    yearOfManufacture: `2020`,
    averagSpeed: 50,
    powerReserve: 600,
    displayAllAbout() {
        for (let key in vehicle) {
            if (typeof vehicle[key] !== 'function') {
                console.log(`${key} : ${this[key]}`)
            }
        }
        console.table(vehicle);
    },

    getTimeToTripWithoutRest(dist) {
        return dist / this.averagSpeed;
    },

    getTimeToTrip(dist) {
        timeWithoutRest = this.getTimeToTripWithoutRest(dist);
        restTime = (timeWithoutRest % 4 !== 0) ? Math.trunc(timeWithoutRest / 4) : Math.trunc(timeWithoutRest / 4) - 1;
        return timeWithoutRest + restTime;
    },
}

vehicle.displayAllAbout(); // Функція для виводу інформації про автомобіль;

distance = 401; // Задаємо дистанцію в кілометрах

console.log(vehicle.getTimeToTripWithoutRest(distance)); // Час поїздки без зупинок

console.log(`На ${vehicle.manufacturer} ${vehicle.model} можна подолати ${distance} км приблизно за ${vehicle.getTimeToTripWithoutRest(distance)} годин(и) без зупинок на відпочинок.`); // Розгорнутий вивід про поїздку без зупинок

console.log(vehicle.getTimeToTrip(distance)); // Час поїздки з зупинками кожні 4 години
console.log(`На ${vehicle.manufacturer} ${vehicle.model} можна подолати ${distance} км приблизно за ${vehicle.getTimeToTrip(distance)} годин(и) з 60-ти хвилинними зупинками кожні 4 години.`); // Розгорнутий вивід про поїздку з зупинками
