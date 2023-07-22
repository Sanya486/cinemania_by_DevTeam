import { fetchSearch } from '../fetches/fetch-search';
import { fetchTrendingWeekMovies } from '../fetches/fetch-trendings-week';
import { fetchGenres } from '../fetches/fetch-genres';
import { catalogMarkup } from './catalog-markup';
import { fetchTrailers } from '../fetches/fetch-trailer';
import { markupMoreDetails } from '../utils/moreDetailsCardMarkup';
import { pagination } from '../utils/paginationSettings';
import { showTrailer } from '../utils/moreDetails';
import Notiflix from 'notiflix';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModalBackDrop: document.querySelector('.trailer-modal-backdrop'),
  trailerModalContent: document.querySelector('.trailer-modal-content'),
  trailerAvaible: document.querySelector('.trailer-avaible'),
  trailerErrorContent: document.querySelector('.trailer-error-mode-content'),
  moreDetail: document.querySelector('.modal-film-info'),
  wrap: document.querySelector('.flex'),
  closeModalBtn: document.querySelector('.modal-film-info .close-modal'),
  closeTrailerBtn: document.querySelector('.close-trailer-btn'),
  homeTrendsList: document.querySelector('.home-trends-list'),
  body: document.querySelector('body'),
  scrollUpBtn: document.querySelector('#back-to-top'),
  cardListSearchResult: document.querySelector('.card-list-search-result'),
  tuiPaginationEl: document.querySelector('.tui-pagination'),
  paginationEl: document.querySelector('#pagination'),
  searchResult: document.querySelector('.search-result'),
  yearInputValue: document.querySelector('.year-of-film-search-form'),
  searchForm: document.querySelector('.search-form'),
  searchNameInput: document.querySelector('.input-film-name-search-form'),
};

let arr = [];
let cardId;
let btnatlibrary;
let localArr = localStorage.getItem('films-id-array');
let inputValue;
let year;

const viewportWidth = document.body.clientWidth;

refs.closeModalBtn.addEventListener('click', closeMoreDetails);
window.addEventListener('load', displayWeeklyTrendsCatalog(1));

// ------------------ Onload window catalog cards markup ------------------ //

async function displayWeeklyTrendsCatalog(page) {
  try {
    const genresData = await fetchGenres();
    let trendData = await fetchTrendingWeekMovies(page);

    let genresObjectData = trendData.weeklyTrendsList.map(film => {
      return film.genre_ids.map(genre => {
        return genresData.find(option => option.id === genre);
      });
    });

    trendData.weeklyTrendsList.forEach(
      (film, index) => (film.genre_ids = genresObjectData[index])
    );

    trendData.weeklyTrendsList.forEach(film => {
      refs.cardListSearchResult.insertAdjacentHTML(
        'beforeend',
        catalogMarkup(film)
      );
    });

    onAddEventListener();

    onPagination({
      totalItems: trendData.weeklyTrendsTotal,
      itemsPerPage: trendData.weeklyTrendsList.length,
      fetchCallBack: OnFetchTrendingWeeks,
    });
  } catch (error) {
    console.log(error);
  }
}

function onAddEventListener() {
  refs.cardListSearchResult.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
      cardId = +e.target.parentNode.id;
      openModalDetails(cardId);
      refs.body.style.overflow = 'hidden';
      refs.scrollUpBtn.style.display = 'none';
    }
  });
}

const onSubmit = event => {
  inputValue = refs.searchNameInput.value.trim();
  year = refs.yearInputValue.value.trim();
  event.preventDefault();
  const searchInputValue = refs.searchNameInput.value.trim();
  const yearInputValue = refs.yearInputValue.value.trim();

  if (searchInputValue !== '') {
    displayQueryFilmCatalog(searchInputValue, 1, yearInputValue);
  }
};
refs.searchForm.addEventListener('submit', onSubmit);

const displayQueryFilmCatalog = async (inputValue, page, year) => {
  refs.cardListSearchResult.innerHTML = '';
  let queryData = await fetchSearch(inputValue, page, year);
  if (queryData.total_results !== 0) {
    const genresData = await fetchGenres();

    let genresObjectData = queryData.results.map(film => {
      return film.genre_ids.map(genre => {
        return genresData.find(option => option.id === genre);
      });
    });

    queryData.results.forEach(
      (film, index) => (film.genre_ids = genresObjectData[index])
    );
    // ======================================

    queryData.results.forEach(film => {
      refs.cardListSearchResult.insertAdjacentHTML(
        'beforeend',
        catalogMarkup(film)
      );
    });

    onPagination({
      totalItems: +queryData.total_results,
      itemsPerPage: +queryData.results.length,
      fetchCallBack: OnSearchFetch,
    });
  } else {
    refs.tuiPaginationEl.innerHTML = ``;
    refs.cardListSearchResult.innerHTML = `<p class="oops-catalog-search">OOPS...</br>
    We are very sorry!</br>
    We don’t have any results matching your search.</p>`;
  }
  // =======================================
};

function onPagination({ totalItems, itemsPerPage, fetchCallBack }) {
  refs.paginationEl.innerHTML = '';
  pagination({ totalItems, itemsPerPage, fetchCallBack });
}

