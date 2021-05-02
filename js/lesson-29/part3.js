`use strict`;

let frame = document.querySelector(`.frame`);
let activeZone = frame.lastElementChild;

activeZone.onmousedown = function (event) {
    event.preventDefault();
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    mouseStartPositionX = event.pageX;
    mouseStartPositionY = event.pageY;

    function onMouseMove(event) {
        frame.style.width = ((mouseStartPositionX - frame.offsetLeft) + (event.pageX - mouseStartPositionX)) + 'px';
        frame.style.height = ((mouseStartPositionY - frame.offsetTop) + (event.pageY - mouseStartPositionY)) + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

}

