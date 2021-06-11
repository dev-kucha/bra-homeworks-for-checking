`use strict`;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    get r() { //get-властивість, що повертає радіус
        return this.radius;
    }
    get d() { //get-властивість, що повертає діаметр
        return this.radius * 2;
    }
    set r(radius) { //set-властивість, що встановлює радіус
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(10); // створимо новий об'єкт
console.log(circle); // перевіримо об'єкт
//circle.setRadius(15);
//console.log(circle);
console.log('Радіус:', circle.radius); // перевіримо радіус
circle.r = 20; // встановимо новий радіус
console.log('Новий радіус:', circle.r); // отримаємо новий радіус
console.log('Діаметр:', circle.d); // отримаємо діаметр
console.log('Площа круга:', circle.area()); // отримаємо площу круга
console.log('Довжина окружності:', circle.circumference()); // отримаємо довжину окружності
