const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 3,
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
})