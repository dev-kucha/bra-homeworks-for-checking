`use strict`;
/* Створюємо масив */
const audience = [
    {
        name: `Great physical`,
        numberOfSeats: 20,
        faculty: `physical`,
    },
    {
        name: `Great chemical`,
        numberOfSeats: 20,
        faculty: `chemical`,
    },
    {
        name: `Small physical`,
        numberOfSeats: 15,
        faculty: `physical`,
    },
    {
        name: `Small chemical`,
        numberOfSeats: 15,
        faculty: `chemical`,
    },
    {
        name: `Cybernetic classroom`,
        numberOfSeats: 15,
        faculty: `cybernetic`,
    },
    {
        name: `Computer class`,
        numberOfSeats: 10,
        faculty: `cybernetic`,
    },
];
console.log(audience);

/* Вивід усіх аудиторій */
function displayAudience(audience) {
    console.log(`У нас є такі аудиторії:`);
    for (let key of audience) {
        console.log(`Назва: ${key.name}, Кількість місць: ${key.numberOfSeats}, Власник - факультет ${key.faculty}`);
    };
};

displayAudience(audience);

/* Вивід аудиторій для певного факультету */
function displayAudienceForFaculty(audience, faculty) {
    console.log(`Для факультету ${faculty} доступні такі аудиторії:`);
    for (let key of audience) {
        key.faculty == faculty && console.log(`Назва: ${key.name}, Кількість місць: ${key.numberOfSeats}, Власник - факультет ${key.faculty}`);
    };
};

displayAudienceForFaculty(audience, `physical`)

/* Вивід аудиторій, що задовольняють умовам */
let group = {
    name: `PK-32`,
    numberOfStudents: 16,
    faculty: `physical`,
}

function displayAudienceForGroup(audience, group) {
    console.log(`Група ${group.name} може зайняти одну з таких аудиторій:`);
    for (let key of audience) {
        (key.faculty == group.faculty) && (key.numberOfSeats >= group.numberOfStudents) && console.log(`Назва: ${key.name}, Кількість місць: ${key.numberOfSeats}, Власник - факультет ${key.faculty}`);
    };
};
displayAudienceForGroup(audience, group);

/* Сортування аудиторій по назві */
function copySortedByName(audience) {
    return audience.slice().sort((a, b) => a.name > b.name ? 1 : -1);
}

let sortedByName = copySortedByName(audience);
displayAudience(sortedByName);

/* Сортування аудиторій по кількості місць */
function copySortedByNumberOfSeats(audience) {
    return audience.slice().sort((a, b) => a.numberOfSeats > b.numberOfSeats ? -1 : 1);
}

let sortedByNumberOfSeats = copySortedByNumberOfSeats(audience);
displayAudience(sortedByNumberOfSeats);

