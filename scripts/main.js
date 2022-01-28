// STATIC SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });