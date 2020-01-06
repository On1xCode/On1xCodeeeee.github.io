$(document).ready(function() {
  $(".burger, .header__link").click(function(event) {
    $(".header__nav, .burger").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(document).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".header").addClass("scrolled");
      $(".intro").css("margin-top", "70px")
    } else {
      $(".header").removeClass("scrolled");
      $(".intro").css("margin-top", "110px")
    }
    if ($(document).scrollTop() > $(".gallery").offset().top + 400) {
      $(".header").css("transform", "translateY(-100%)")
    } else {
      $(".header").css("transform", "translateY(0%)")
    }
  })
  $(".btn__more").click(function(e) {
    e.preventDefault();
    $("div.hidden").each(function(){
      $(this).slideDown();
    })
    $("html, body").animate({
      scrollTop: $(this).offset().top - 500
    }, 1500);
    $(this).hide();
    $(".btn__menu").show();
  });
// slick slider
  $(".featured__slider").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendDots: ".slider__dots",
    responsive: [
      {
      breakpoint: 1260,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
        }
      },
      {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
        }
      },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
        }
      }
    ]
  });

});
