const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        scrollBtn.classList.add('active');  
    }
    else {
        scrollBtn.classList.remove('active'); 
    }
});


scrollBtn.addEventListener('click', () => {
    window.scrollTo({top:0, behavior: 'smooth'});

});



