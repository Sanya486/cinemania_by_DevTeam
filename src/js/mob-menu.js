const refs = {
  menuBtn: document.querySelector('#js-menu-btn'),
  mobBackdrop: document.querySelector('#js-mobile-backdrop'),
  mobMenu: document.querySelector('#js-mob-menu'),
};

menuBtn.addEventListener('click', onBtnMenuClick);

function onBtnMenuClick() {
  refs.mobBackdrop.classList.remove('is-hidden');
  refs.mobMenu.classList.remove('menu-hidden');
}
