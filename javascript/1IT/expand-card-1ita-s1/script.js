const divElement = document.createElement('div');
divElement.style.accentColor
alert(window.innerWidth);
divElement.id = 'mojeID';
// divElement.style.accentColor

const cards = [
    {
        title: 'Apple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa laboriosam cum dicta omnis suscipit iusto quod sit exercitationem sequi soluta iste corrupti, est, officiis doloremque dolorem placeat ducimus reiciendis rerum.'
    },
    {
        title: 'Orange',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa laboriosam cum dicta omnis suscipit iusto quod sit exercitationem sequi soluta iste corrupti, est, officiis doloremque dolorem placeat ducimus reiciendis rerum.'
    }
];

cards.forEach(c => {
    const wrapperElement = document.createElement('div');

    wrapperElement.style.border = '1px solid purple';
    wrapperElement.style.width = '400px';
    wrapperElement.style.padding = '15px';
    wrapperElement.style.marginTop = '20px';

    const titleElement = document.createElement('h2');
    titleElement.innerHTML = c.title;

    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = '+';
    buttonElement.style.float = 'right';

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = c.description;
    descriptionElement.style.display = 'none';

    wrapperElement.appendChild(buttonElement);
    wrapperElement.appendChild(titleElement);
    wrapperElement.appendChild(descriptionElement);

    document.body.appendChild(wrapperElement);

    buttonElement.addEventListener('click', () => {
        buttonElement.innerHTML = buttonElement.innerHTML === '+' ? '-' : '+';
        descriptionElement.style.display = buttonElement.innerHTML === '+' ? 'none' : 'initial';
    });
});
