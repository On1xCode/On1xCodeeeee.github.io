$(document).ready(function() {
  $(".burger, .header__link").click(function(event) {
    if ($(window).width() < 1100) {
      $(".burger").toggleClass("active")
      $(".header__nav").slideToggle();
    }
  });
  $(window).resize(function() {
    if ($(window).width() > 1100) {
      $(".header__nav").css("display", "block")
    }
    else {
      $(".header__nav").css("display", "none")
    }
  });
  $(".header__link").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
