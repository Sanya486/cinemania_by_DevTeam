const refs = {
  menuBtn: document.querySelector('#js-menu-btn'),
  mobBackdrop: document.querySelector('#js-mobile-backdrop'),
  mobMenu: document.querySelector('#js-mob-menu'),
};

refs.menuBtn.addEventListener('click', e => {
  e.preventDefault();

  refs.mobBackdrop.classList.remove('is-hidden');
  refs.mobMenu.classList.remove('menu-hidden');
});

refs.mobBackdrop.addEventListener('click', () => {
  refs.mobBackdrop.classList.add('is-hidden');
  refs.mobMenu.classList.add('menu-hidden');
});
