const dynamicAdaptive = (breakPoint, element, newParent, initialParent) => {
  // let parent = $(element).attr("class");
  // parent.substring(0, parent.indexOf(" "));
  if (document.body.clientWidth < breakPoint) {
    $(element).appendTo($(newParent));
  } else {
    $(element).appendTo($(initialParent));
  }
}
$(document).ready(() => {

  const sliderSections = [".sets", ".rolls", ".pizza"];

  // $.each(sliderSections, (i, element) => {
  //   $(element).find(".products-carousel__body").slick({
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     infinite: false,
  //     prevArrow: $(element).find(".carousel-control__btn-prev"),
  //     nextArrow: $(element).find(".carousel-control__btn-next"),
  //     appendDots: $(element).find(".carousel-control__dots"),
  //     dots: true,
  //     responsive: [
  //       {
  //         breakpoint: 5000,
  //         settings: {
  //           slidesToShow: 4,
  //         }
  //       },
  //       {
  //         breakpoint: 1170,
  //         settings: {
  //           slidesToShow: 3,
  //         }
  //       },
  //       {
  //         breakpoint: 936,
  //         settings: {
  //           slidesToShow: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 300,
  //         settings: {
  //           slidesToShow: 1,
  //           dots: false
  //         }
  //       }
  //     ]
  //   });
  // });


  $(".sets-carousel__body").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $(".sets-carousel-control__btn-prev"),
    nextArrow: $(".sets-carousel-control__btn-next"),
    appendDots: $(".sets-carousel-control__dots"),
    dots: true,
    responsive: [
      {
        breakpoint: 9000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });

  // window.resizeBy(-50, 150);
  // console.log(window.innerWidth)
  // window.innerWidth--
  // console.log(window.innerWidth)

  // window.screen.width = window.screen.width - 1
  // console.log(window.screen.width)
  // ++window.screen.width
  // console.log(window.screen.width)


  $(".rolls-carousel__body").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $(".rolls-carousel-control__btn-prev"),
    nextArrow: $(".rolls-carousel-control__btn-next"),
    appendDots: $(".rolls-carousel-control__dots"),
    dots: true,
    responsive: [
      {
        breakpoint: 9000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          dots: false
        }
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });

  // $(".rolls-carousel__body").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   prevArrow: $(".rolls").find(".carousel-control__btn-prev"),
  //   nextArrow: $(".rolls").find(".carousel-control__btn-next"),
  //   appendDots: $(".rolls").find(".carousel-control__dots"),
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 9000,
  //       settings: {
  //         slidesToShow: 4,
  //       }
  //     },
  //     {
  //       breakpoint: 1160,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 890,
  //       settings: {
  //         slidesToShow: 2,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 615,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 520,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: false
  //       }
  //     }
  //   ]
  // });





  $(".carousel__body").slick({
    infinite: true,
    prevArrow: $(".carousel__btn-prev"),
    nextArrow: $(".carousel__btn-next"),
    appendDots: $(".carousel__dots"),
    dots: true,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $("#recall__open-btn, #menu-recall__open-btn").on("click", (event) => {
    event.preventDefault();
    $(".popup, .recall").removeClass("hidden");
    if ($(".popup__menu").hasClass("active")) {
      // console.log($(".popup__menu"));
      $(".popup__menu").removeClass("active");
    }
    setTimeout(() => {
      $(".popup__background, .popup__recall").fadeIn();
    }, 150);
  });

  $("#recall__close-btn").on("click", () => {
    $(".popup__background, .recall").fadeOut();
    setTimeout(() => {
      $(".recall, .popup").addClass("hidden");
    }, 200)
  });

  $("#recall-btn").on("click", () => {
    let name = $("#recall-name").val().trim(),
      phone = $("#recall-phone").val().trim(),
      errorMessage = $(".popup__form-error");

    if (name.length == 0) {
      errorMessage.text("*Введите ваше имя!");
    } else if (phone.length == 0) {
      errorMessage.text("*Ведите ваш номер телефона");
    } else {
      errorMessage.text("Сообщение отправлено");
      errorMessage.css("color", "green");
    }
  });

  $("#popup__open-btn").on("click", () => {
    $(".popup, .popup__background").removeClass("hidden");
    $(".popup__background").fadeIn();
    $(".popup__basket").addClass("active");
  });

  $("#basket__close-btn").on("click", () => {
    $(".popup__basket").removeClass("active");
    $(".popup__background").fadeOut();
    $(".popup__background").addClass("hidden");
    setTimeout(() => {
      $(".popup").addClass("hidden")
    }, 200);
  });

  $(".burger").on("click", () => {
    $(".popup, .popup__background").removeClass("hidden");
    $(".popup__background").fadeIn();
    $(".popup__menu").addClass("active");
  });

  $("#menu__close-btn").on("click", () => {
    $(".popup__menu").removeClass("active");
    $(".popup__background").fadeOut();
    setTimeout(() => {
      $(".popup, .popup__background").addClass("hidden");
    }, 200);
  });







  // counter 
  let counter = $(".counter");
  $.each(counter, (i, element) => {
    let counterElements = $(element).children();
    let counterButtons = [counterElements[0], counterElements[2]];
    let counterNumber = counterElements[1];
    let counterValue = parseInt($(counterElements[1]).text());

    $.each(counterButtons, (i, button) => {
      $(button).on("click", () => {
        console.log("clicked");
        if ($(button).hasClass("counter__btn-minus") && counterValue > 0) {
          $(counterNumber).text(--counterValue)
        } else if ($(button).hasClass("counter__btn-plus")) {
          $(counterNumber).text(++counterValue)
        }
      });
    });
  });
});



dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");


$(window).on("resize", () => {
  dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");
});