async function OnFetchTrendingWeeks(event) {
  refs.cardListSearchResult.innerHTML = '';

  const genresData = await fetchGenres();
  let trendData = await fetchTrendingWeekMovies(event.page);

  let genresObjectData = trendData.weeklyTrendsList.map(film => {
    return film.genre_ids.map(genre => {
      return genresData.find(option => option.id === genre);
    });
  });

  trendData.weeklyTrendsList.forEach(
    (film, index) => (film.genre_ids = genresObjectData[index])
  );

  trendData.weeklyTrendsList.forEach(film => {
    refs.cardListSearchResult.insertAdjacentHTML(
      'beforeend',
      catalogMarkup(film)
    );
  });
  scrollUp();
}

async function OnSearchFetch(eventData) {
  refs.cardListSearchResult.innerHTML = '';
  let queryData = await fetchSearch(inputValue, eventData.page, year);

  const genresData = await fetchGenres();

  let genresObjectData = queryData.results.map(film => {
    return film.genre_ids.map(genre => {
      return genresData.find(option => option.id === genre);
    });
  });

  queryData.results.forEach(
    (film, index) => (film.genre_ids = genresObjectData[index])
  );

  queryData.results.forEach(film => {
    refs.cardListSearchResult.insertAdjacentHTML(
      'beforeend',
      catalogMarkup(film)
    );
  });
  scrollUp();
}

function scrollUp() {
  if (viewportWidth >= 1280) {
    scroll({ top: 790, behavior: 'smooth' });
  } else {
    scroll({ top: 500, behavior: 'smooth' });
  }
}
// ------------------ Query catalog cards markup by keyword ------------------ //

function openModalDetails(cardId) {
  refs.moreDetail.classList.remove('is-hidden');
  openMoreDetails(cardId);
  document.addEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.addEventListener('click', closeOnBacdropMoreDetails);
}

function closeOnBacdropMoreDetails(e) {
  closeOnBackdropClick(e, closeMoreDetails);
}

function closeOnBacdropTrailer(e) {
  closeOnBackdropClick(e, closeTrailerModal);
}

function closeOnBackdropClick(e, callback) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    callback();
  }
}

function closeMoreDetails() {
  refs.moreDetail.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.removeEventListener('click', closeOnBacdropMoreDetails);
  refs.body.style.overflow = 'auto';
}

function onEscapeMoreDetails(e) {
  if (e.key === 'Escape') {
    closeMoreDetails();
  }
}

async function openMoreDetails(currentId) {
  try {
    const markup = await markupMoreDetails(currentId);
    if (!markup) {
      Notiflix.Notify.warning(`Something went wrong, please try later!`)
      return
    }
    refs.wrap.innerHTML = markup;

    const btnatreiller = document.querySelector('#btn-watch-treiller');
    btnatlibrary = document.querySelector('#btn-add-to-my-library');

    btnatreiller.addEventListener('click', OnWatchTrailerBtn);
    btnatlibrary.addEventListener('click', action);

    onCheckLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function OnWatchTrailerBtn(event) {
  const cardId = +event.target.dataset.id;
  openTrailerModal(cardId);
}

function openTrailerModal(cardId) {
  refs.trailerModalBackDrop.classList.remove('is-hidden');
  watchTrailer(cardId);

  document.addEventListener('keydown', onEscape);
  refs.closeTrailerBtn.addEventListener('click', closeTrailerModal);
  refs.trailerModalBackDrop.addEventListener('click', closeOnBacdropTrailer);
}

async function watchTrailer(cardId) {
  try {
    const trailers = await fetchTrailers(cardId);

    if (trailers.length > 0) {
      const trailerKey = trailers[0].key;

      const trailerContent = showTrailer(trailerKey);
      refs.trailerAvaible.innerHTML = trailerContent;
    } else {
      refs.trailerErrorContent.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
    refs.trailerErrorContent.classList.remove('hidden');
  }
}

function onEscape(event) {
  if (event.key === 'Escape') {
    closeTrailerModal();
  }
}

function closeTrailerModal() {
  refs.trailerModalBackDrop.classList.add('is-hidden');
  refs.trailerErrorContent.classList.add('hidden');

  refs.trailerAvaible.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
  refs.closeModalBtn.removeEventListener('click', closeTrailerModal);
  refs.trailerModalBackDrop.removeEventListener('click', closeOnBacdropTrailer);
}

function onCheckLocalStorage() {
  if (JSON.parse(localArr).includes(cardId)) {
    toggleBtnStyles('Remove from my library');
  }
  if (localArr === null) {
    toggleBtnStyles('Add to my library');
  }
}

function action() {
  localArr = localStorage.getItem('films-id-array');
  try {
    if (localArr === null) {
      arr.push(cardId);
      localStorage.setItem('films-id-array', JSON.stringify(arr));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Remove from my library');
      return;
    }
    let parseLocalStorage = JSON.parse(localArr);

    if (!parseLocalStorage.includes(cardId)) {
      parseLocalStorage.push(cardId);
      localStorage.setItem('films-id-array', JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Remove from my library');
      return;
    }
    if (parseLocalStorage.includes(cardId)) {
      const idx = parseLocalStorage.indexOf(cardId);
      parseLocalStorage.splice(idx, 1);
      localStorage.setItem('films-id-array', JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Add to my library');
    }
  } catch (error) {
    Notify.failure('Please, try one more time');
  }
}

function toggleBtnStyles(text) {
  btnatlibrary.textContent = text;
}
