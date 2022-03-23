'use strict';

const menu = document.querySelector('.header__menu'),
      logo = document.querySelector('.header__logo'),
      galleryItems = document.querySelectorAll('.gallery__item');


$(window).scroll(function () {
if ($(this).scrollTop() > 900) {
    $('.btn__up').fadeIn();
} else {
    $('.btn__up').fadeOut();
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

    // if (window.scrollY > 300 && window.scrollY < 700) {
    //     menu.classList.add('header__menu-hidden');
    //     menu.classList.remove('header__menu-short');
    // } else if (window.scrollY >= 700) {
    //     menu.classList.add('header__menu-short');
    //     logo.classList.add('header__logo-short');
    //     menu.classList.remove('header__menu-hidden');
    // } else {
    //     menu.classList.remove('header__menu-short');
    //     menu.classList.remove('header__menu-hidden');
    //     logo.classList.remove('header__logo-short');
    // }
});

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

// gallery.mouseover = function (event) {
//     let target = event.target;
//     target.style.filter = 'brightness (40%)';
// };

// gallery.mouseout = function (event) {
//     let target = event.target;
//     target.style.filter = '';
// };


