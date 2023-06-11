const toggle = document.getElementById('toggle');

toggle.addEventListener('change', onThemeToggleChange);

function onThemeToggleChange() {
  const body = document.body;

  if (toggle.checked) {
    body.classList.add('light');
  } else {
    body.classList.remove('light');
  }
}
