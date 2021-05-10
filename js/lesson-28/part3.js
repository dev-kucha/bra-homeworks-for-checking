`use strict`;

let signalR = document.createElement('div');
let signalY = document.createElement('div');
let signalG = document.createElement('div');

signalR.className = `signal`;
signalY.className = `signal`;
signalG.className = `signal`;

let cssText = `
    width: 40px;
    height: 40px;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
    border-top-width: 5px;
    background-color: gray;
     `;

document.body.append(signalR);
document.body.append(signalY);
document.body.append(signalG);

let allSignals = document.querySelectorAll('.signal');

allSignals.forEach(element => {
    element.style.cssText = cssText;
});

let btn = document.createElement('button');
btn.innerHTML = `Наступний сигнал`;
btn.style.marginTop = `30px`
document.body.append(btn);
let cycle = 1;
btn.onclick = function () {
    cycle >= 4 ? cycle = 1 : cycle += 1;

    switch (cycle) {
        case 1:
            setLightR()
            break;

        case 2:
            setLightY()
            break;

        case 3:
            setLightG()
            break;

        case 4:
            setLightY()
            break;

        default:
            setLightY()
            break;
    }
}

function setLightR() {
    signalR.style.backgroundColor = `red`;
    signalY.style.backgroundColor = `gray`;
    signalG.style.backgroundColor = `gray`;
}
function setLightY() {
    signalR.style.backgroundColor = `gray`;
    signalY.style.backgroundColor = `yellow`;
    signalG.style.backgroundColor = `gray`;
}
function setLightG() {
    signalR.style.backgroundColor = `gray`;
    signalY.style.backgroundColor = `gray`;
    signalG.style.backgroundColor = `green`;
}
