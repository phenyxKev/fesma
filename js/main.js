/* DOM ELEMENTS SELECTOR */
const nav = document.querySelector('nav');
const open = document.querySelector('#openButton');
const close = document.querySelector('#closeButton')
const backToTopBtn = document.querySelector('.backToTop');

/* WHEN 'scroll' -> background-color to 'nav' */
addEventListener('scroll', () => {
    if (scrollY > 100 || nav.getBoundingClientRect().bottom > 100) { // <- add 'nav' background-color
        nav.classList.add('scroll'); 
    } else {
        nav.classList.remove("scroll"); // <- removes 'nav' bacground-color
    }
    if (scrollY > 800) {
        backToTopBtn.style.opacity = "1"; // <- show 'backToTopBtn'
    } else {
        backToTopBtn.style.opacity = "0"; // <- hide 'backToTopBtn'
    }
})

/* TOGGLE '#menu' */
let toggle = false;
open.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (!toggle) {
        document.querySelector('aside').style.display = "block";
        toggle = !toggle;
    } else {
        document.querySelector('aside').style.display = "none";
        toggle = !toggle;
    }    
}
window.onclick = (e) => {
    if(e.target.matches('a')) {
        document.querySelector('aside').style.display = "none";
        toggle = false;
    }
}

/* BACK TO TOP 'button' */
function backToTop() {
    window.scrollTo(0, 0);
}

/* ONLOAD FUNCTIONS */
window.addEventListener("load", () => {
    if (scrollY != 0) { // <- if onload or refresh scrollY isn't '0' then we add the white background to the 'nav' bar
        nav.classList.add('scroll');
    }  
})