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

range.onchange = function(evt) {
  evt.preventDefault();
if (range.value === "2") {
  imageBefore.classList.remove("example__image-visible");
  imageAfter.classList.add("example__image-visible");
  } else {
    imageAfter.classList.remove("example__image-visible");
    imageBefore.classList.add("example__image-visible");
  }
};
