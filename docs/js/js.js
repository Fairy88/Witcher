var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //кол-во слайдов
  loop: true, //бесконечная прокрутка
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-btn-active');//меняет гамбургер меню на крестик
  menu.classList.toggle('header-active');//открывает медиа окно меню
});