const changeTheme = document.querySelector('#toggle');
const body = document.body;

changeTheme.addEventListener('change', () => {
  body.classList.toggle('light');
});
