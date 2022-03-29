// 1)
// Na nahodnou pozici vytvorte div, ktery kazde 3s zmeni barvu a svou pozici, div ma rozmery 100x100, pokud na ten div kliknu tak se vytvori dalsi div, a chova se to stejne ,takze nahodne ted meni pozici 2 divy a i svou barvu

const colors = ['orange', 'red', 'black', 'purple'];

createDiv();
// 12:49
function createDiv() {
    const divElement = document.createElement('div');
    divElement.style.width = "100px";
    divElement.style.height = "100px";
    divElement.style.position = "absolute";
    divElement.style.top = `${getRndInteger(50, 500)}px`;
    divElement.style.left = `${getRndInteger(50, 500)}px`;
    divElement.style.backgroundColor = colors[getRndInteger(0, colors.length)];

    divElement.addEventListener('click', () => {
        createDiv();
    });

    setInterval(() => {
        divElement.style.top = `${getRndInteger(50, 500)}px`;
        divElement.style.left = `${getRndInteger(50, 500)}px`;
        divElement.style.backgroundColor = colors[getRndInteger(0, colors.length)];
    }, 3000);

    document.body.appendChild(divElement);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}