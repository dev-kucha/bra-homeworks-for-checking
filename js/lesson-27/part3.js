`use strict`;
/* Створюємо масив */
const styles = [
    {
        name: `color`,
        value: `maroon`,
    },
    {
        name: `font-family`,
        value: `monospace`,
    },
    {
        name: `font-size`,
        value: `larger`,
    },
    {
        name: `text-decoration`,
        value: `underline`,
    },
]

let fragmentOfText = `Lorem ipsum dolor
sit amet consectetur adipisicing elit. Blanditiis qui atque magnam id quae earum ad iusto minus ipsam optio error, consequatur obcaecati officia perspiciatis magni. Doloribus tenetur nisi dolore?`;

function writeStylishText(styles, text) {
    let stylesString = `style="`
    for (let key of styles) {
        stylesString += `${key.name}: ${key.value};`;
    };
    stylesString += `"`
    console.log(stylesString);

    document.write(`<p ${stylesString}>${text}</p>`);
}

writeStylishText(styles, fragmentOfText);