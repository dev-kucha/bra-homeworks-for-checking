`use strict`;

let readedText = document.createElement('div');
let editedText = document.createElement('textarea');

document.addEventListener("keydown", toEdit);
editedText.addEventListener("keydown", toRead);

readedText.innerHTML = `Натисніть Ctrl + E для редагування цього тексту. По завершенні натисніть Ctrl + R`;

document.body.append(readedText);

function toEdit(event) {
    console.log(event);
    if ((event.ctrlKey || event.metaKey) && event.code == `KeyE`) {
        event.preventDefault()
        editedText.value = readedText.innerHTML;
        readedText.remove();
        document.body.append(editedText);
    }
}

function toRead(event) {
    console.log(event);
    if ((event.ctrlKey || event.metaKey) && event.code == `KeyR`) {
        event.preventDefault()
        readedText.innerHTML = editedText.value;
        editedText.remove();
        document.body.append(readedText);
    }
}
