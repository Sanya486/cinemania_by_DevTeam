const backToTopButton = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = 'block';
    backToTopButton.addEventListener('click', windowScroll);
    }
   else {
    backToTopButton.style.display = 'none';
    backToTopButton.removeEventListener('click', windowScroll)
  }
});

function windowScroll () {
 window.scrollTo({ top: 0, behavior: 'smooth' })
}
  
