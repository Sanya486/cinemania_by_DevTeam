const toggle = document.getElementById('toggle');
const body = document.body;
const LOCALSTORAGE_KEY = 'theme-color-local';

toggle.addEventListener('change', onThemeToggleChange);
loadedPage();

function onThemeToggleChange() {
  if (!toggle.checked) {
    body.classList.add('light');
    localStorage.setItem(LOCALSTORAGE_KEY, 'light');
  } else {
    body.classList.remove('light');
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

function loadedPage() {
  const savedThemeColor = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedThemeColor === 'light') {
    body.classList.add('light');
    toggle.checked = false;
  } else {
    body.classList.remove('light');
    toggle.checked = true;
  }
}
