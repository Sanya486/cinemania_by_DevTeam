import { cardMarkup } from './card-markup';

const sectionLibrary = document.querySelector('.library-film-list');
const libraryCardList = document.querySelector('.card-list-search-result');
const loadMoreBtn = document.querySelector('#js-loadmore');

const librariesKey = 'films-id-array';
const moviesLocalId = JSON.parse(localStorage.getItem(librariesKey)) || [];

const perPage = 9;
let page = 1;

// localStorage.clear();

renderCards();

function showMoreCards() {
  return moviesLocalId.length > perPage * page;
}

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  renderCards();
});

function renderCards() {
  console.log('moviesLocalId ', moviesLocalId);

  if (moviesLocalId.length === 0) {
    const emptyLibrary = `<div class="container-library container">
      <p class="library-empty__mistake">OOPS...<br>We are very sorry!<br>
      You don’t have any movies at your library.</p>
      <button class="main-accent-sml-btn btn library" onclick="window.location.href='catalog.html'">Search movie</button>
    </div>`;
    sectionLibrary.innerHTML = emptyLibrary;
  } else {
    const renderPromises = moviesLocalId
      .slice((page - 1) * perPage, page * perPage)
      .map(id => cardMarkup(id));

    Promise.all(renderPromises)
      .then(filmCards => {
        const filmCardsHTML = filmCards.join('');
        libraryCardList.innerHTML += filmCardsHTML;

        if (showMoreCards()) {
          loadMoreBtn.style.display = 'block';
        } else {
          loadMoreBtn.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error rendering film cards:', error);
      });
  }
}
