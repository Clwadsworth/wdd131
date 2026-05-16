// all of our elemtents we need for the JS
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// toggle for the menu button to open/close
menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// opening the gallery image when selected
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        modalImage.alt = e.target.alt;
        modal.showModal();
    }
});

// closing the modal with a 'X' button
closeButton.addEventListener('click', () => {
    modal.close();
});

// closing the image by selecting off of it in open space
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});