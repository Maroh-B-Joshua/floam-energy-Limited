$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleclass('open');

  });

  $('.top-nav -nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrolltop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });

  $('#up').on('click', function () {
    $('html, body').animate({
      scrolltop: 0
    }, 2000);

  });
  AOS.init({
    easing: 'ease',
    duration: 1800
  });

});
