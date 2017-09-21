var $ = require('jquery');

require('slick-carousel');

$('.carousel__container').slick({
  arrows: true,
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  prevArrow:"<button type='button' class='arrow arrow__prev'><i class='fa fa-angle-left' aria-hidden='true'></i><</button>",
  nextArrow:"<button type='button' class='arrow arrow__next'><i class='fa fa-angle-right' aria-hidden='true'></i>></button>"
});

$(function() { // когда страница загружена
  $('.nav__link').each(function() { // проходим по нужным нам ссылками
    var location = window.location.href; // переменная с адресом страницы
    var link = this.href; // переменная с url ссылки
    var result = location.match(link); // результат возвращает объект если совпадение найдено и null при обратном

    if(result != null) { // если НЕ равно null
      $(this).addClass('nav__current'); // добавляем класс
    }
  });
});

$(function() {
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top > 120)
      $('.nav').addClass('nav-fixed'),
      $('.nav__list').addClass('nav-fixed__list'),
      $('.nav__item').addClass('nav-fixed__item'),
      $('.nav__link').removeClass('nav__link').addClass('nav-fixed__link'),
      $('.nav__current').removeClass('nav__current').addClass('nav-fixed__current');
    else
      $('.nav').removeClass('nav-fixed'),
      $('.nav-fixed__list').removeClass('nav-fixed__list').addClass('nav__list'),
      $('.nav-fixed__item').removeClass('nav-fixed__item').addClass('nav__item'),
      $('.nav-fixed__link').removeClass('nav-fixed__link').addClass('nav__link'),
      $('.nav-fixed__current').removeClass('nav-fixed__current').addClass('nav__current');
  });
});


