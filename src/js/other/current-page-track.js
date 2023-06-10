const currentPath = window.location.pathname;

const navigationLinks = document.querySelectorAll('.header-nav-list a');

navigationLinks.forEach(link => {
  if (currentPath.endsWith(link.getAttribute('href'))) {
    link.classList.add('current');
  }
});
