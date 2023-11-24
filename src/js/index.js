import '@/styles/style';

const burger = document.querySelector('.menu-burger');
const headerList = document.querySelector('.header__list');

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
    const tabindexItems = document.querySelectorAll('[data-tabindex]');
    tabindexItems.forEach((el) => {
      const burgerIsVisible = window.getComputedStyle(burger).display !== 'none';
      if (burgerIsVisible) {
        const newIndex = el.getAttribute('data-tabindex');
        el.setAttribute('tabindex', newIndex);
      } else {
        el.removeAttribute('tabindex');
      }
    });
  };
  window.addEventListener(event, changeTabindex);
});
