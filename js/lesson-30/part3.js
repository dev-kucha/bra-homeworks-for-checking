`use strict`;

class Employee {
    constructor(firstname, lastname, position, tabNumber) {
        this.firstname = firstname
        this.lastname = lastname
        this.position = position
        this.tabNumber = tabNumber
    }
}

class EmpTable {
    constructor(...emps) {
        this.tHeader = `<table><tbody><tr><th>Ім'я</th><th>Прізвище</th><th>Посада</th><th>Табельний номер</th></tr>`;
        this.tEmployee = emps[0];
        this.tFooter = `</tbody></table>`;
        return this;
    }
    getHtml() {
        let table = document.createElement('table');
        let tBody = ``;
        for (let key in this.tEmployee) {
            tBody += `<tr><td>${this.tEmployee[key].firstname}</td><td>${this.tEmployee[key].lastname}</td><td>${this.tEmployee[key].position}</td><td>${this.tEmployee[key].tabNumber}</td></tr>`;
        }
        this.fullTable = this.tHeader + tBody + this.tFooter;
        table.innerHTML = this.fullTable;
        document.body.append(table);
        return
    }
}

let emp1 = new Employee(`Петро`, `Петров`, `Економіст`, 1234);
console.log(emp1);
let emp2 = new Employee(`Степан`, `Степаненко`, `Головний економіст`, 2345);
console.log(emp2);
let emp3 = new Employee(`Павло`, `Павленко`, `Головний економіст - аналітик`, 3456);
console.log(emp3);
let emp4 = new Employee(`Ганна`, `Ганусенко`, `Керівник відділу`, 4567);
console.log(emp4);
let emp5 = new Employee(`Дмитро`, `Дмитренко`, `Начальник управління`, 5678);
console.log(emp5);

const arrEmployes = [emp1, emp2, emp3, emp4, emp5];
console.log(arrEmployes);

const htmlTable = new EmpTable(arrEmployes);
htmlTable.getHtml();