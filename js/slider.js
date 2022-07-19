const swiper = new Swiper(".mySwiper", {
  spaceBetween: 200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clicable:true
  },
  autoplay:{
    delay:1500,
    disableOnIteraction:false,
  }
  
});





