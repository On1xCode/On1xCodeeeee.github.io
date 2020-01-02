document.addEventListener("DOMContentLoaded", function() {
	let hamburger = document.querySelector(".header-top-hamburger"),
      menu      = document.querySelector(".header-adp-menu"),
      menuLink  = document.querySelectorAll(".header-adp-menu .menu-link");

      // Open and close menu, add effects to hamburger
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    menu.classList.toggle("menu-active");
  });

    // close Menu onclick by menu links
  menuLink.forEach(item => {
    item.onclick = () => {
      hamburger.classList.remove("hamburger-active");
      menu.classList.remove("menu-active");
    }
  })
});

jQuery(document).ready(function() {
  jQuery(".menu-link").click(function () { // Place your classname instead of CLASSNAME
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
  return false;
  });
});
