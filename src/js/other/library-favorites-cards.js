import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { cardMarkup } from './card-markup';
import { fetchTrailers } from '../fetches/fetch-trailer';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModal: document.querySelector('.trailer-modal-backdrop'),
  trailerModalContent: document.querySelector('.trailer-modal-content'),
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
};

const sectionLibrary = document.querySelector('.library-film-list');
const libraryCardList = document.querySelector('.card-list-search-result');
const loadMoreBtn = document.querySelector('#js-loadmore');
const librariesKey = 'films-id-array';

let arr = [];
let cardId;
let btnatlibrary;
let localArr = localStorage.getItem(librariesKey);
let currentGenre;

refs.closeModalBtn.addEventListener('click', closeMoreDetails);
window.addEventListener('load', renderCards);

const perPage = 9;
let page = 1;

function showMoreCards() {
  return JSON.parse(localArr).length > perPage * page;
}

loadMoreBtn.addEventListener('click', () => {
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
        libraryCardList.innerHTML += filmCardsHTML;
        toggleLoadMore();
        onAddEventListener();
      })
      .catch(error => {
        console.error('Error rendering film cards:', error);
      });
  }
  refs.select.addEventListener('click', onSelectGenre);
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
        libraryCardList.innerHTML = filmCardsHTML;
        toggleLoadMore();
      })
      .catch(error => {
        console.error('Error rendering film cards:', error);
      });
  }
  refs.select.addEventListener('click', onSelectGenre);
}

function onNotMarkup() {
  Notify.info(`OOPS... You don't have any movies at your library.`);
  const emptyLibrary = `<div class="container-library container">
      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don't have any movies at your library.</p>
      <button class="main-accent-sml-btn btn library" onclick="window.location.href='catalog.html'">Search movie</button>
    </div>`;
  sectionLibrary.innerHTML = emptyLibrary;
  refs.selectSection.classList.add('hidden');
}

function toggleLoadMore() {
  if (showMoreCards()) {
    loadMoreBtn.style.display = 'block';
  } else {
    loadMoreBtn.style.display = 'none';
  }
  onAddEventListener();
}

function onAddEventListener() {
  let cardsArrRef = document.querySelectorAll('.film-card');
  for (const card of cardsArrRef) {
    card.addEventListener('click', onClick);
  }
}

function onClick(e) {
  e.preventDefault();
  cardId = +e.currentTarget.id;
  openModalDetails(cardId);
  refs.body.style.overflow = 'hidden';
  refs.scrollUpBtn.style.display = 'none';
}

function openModalDetails(cardId) {
  refs.moreDetail.classList.remove('is-hidden');
  markupMoreDetails(cardId);
  document.addEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.addEventListener('click', closeOnBacdropMoreDetails);
}

function closeOnBacdropMoreDetails(e) {
  closeOnBackdropClick(e, closeMoreDetails);
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
  refs.selectStyled.textContent = 'Genre';
  refs.selectStyled.style.color = '#b7b7b7';
}

function onEscapeMoreDetails(e) {
  if (e.key === 'Escape') {
    closeMoreDetails();
  }
}

async function markupMoreDetails(currentId) {
  try {
    const movieDetails = await fetchMovieDetails(currentId);
    const markup = `<div class="poster"> 
          <img src="https://image.tmdb.org/t/p/w400/${
            movieDetails.smallPoster
          }" class="poster-img" loading="lazy" alt="the poster of the movie you have chosen"/>
        </div><div>
          <h3 class="movie-title">${
            movieDetails.title
          }</h3><div class="movie-info">
            <div class="info">
              <ul class="film-info-list">
                <li><p class="film-info-item-text">Vote / Votes</p></li>
                <li><p class="film-info-item-text">Popularity</p></li>
                <li><p class="film-info-item-text">Genre</p></li>
              </ul>
            </div><div class="params">
              <ul class="film=info-params-list">
                <li><p class="film-info-params-vote"><span class="film-info-params-vote-number">${movieDetails.voteAverage.toFixed(
                  1
                )}</span> / <span class="film-info-params-vote-number">${
      movieDetails.voteCount
    }</span></p>
                </li>
                <li><p class="popularity">${movieDetails.popularity.toFixed(
                  1
                )}</p></li>
                <li><p class="genre">${movieDetails.genres}</p></li>  
              </ul>  
            </div>
          </div><div class="about">
            <p>About</p>
            <p>${movieDetails.overview}</p>
          </div><div class="btn-list">
            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="${currentId}">Watch trailer</button>
            <button class="add-to-my-library-btn btn modal" id="btn-add-to-my-library">Add to my library</button>
          </div>
        </div>`;
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
  refs.trailerModal.classList.remove('is-hidden');
  watchTrailer(cardId);

  document.addEventListener('keydown', onEscape);
  refs.closeTrailerBtn.addEventListener('click', closeModal);
}

async function watchTrailer(cardId) {
  try {
    const trailers = await fetchTrailers(cardId);

    if (trailers.length > 0) {
      const trailerKey = trailers[0].key;

      const trailerContent = showTrailer(trailerKey);
      refs.trailerModalContent.innerHTML = trailerContent;
    } else {
      showErrorModal();
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
    showErrorModal();
  }
}

function showTrailer(trailerKey) {
  if (viewportWidth <= 767) {
    return `
      <iframe width="250" height="160" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  } else {
    return `
      <iframe width="600" height="300" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  }
}

function showErrorModal() {
  const errorContent = `
    <div class="error-mode-content">
      <div class="trailer-error-info">
        <p>OOPS...</p>
        <p>We are very sorry!</p>
        <p>But we couldn't find the trailer.</p>
      </div>
  `;
  trailerErrorImage.classList.remove('is-hidden');
  refs.trailerModalContent.innerHTML = errorContent;
}

function onEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  refs.trailerModal.classList.add('is-hidden');

  refs.trailerModalContent.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
  refs.closeModalBtn.removeEventListener('click', closeModal);
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
  libraryCardList.innerHTML = '';
  let currentFilms = ``;
  try {
    JSON.parse(localArr).forEach(async id => {
      const data = await fetchMovieDetails(id);
      if (data.genres.includes(currentGenre)) {
        const card = await cardMarkup(data.id);
        libraryCardList.innerHTML += card;
        onAddEventListener();
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
