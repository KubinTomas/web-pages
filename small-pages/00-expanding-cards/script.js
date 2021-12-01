const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {

    openLastActivePanel(panel, index);

    panel.addEventListener('click', () => {
        removeActiveClasses();

        localStorage.setItem('panelIndex', index);

        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function openLastActivePanel(panel, index) {
    const panelIndex = localStorage.getItem('panelIndex');

    if (!panelIndex) {
        panelIndex = 0;
    }

    if (Number(panelIndex) === index) {
        panel.classList.add('active');
    }
}
