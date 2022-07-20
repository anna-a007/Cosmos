new Swiper(".courses__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".courses__swiper-pagination",
   
  },
  navigation: {
    nextEl: ".courses__swiper-button-next",
    prevEl: ".courses__swiper-button-prev",
  },
});


