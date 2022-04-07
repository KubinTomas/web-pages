const cards = [
    {
        title: 'Apple',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatem provident itaque aperiam illo, enim labore. Ut molestias tenetur, rerum recusandae ipsam ea, repellat similique maiores amet, quaerat illo voluptatem.'
    },
    {
        title: 'Orange',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatem provident itaque aperiam illo, enim labore. Ut molestias tenetur, rerum recusandae ipsam ea, repellat similique maiores amet, quaerat illo voluptatem.'
    }
];

cards.forEach(c => {
    const wrapperElement = document.createElement('div');
    wrapperElement.style.width = '400px';
    wrapperElement.style.border = '1px solid purple';
    wrapperElement.style.marginTop = '20px';
    wrapperElement.style.padding = '15px';

    const titleElement = document.createElement('h2');
    titleElement.innerHTML = c.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = c.description;
    descriptionElement.style.display = 'none';
    // descriptionElement.style.opacity = '0';

    const expandBtnElement = document.createElement('button');
    expandBtnElement.innerHTML = '+';
    expandBtnElement.style.float = 'right';

    wrapperElement.appendChild(expandBtnElement);
    wrapperElement.appendChild(titleElement);
    wrapperElement.appendChild(descriptionElement);
    document.body.appendChild(wrapperElement);

    expandBtnElement.addEventListener('click', () => {
        expandBtnElement.innerHTML = expandBtnElement.innerHTML === '+' ? '-' : '+';
        descriptionElement.style.display = expandBtnElement.innerHTML === '+' ? 'none' : 'initial';
    });
});

// span -> inline  -> none -> inline
// div -> block    -> none -> block
