/* Highlight menu items by section on scroll */
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
const openModal = document.querySelector('.open-modal');
const parentElement = openModal.parentElement;
const parentHeader = parentElement.querySelector('h2');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const modalHeader = modal.querySelector('h2');


openModal.addEventListener('click', () => {
    modal.showModal();
    console.log(parentHeader);
    console.log(modalHeader);
});

closeModal.addEventListener('click', () => {
    modal.close();
});