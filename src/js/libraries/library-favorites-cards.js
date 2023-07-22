import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { cardMarkup } from '../utils/card-markup';
import { fetchTrailers } from '../fetches/fetch-trailer';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { markupMoreDetails } from '../utils/moreDetailsCardMarkup';
import { closeOnBacdrop, showTrailer } from '../utils/moreDetails';
import { showTrailer } from '../utils/moreDetails';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModalBackDrop: document.querySelector('.trailer-modal-backdrop'),
  trailerModalContent: document.querySelector('.trailer-modal-content'),
  trailerAvaible: document.querySelector('.trailer-avaible'),
  trailerErrorContent: document.querySelector('.trailer-error-mode-content'),
  trailerErrorImage: document.querySelector('.trailer-placeholder-default'),
  moreDetail: document.querySelector('.modal-film-info'),
  closeModalBtn: document.querySelector('.modal-film-info .close-modal'),
  closeTrailerBtn: document.querySelector('.close-trailer-btn'),
  homeTrendsList: document.querySelector('.home-trends-list'),
  body: document.querySelector('body'),
  scrollUpBtn: document.querySelector('#back-to-top'),
  wrap: document.querySelector('.flex'),
  selectSection: document.querySelector('.genre-filter'),
  select: document.querySelector('.select'),
  selectList: document.querySelector('.select-options'),
  selectStyled: document.querySelector('.select-styled-content'),
  selectAll: document.querySelector('.select-styled'),
  sectionLibrary: document.querySelector('.library-film-list'),
  libraryCardList: document.querySelector('.card-list-search-result'),
  loadMoreBtn: document.querySelector('#js-loadmore'),
  resetBtn: document.querySelector('.reset-filter-button'),
};

const librariesKey = 'films-id-array';

let arr = [];
let cardId;
let btnatlibrary;
let localArr = localStorage.getItem(librariesKey);
let currentGenre;

const perPage = 9;
let page = 1;

refs.closeModalBtn.addEventListener('click', closeMoreDetails);
window.addEventListener('load', renderCards);

function showMoreCards() {
  return JSON.parse(localArr).length > perPage * page;
}

refs.loadMoreBtn.addEventListener('click', () => {
  page += 1;
  renderCards();
});

function renderCards() {
  if (localArr === null || JSON.parse(localArr).length === 0) {
    onNotMarkup();
  } else {
    const renderPromises = JSON.parse(localArr)
      .slice((page - 1) * perPage, page * perPage)
      .map(id => cardMarkup(id));

    Promise.all(renderPromises)
      .then(filmCards => {
        const filmCardsHTML = filmCards.join('');
        refs.libraryCardList.innerHTML += filmCardsHTML;
        toggleLoadMore();
        onToggleMoreAddEventListener();
      })
      .catch(error => {
        console.error('Error rendering film cards:', error);
      });
  }
  refs.select.addEventListener('click', onSelectGenre);
  refs.resetBtn.addEventListener('click', () => {
    document.location.reload();
  });
}

function updateMarkup() {
  page = 1;
  localArr = localStorage.getItem(librariesKey);
  if (localArr === null || JSON.parse(localArr).length === 0) {
    onNotMarkup();
  } else {
    const renderPromises = JSON.parse(localArr)
      .map(id => cardMarkup(id))
      .slice((page - 1) * perPage, page * perPage);

    Promise.all(renderPromises)
      .then(filmCards => {
        const filmCardsHTML = filmCards.join('');
        refs.libraryCardList.innerHTML = filmCardsHTML;
        toggleLoadMore();
      })
      .catch(error => {
        console.error('Error rendering film cards:', error);
      });
  }

  refs.select.addEventListener('click', onSelectGenre);
  refs.resetBtn.addEventListener('click', () => {
    document.location.reload();
  });
}

function onNotMarkup() {
  Notify.info(`OOPS... You don't have any movies at your library.`);
  const emptyLibrary = `<div class="container-library container">
      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don't have any movies at your library.</p>
      <button class="main-accent-sml-btn btn library" onclick="window.location.href='catalog.html'">Search movie</button>
    </div>`;
  refs.sectionLibrary.innerHTML = emptyLibrary;
  refs.selectSection.classList.add('hidden');
}

