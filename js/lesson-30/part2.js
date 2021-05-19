`use strict`;
// створимо клас
class Marker {
    constructor(color) {
        this.color = color;
    }
    value = 0.25;
    print(string) {
        let text = document.createElement('p');
        text.style.color = this.color;
        let lengthPrev = Math.round(this.value / 0.05);
        let stringPrev = string.substr(0, lengthPrev);
        length = lengthPrev + (stringPrev.split(' ').length - 1)
        text.innerHTML = string.substr(0, length);
        document.body.append(text);
    }
}
// додамо клас-наслідник з методом заправки маркера
class RefuelingMarker extends Marker {
    refuel(value) {
        this.value = value;
    }
}

marker = new Marker(`purple`);
marker.print(`some text`);

marker2 = new RefuelingMarker(`green`);
marker2.refuel(0.70);
marker2.print(`another some text`);