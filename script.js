$(document).ready(function () {
   $('.burger').click(function () {
      $('.burger-open, .burger__main, .menu__list, .menu-container, .menu__right').toggleClass('opened');
   });
});

new Swiper('.swiper', {
   speed: 400,
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
      dynamicBullets: true,
   },
   effect: 'cards',
   spaceBetween: 0,
   perSlideOffset: 8,
   perSlideRotate: 2,
   rotate: true
});

$(document).ready(function () {
   $('.circle-title').click(function () {
      $(this).toggleClass('active').next().slideToggle(300);
   });
});