function toggleLoadMore() {
  if (showMoreCards()) {
    refs.loadMoreBtn.style.display = 'block';
  } else {
    refs.loadMoreBtn.style.display = 'none';
  }
  onToggleMoreAddEventListener();
}

function onToggleMoreAddEventListener() {
  let cardsArrRef = document.querySelectorAll('.film-card');
  for (const card of cardsArrRef) {
    card.addEventListener('click', onCardClick);
  }
}

function onCardClick(e) {
  e.preventDefault();
  cardId = +e.currentTarget.id;
  openModalDetails(cardId);
  refs.body.style.overflow = 'hidden';
  refs.scrollUpBtn.style.display = 'none';
}

function openModalDetails(cardId) {
  refs.moreDetail.classList.remove('is-hidden');
  onShowMoreDetail(cardId);
  document.addEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.addEventListener('click', e =>
    closeOnBacdrop(e, closeMoreDetails)
  );
}

function closeMoreDetails() {
  refs.moreDetail.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.removeEventListener('click', closeOnBacdrop);
  refs.body.style.overflow = 'auto';
}

function onEscapeMoreDetails(e) {
  if (e.key === 'Escape') {
    closeMoreDetails();
  }
}

async function onShowMoreDetail(currentId) {
  try {
    const markup = await markupMoreDetails(currentId);
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
  openModal(cardId);
}

function openModal(cardId) {
  refs.trailerModalBackDrop.classList.remove('is-hidden');
  watchTrailer(cardId);

  document.addEventListener('keydown', onEscape);
  refs.closeTrailerBtn.addEventListener('click', closeModal);
  refs.trailerModalBackDrop.addEventListener('click', closeOnBacdropTrailer);
}

function closeOnBacdropTrailer(e) {
  closeOnBackdropClick(e, closeModal);
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
    closeModal();
  }
}

function closeModal() {
  refs.trailerModalBackDrop.classList.add('is-hidden');
  refs.trailerErrorContent.classList.add('hidden');
  refs.trailerAvaible.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
  refs.closeModalBtn.removeEventListener('click', closeModal);
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
  closeMoreDetails();
  localArr = localStorage.getItem(librariesKey);
  try {
    if (localArr === null) {
      arr.push(cardId);
      localStorage.setItem(librariesKey, JSON.stringify(arr));
      localArr = localStorage.getItem(librariesKey);
      toggleBtnStyles('Remove from my library');
      updateMarkup();
      return;
    }
    let parseLocalStorage = JSON.parse(localArr);

    if (!parseLocalStorage.includes(cardId)) {
      parseLocalStorage.push(cardId);
      localStorage.setItem(librariesKey, JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem(librariesKey);
      toggleBtnStyles('Remove from my library');
      updateMarkup();
      return;
    }
    if (parseLocalStorage.includes(cardId)) {
      const idx = parseLocalStorage.indexOf(cardId);
      parseLocalStorage.splice(idx, 1);
      localStorage.setItem(librariesKey, JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem(librariesKey);
      toggleBtnStyles('Add to my library');
      updateMarkup();
    }
  } catch (error) {
    Notify.failure('Please, try one more time');
  }
}

function toggleBtnStyles(text) {
  btnatlibrary.textContent = text;
}

function onSelectGenre(e) {
  currentGenre = e.target;
  if (!currentGenre.hasAttribute('id')) {
    onToggleList();
    return;
  }
  refs.selectStyled.textContent = currentGenre.textContent;
  onToggleList();
  onToggleGenreColor(currentGenre);
  checkFilmsList(currentGenre.textContent);
}

async function checkFilmsList(currentGenre) {
  refs.libraryCardList.innerHTML = '';
  try {
    JSON.parse(localArr).forEach(async id => {
      const data = await fetchMovieDetails(id);
      if (data.genres.includes(currentGenre)) {
        const card = await cardMarkup(data.id);
        refs.libraryCardList.innerHTML += card;
        onToggleMoreAddEventListener();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function onToggleGenreColor(currentGenre) {
  if (currentGenre.id !== '' && refs.body.classList.contains('light')) {
    refs.selectStyled.style.color = '#282828';
    return;
  }
  if (currentGenre.id !== '') {
    refs.selectStyled.style.color = '#ffffff';
  }
}

function onToggleList() {
  if (refs.selectList.style.display === 'none') {
    refs.selectList.style.display = 'block';
    return;
  }
  refs.selectList.style.display = 'none';
}
