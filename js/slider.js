const swiper = new Swiper(".swiper-container.swiper-one", {
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination1",
    clicable: true,
  },
  // autoplay:{
  //   delay:2500,
  //   disableOnIteraction:false,

  // }
});

var swiperTwo = new Swiper(".swiper-container2.swiper-two", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".modal-swiper-button-next",
    prevEl: ".modal-swiper-button-prev",
  },
  pagination: {
    el: ".modal-swiper-pagination",
    clicable: true,
  },
});

const swiperThree = new Swiper(".swiper-container3.swiper-three", {
  slidesPerView: 1,
  // spaceBetween: 10,
  navigation: {
    nextEl: ".money-management-button-next",
    prevEl: ".money-management-button-prev",
  },

  speed: 800,
  pagination: {
    el: ".money-management-pagination",
    clicable: true,
  },
  // autoplay:{
  //   delay:2500,
  //   disableOnIteraction:false,

  // }
});

var swiperFour = new Swiper(".swiper-container4.swiper-four", {
  slidesPerView: 6,
  // spaceBetween: 16,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".news-button-next",
    prevEl: ".news-button-prev",
  },

  speed: 800,
  // pagination: {
  //   el: ".news-pagination",
  //   clicable: true,
  // },
  // autoplay:{
  //   delay:2500,
  //   disableOnIteraction:false,

  // }
});
