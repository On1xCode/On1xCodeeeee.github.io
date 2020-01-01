$(document).ready(function () {
    // Menu
    let menuBtn = document.getElementById("open-menu"),
        menu = document.getElementById("mobile-menu");

    $("#open-menu").click(function () {
        if (menu.classList.contains("hide")) {
            $("#mobile-menu").fadeIn("fast", function () {});
            menu.classList.remove("hide");
        } else {
            $("#mobile-menu").fadeOut("fast", function () {});
            menu.classList.add('hide');
        }
    });
    // Slider
    $('.header-content__slider').slick({
        prevArrow: ".header-content__slider-prev",
        nextArrow: ".header-content__slider-next",
        infinite: false,
        dots: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }]
    });

    $('.counters__card-number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000, // duration
          easing: 'swing',// animation type
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
    });

    $('.posts__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: ".posts__slider-buttons_left",
        nextArrow: ".posts__slider-buttons_right",
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
  //   $(function toggleElements (class) {
  //     $(class).slice(0, 6).show();
  //     $("#loadMore").on('click', function (e) {
  //         e.preventDefault();
  //         $("div:hidden").slice(0, 6).slideDown();
  //         if ($("div:hidden").length == 0) {
  //             $("#load").fadeOut('slow');
  //         }
  //         // $('html,body').animate({
  //         //     scrollTop: $(this).offset().top
  //         // }, 1500);
  //   });
  // });
  // $(".portfolio__box").each(function() {
  //     $(this).click(function() {
  //       $(".portfolio__card").hide();
  //       let attr = $(this).attr("data-filter");
  //       if (attr == "all") {
  //         console.log($(".portfolio__card"));
  //         $(".portfolio__card").slice(0, 6).show();
  //       } else {
  //         console.log(attr);
  //         $(".web").slice(0, 6).show();
  //       }
  //   });
  //
  // });

});


document.addEventListener("DOMContentLoaded", function () {


    let buttons = document.querySelectorAll(".portfolio__box");
    // Sorting
    function removeClass() {
        buttons.forEach(function (item) {
            if (item.classList.contains("active")) {
                item.classList.remove("active")
            }
        });
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            removeClass();
            buttons[i].classList.add('active');

        });
    }



    let goTopBtn = document.getElementById("scrollTopBtn");


    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 1000) {
            goTopBtn.style.transform = "translateX(0px)";
        } else {
            goTopBtn.style.transform = "translateX(100px)";
        }
    });


    // Scroll to top
    $('#scrollTopBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    function getScreenWidth() {
        return $(window).width();
    }
});

new WOW({mobile: false}).init();

jQuery(document).ready(function() {
  jQuery(".scrollTo").click(function () { // Place your classname instead of CLASSNAME
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
  return false;
  });
});

var mixer = mixitup('.portfolio__wrapper-bot');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300,
        queueLimit: 6
    }
  });
