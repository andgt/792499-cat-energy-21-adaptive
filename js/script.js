'use strict'

// Меню для мобильной версии

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');

mainNav.classList.remove('main-nav--no-js');

buttonToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

// Слайдер Было-стало

let imageAfter = document.querySelector('.example__slider-image--after');
let imageBefore = document.querySelector('.example__slider-image--before');
let range = document.querySelector('.example__input-range');
let gallery = document.querySelector(".example__gallery");
let resize = document.querySelector(".example__resize");
let mobileWidthOnly = window.matchMedia("(max-width: 767px)");
let tabletWidth = window.matchMedia("(min-width: 768px)");

function mobileWidth () {
  range.value = 165;
  imageAfter.classList.remove("example__image-visible");
  imageBefore.classList.add("example__image-visible");
  range.onchange = function(evt) {
    evt.preventDefault();
  if (range.value >= "250") {
    imageBefore.classList.remove("example__image-visible");
    imageAfter.classList.add("example__image-visible");
    } else {
      imageAfter.classList.remove("example__image-visible");
      imageBefore.classList.add("example__image-visible");
    }
  };
};

function minTablet () {
  range.oninput = function () {
    resize.classList.remove("example__transition");
    resize.style.width = range.value + "px";
  }
  range.addEventListener("mouseleave", function (event) {
    range.value = 50 + "%";
    resize.style.width = 368 + "px";
    resize.classList.add("example__transition");
  });
};

let resizeTablet = function minTablet () {
  range.oninput = function () {
    resize.classList.remove("example__transition");
    resize.style.width = 311 + "px";
  }
  range.addEventListener("mouseleave", function (event) {
    if (imageBefore.classList.contains("example__image-visible")) {
      range.value = 165;
    } else {
        range.value = 547;
      }
    resize.style.width = 311 + "px";
    resize.classList.remove("example__transition");
  });
};

if (window.innerWidth > 767) {
  window.onload = minTablet();
} else {
  window.onload = mobileWidth();
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 767) {
    minTablet();
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth < 768) {
    mobileWidth();
    resizeTablet();
  }
});
