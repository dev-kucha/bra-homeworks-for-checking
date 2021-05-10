`use strict`;

let btn = document.createElement('button');
btn.innerHTML = `Відкрити`;
btn.onclick = function () {
    alert(`Закрити`);
}
document.body.append(btn);
