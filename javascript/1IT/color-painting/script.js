let isMousePressed = false;

createDivs(100);
function createDivs(count) {
    const wrapper = document.getElementById('flex-container');

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');

        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = 'red';
            isMousePressed = true;
        });
        div.addEventListener('mouseup', () => {
            div.style.backgroundColor = 'yellow';
            isMousePressed = false;
        });
        div.addEventListener('mouseenter', () => {
            if (isMousePressed) {
                div.style.backgroundColor = 'blue';
            }
        });

        wrapper.appendChild(div);
    }
}



