const button = document.querySelector('.header__humburger');
const menu = document.querySelector('.header__mobile-menu');


button.addEventListener('click', mobileMenu);


function mobileMenu(){
    menu.classList.toggle('active');
}
