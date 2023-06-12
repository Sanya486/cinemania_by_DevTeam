import { cardMarkup } from './card-markup';

const libraryCardList = document.querySelector('.library-card-list');
const loadMoreBtn = document.querySelector('#loadMore');
const librariesKey = 'films-id-array';

let perPage = 9;
let page = 1;

renderCards();

function getMoviesFromLibrary() {
  const libraryMovies = JSON.parse(localStorage.getItem(librariesKey)) || [];
  return Object.values(libraryMovies);
}

function renderCards() {
  const movies = getMoviesFromLibrary();
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const filmCards = movies
    .slice(startIndex, endIndex)
    .map(id => renderFilmCard(id))
    .join('');
  libraryCardList.innerHTML = filmCards;

  if (movies.length > endIndex) {
    loadMoreBtn.hidden = false;
  } else {
    loadMoreBtn.hidden = true;
  }
}

function renderFilmCard(id) {
  const movieMarkup = cardMarkup(id);

  if (!movieMarkup) {
    const emptyMarkup = `
      <div class="container">
        <p class="library-empty__mistake">OOPS...
        We are very sorry!
        You don’t have any movies at your library.</p>
        <a class="btn-library__link" onclick="window.location.href='catalog.html'">Search movie</a>
      </div>
    `;
    return emptyMarkup;
  } else {
    return movieMarkup;
  }
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    page += 1;
    renderCards();
  });
}
