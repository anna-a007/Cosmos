var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".money__management-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".money__management-button-next",
      prevEl: ".money__management-button-prev",
    },
  });