import '@/styles/style';

const rootHTML = document.querySelector(':root');

const burger = document.querySelector('.menu-burger');
const headerList = document.querySelector('.header__list');
const headerCall = document.querySelector('.header__call');

let burgerHasOpen = false;

const toggleMenu = () => {
  burger.classList.toggle('active');
  headerList.classList.toggle('active');
};
const hideMenu = () => {
  burger.classList.remove('active');
  headerList.classList.remove('active');
};

burger.addEventListener('click', () => {
  const headerCallHeight = headerCall.clientHeight;
  rootHTML.style.setProperty('--header__callHeight', `${headerCallHeight}px`);

  toggleMenu();

  burgerHasOpen = !burgerHasOpen;
  const burgerLabelText = burgerHasOpen ? 'закрыть меню' : 'открыть меню';
  burger.setAttribute('aria-label', burgerLabelText);
});

const menuItems = document.querySelectorAll('.header__list-item');
menuItems.forEach((el) => {
  el.addEventListener('click', () => {
    hideMenu();
  });
});

['resize', 'DOMContentLoaded'].forEach((event) => {
  const changeTabindex = () => {
    const tabindexItems = document.querySelectorAll('[data-mobile-tabindex]');
    tabindexItems.forEach((el) => {
      const burgerIsVisible = window.getComputedStyle(burger).display !== 'none';
      if (burgerIsVisible) {
        const newIndex = el.getAttribute('data-mobile-tabindex');
        el.setAttribute('tabindex', newIndex);
      } else {
        el.removeAttribute('tabindex');
      }
    });
  };
  window.addEventListener(event, changeTabindex);
});
