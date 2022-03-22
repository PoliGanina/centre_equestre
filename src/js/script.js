$(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
        $('.btn__up').fadeIn();
    } else {
        $('.btn__up').fadeOut();
    }
});

new WOW().init();

const header = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo');
window.addEventListener('scroll', () => {
    console.log('scrolling');
    if (window.scrollX > 900) {
        
      }
      Copy to Clipboard
      
});