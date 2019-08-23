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



    // Video
    let playBtn = document.getElementById("playBnt");
    let goTopBtn = document.getElementById("scrollTopBtn");
    playBtn.addEventListener("click", function() {
        return window.open("https://www.youtube.com", "_blank");
    });

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
new WOW({
    mobile: false
}).init();


var mixer = mixitup('.portfolio__wrapper-bot');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});