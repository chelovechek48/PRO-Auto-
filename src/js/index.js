import '@/styles/style';

const burger = document.querySelector('.menu-burger');

const headerCall = document.querySelector('.header__call');
const rootHTML = document.querySelector(':root');
const headerList = document.querySelector('.header__list');

let burgerHasOpen = false;

burger.addEventListener('click', () => {
  const headerCallHeight = headerCall.offsetHeight;
  rootHTML.style.setProperty('--header__callHeight', `${headerCallHeight}px`);

  burger.classList.toggle('active');
  headerList.classList.toggle('active');

  burgerHasOpen = !burgerHasOpen;
  const burgerLabelText = burgerHasOpen === false ? 'открыть меню' : 'закрыть меню';
  burger.setAttribute('aria-label', burgerLabelText);
});
