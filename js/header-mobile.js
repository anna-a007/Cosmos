const button = document.querySelector('.header__humburger');
const menu = document.querySelector('.header__mobile-buttom');



function mobileMenu(){
    menu.classList.toggle('.header__mobile-buttom--active')
}


button.addEventListener('click', mobileMenu);