const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});
// Close menu when any menu option is selected
const menuOptions = document.querySelectorAll(".navbar__menu li a");

menuOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menulinks.classList.remove("active");
  });
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

$(document).ready(function () {
  // Initialize each carousel individually
  $("#carousel1").slick({
    prevArrow: $("#prevBtn1"),
    nextArrow: $("#nextBtn1"),
    slidesToShow: 3, // Adjust this value as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#carousel2").slick({
    prevArrow: $("#prevBtn2"),
    nextArrow: $("#nextBtn2"),
    slidesToShow: 3, // Adjust this value as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Add more carousel initializations as needed for additional carousels
});

var slideIndex = 0;
var slides = document
  .getElementsByClassName("carousel")[0]
  .getElementsByTagName("img");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", function () {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
});

nextBtn.addEventListener("click", function () {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
});

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Auto-switch slides every 3 seconds
function autoSwitch() {
  setInterval(function () {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide();
  }, 3000); // 3 seconds
}

autoSwitch(); // Start auto-switching
