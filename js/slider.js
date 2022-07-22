const swiper = new Swiper(".swiper-container.swiper-one", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination1",
    clicable:true
  },
  // autoplay:{
  //   delay:2500,
  //   disableOnIteraction:false,
  
  // }

  
});

var swiperTwo = new Swiper('.swiper-container2.swiper-two', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.modal-swiper-button-next',
    prevEl: '.modal-swiper-button-prev',
  },
  pagination: {
    el: ".modal-swiper-pagination",
    clicable:true
  },
});


