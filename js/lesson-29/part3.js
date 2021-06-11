`use strict`;

let frame = document.querySelector(`.frame`);
let activeZone = frame.lastElementChild;

activeZone.onpointerdown = function (event) {
    event.preventDefault();
    document.addEventListener('pointermove', onMouseMove);
    document.addEventListener('pointerup', onMouseUp);

    mouseStartPositionX = event.pageX;
    mouseStartPositionY = event.pageY;

    function onMouseMove(event) {
        frame.style.width = ((mouseStartPositionX - frame.offsetLeft) + (event.pageX - mouseStartPositionX)) + 'px';
        frame.style.height = ((mouseStartPositionY - frame.offsetTop) + (event.pageY - mouseStartPositionY)) + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('pointerup', onMouseUp);
        document.removeEventListener('pointermove', onMouseMove);
    }

}

