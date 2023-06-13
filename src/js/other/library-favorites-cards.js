import { cardMarkup } from './card-markup';

const libraryCardList = document.querySelector('.card-list-search-result');
const sectionLibrary = document.querySelector('.library-film-list');
const loadMoreBtn = document.querySelector('#loadMore');
const librariesKey = 'films-id-array';
const moviesLocalId = JSON.parse(localStorage.getItem(librariesKey)) || [];

// localStorage.clear();

renderCards();

function renderCards() {
  console.log('moviesLocalId ', moviesLocalId);

  if (moviesLocalId.length === 0) {
    const emptyLibrary = `<div class="container">
      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don't have any movies at your library.</p>
      <a class="btn-library__link" onclick="window.location.href='catalog.html'">Search movie</a>
    </div>`;
    sectionLibrary.innerHTML = emptyLibrary;
  } else {
    const renderPromises = moviesLocalId.map(id => renderFilmCard(id));

    Promise.all(renderPromises)
      .then(filmCards => {
        const filmCardsHTML = filmCards.join('');
        libraryCardList.innerHTML = filmCardsHTML;
      })
      .catch(error => {
        console.error('Error rendering film cards:', error);
      });
  }
}

async function renderFilmCard(id) {
  const movieMarkup = await cardMarkup(id);
  return movieMarkup;
}
