const swiper = new Swiper(".mySwiper", {
  spaceBetween: 350,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clicable:true
  },
  autoplay:{
    delay:2500,
    disableOnIteraction:false,
  
  }

  
});





