$(document).ready(function() {
  $(".burger, .header__link").click(function(event) {
    $(".header__nav, .burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".slider").slick({
    dots: true,
    arrows: false,
    appendDots: ".clients__dots"
  });

  $(".header__link").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
