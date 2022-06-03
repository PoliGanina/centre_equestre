'use strict';

const menu = document.querySelector('.header__menu'),
      logo = document.querySelector('.header__logo'),
      galleryItems = document.querySelectorAll('.gallery__item'),
      footer = document.querySelector('.droits'),
      previous = document.querySelector('.contacts'),
      hamburger = document.querySelector('.hamburger'),
      navList = document.querySelector('.header__nav-list');


$(window).scroll(function () {
if ($(this).scrollTop() > 900) {
    $('.scrollup').fadeIn();
} else {
    $('.scrollup').fadeOut();
}
});

new WOW().init();

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.header__title').fadeOut();
        $('.header__subtitle').fadeOut();
    } else {
        $('.header__title').fadeIn();
        $('.header__subtitle').fadeIn();
    }
});

window.addEventListener('scroll', () => {
    switch (true) {
        case window.scrollY > 300 && window.scrollY < 700:
            menu.classList.add('header__menu-hidden');
            menu.classList.remove('header__menu-short');
            break;
        case window.scrollY >= 700:
            menu.classList.add('header__menu-short');
            logo.classList.add('header__logo-short');
            menu.classList.remove('header__menu-hidden');
            break;
        default:
            menu.classList.remove('header__menu-short');
            menu.classList.remove('header__menu-hidden');
            logo.classList.remove('header__logo-short');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navList.classList.toggle('show');
    menu.classList.toggle('header__menu-hamburger');
})


galleryItems.forEach(itemEl => {
    const [galeryImg, modalOpenBtn] = itemEl.children;

    itemEl.addEventListener('mouseover', () => {
        galeryImg.style.filter = 'brightness(0.4)';
        galeryImg.style.transform = 'scale(1.4)';
        modalOpenBtn.classList.add('gallery__btn-active');
    });
    itemEl.addEventListener('mouseout', () => {
        galeryImg.style.filter = '';
        galeryImg.style.transform = 'scale(1)';
        modalOpenBtn.classList.remove('gallery__btn-active');
    });
});





