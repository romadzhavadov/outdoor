const btnMenu = document.querySelector('.header__btn-menu');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function() {
  btnMenu.classList.toggle('header__btn-menu--open');
  nav.classList.toggle('header__nav--open');
})

const productsMenu = document.querySelector('.products__btn-menu');
const list = document.querySelector('.products__list');

productsMenu.addEventListener('click', function() {
  productsMenu.classList.toggle('products__btn-menu--open');
  list.classList.toggle('products__list--open');
})




