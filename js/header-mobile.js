const button = document.querySelector('.header__humburger');
const menu = document.querySelector('.header__mobile-menu');
const iconMenu = document.querySelector('.header__humburger')


button.addEventListener('click', mobileMenu);


function mobileMenu(){
    menu.classList.toggle('active');
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
}




