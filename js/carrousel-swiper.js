const swiper = new Swiper(".swiper-hero", {
    // Optional parameters
    // slidesPerView: "auto",
    // spaceBetween: 15,
    // slidesPerGroupAuto: true,
    slidesPerView: 1,
    slidesPer: 7,


    direction: "horizontal",
    loop: true,
    // allowTouchMove: true,
    effect: "fade",
    autoplay: {
        /*delay: 50000,*/
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        // type: "progressbar"
        clickable: true,
        // dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
});