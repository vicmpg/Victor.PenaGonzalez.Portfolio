let sections = document.querySelectorAll('section');
let menuItems = document.querySelectorAll('.navigation-list__item');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            menuItems.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navigation-list__item[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

/* Modals */
const openModals = document.querySelectorAll('.open-modal');
const closeModal = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.modal');

// "More" button open dialog + if statement gleich anfang --> welche openModal // oder extra function // extra const?
openModals.forEach((button, i) => {
    button.addEventListener('click', () => {
        modals[i].showModal();
    });
});

// "Close" button closes modal
closeModal.forEach((button, i) => {
    button.addEventListener('click', () => {
        modals[i].close();
    })
});