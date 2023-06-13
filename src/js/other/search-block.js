import { cardMarkup } from './card-markup';
import { addYears } from './sort-films-years';

import {fetchTrendingWeekMovies} from '../fetches/fetch-trendings-week';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { fetchTrailers } from '../fetches/fetch-trailer';
import Pagination from 'tui-pagination';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModal: document.querySelector('.trailer-modal-backdrop'),
  trailerModalContent: document.querySelector('.trailer-modal-content'),
  moreDetail: document.querySelector('.modal-film-info'),
  wrap: document.querySelector('.flex'),
  closeModalBtn: document.querySelector('.modal-film-info .close-modal'),
  closeTrailerBtn: document.querySelector('.close-trailer-btn'),
  homeTrendsList: document.querySelector('.home-trends-list'),
  body: document.querySelector('body'),
  scrollUpBtn: document.querySelector('#back-to-top'),
};

let arr = [];
let cardId;
let btnatlibrary;
let localArr = localStorage.getItem('films-id-array');
let cardsArrRef;

const viewportWidth = document.body.clientWidth;

const catalogContainer = document.querySelector('.card-list-search-result');

const yearCatalog = document.querySelector('.year-of-film-search-form');

refs.closeModalBtn.addEventListener('click', closeMoreDetails);

// ------------------ Onload window catalog cards markup ------------------ //

async function displayWeeklyTrendsCatalog (page) {
  const trendData = await fetchTrendingWeekMovies();
// console.log(trendData);
  const trendFilmList = trendData.weeklyTrendsList;
  // console.log(trendFilmList);
  const catalogMovies = await Promise.all(
    trendFilmList.map(async (movie) => {
      // addYears();
      // console.log(addYears);
      const card = await cardMarkup(movie.id);
      return card;
    })
  );    
  if (catalogContainer) {
    catalogContainer.innerHTML = catalogMovies.join('');
  }
  if (yearCatalog) {
    yearCatalog.innerHTML = addYears();
  }

  onAddEventListener()

  pagination(
    {totalItems: trendData.weeklyTrendsTotal,
      itemsPerPage: trendData.weeklyTrendsList.length,
      fetchCallBack: OnFetchTrendingWeeks,
    })

  // console.log(catalogContainer);
};

window.addEventListener('load', displayWeeklyTrendsCatalog);

// ------------------ Query catalog cards markup by keyword ------------------ //
import {fetchSearch} from '../fetches/fetch-search';
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

const searchForm = document.querySelector('.search-form');
const searchNameInput = document.querySelector('.input-film-name-search-form')

const onSubmit = (event) => {
  event.preventDefault();
  const searchInputValue = searchNameInput.value.trim();
  console.log(searchInputValue);

  if (searchInputValue !== '') {
    displayQueryFilmCatalog(searchInputValue);
      };
}
searchForm.addEventListener('submit', onSubmit);

const displayQueryFilmCatalog  = async (inputValue) => {
  const queryData = await fetchSearch(inputValue, 1);
  console.log(queryData);
  const catalogMovies = await Promise.all(
    queryData.results.map(async (movie) => {

      // const year = new Date().getFullYear();
      // console.log(year);

      const card = await cardMarkup(movie.id);
      return card;
    })
  ); 
  if (catalogContainer) {
    catalogContainer.innerHTML = catalogMovies.join('');
  }
  console.log(queryData.total_results)

  pagination(
    {totalItems: +queryData.total_results,
      itemsPerPage: +queryData.results.length,
      fetchCallBack: OnSearchFetch,
    })


}

function pagination ({totalItems, itemsPerPage, fetchCallBack = un}) {
  
  const refs = {
      tuiPaginationEl: document.querySelector('#pagination')
  }

  refs.tuiPaginationEl.innerHTML = "";

  function formatPageNumber(pageNumber) {
      return pageNumber.toString().padStart(2, '0');
  }  


  const options = {
      totalItems,
      itemsPerPage,
      visiblePages: 3,
      page: 1,
      centerAlign: false,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
          page: function (data) {
              const currentPage = data.page; 
              const pageNumber = formatPageNumber(currentPage); 
              return `<span class="tui-page-btn btn">${pageNumber}</span>`;
            },
        currentPage: function (data) {
          const cuurentPage = data.page;
          const pageNumber = formatPageNumber(cuurentPage); 
          return `<strong class="tui-page-btn tui-is-selected btn">${pageNumber}</strong>`;
        },    

        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<div class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<div class="tui-ico-{{type}}">{{type}}</div>' +
          '</div>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip btn">' +
            '<span class="tui-ico-ellip">...</span>' +
          '</a>'
      },
      
    };
    
    const pagination = new Pagination('pagination', options);

    pagination.on('afterMove', fetchCallBack);
  }

async function OnFetchTrendingWeeks (eventData) {
  const trendData = await fetchTrendingWeekMovies(eventData.page);
  const trendFilmList = trendData.weeklyTrendsList;

  const catalogMovies = await Promise.all(
    trendFilmList.map(async (movie) => {
      // addYears();
      // console.log(addYears);
      const card = await cardMarkup(movie.id);
      return card;
    })
  );    
  if (catalogContainer) {
    catalogContainer.innerHTML = catalogMovies.join('');
  }
  // if (yearCatalog) {
  //   yearCatalog.innerHTML = addYears();
  // }
  scrollUp();
}

async function OnSearchFetch (eventData){
  const inputValue = searchNameInput.value.trim() 
  const queryData = await fetchSearch(inputValue, eventData.page);
  // console.log(queryData);
  const catalogMovies = await Promise.all(
    queryData.results.map(async (movie) => {

      // const year = new Date().getFullYear();
      // console.log(year);

      const card = await cardMarkup(movie.id);
      return card;
    })
  ); 
  if (catalogContainer) {
    catalogContainer.innerHTML = catalogMovies.join('');
  }
  scrollUp()
}

function scrollUp () {
  if (viewportWidth >= 1280){
    scroll({top: 880, behavior: 'smooth'})
  }
  else {
    scroll({top: 560, behavior: 'smooth'})
  }
}
// ------------------ Query catalog cards markup by keyword ------------------ //

function onAddEventListener() {
  cardsArrRef = document.querySelectorAll('.film-card');
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
  refs.moreDetail.addEventListener('click', closeOnBacdropMoreDetails)
}

function closeOnBacdropMoreDetails (e) {
  closeOnBackdropClick(e, closeMoreDetails)
}

function closeOnBackdropClick (e, callback){
  if (e.target !== e.currentTarget){
    return 
  }
  else {
    callback();
  }
}

function closeMoreDetails() {
  refs.moreDetail.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.removeEventListener('click', closeOnBacdropMoreDetails)
  refs.body.style.overflow = 'auto';
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
          <img src="https://image.tmdb.org/t/p/original/${
            movieDetails.smallPoster
          }" class="poster-img" alt="the poster of the movie you have chosen"/>
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
      refs.trailerModalContent.innerHTML = `<div class="trailer-modal-content">${trailerContent}</div>`;
    } else {
      const errorContent = showError();
      refs.trailerModal.innerHTML = `<div class="trailer-modal-content">${errorContent}</div>`;
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
}

function showTrailer(trailerKey) {
  return `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}

function showError() {
  return `
    <div class="trailer-error-info">
      <p>OOPS...</p>
      <p>We are very sorry!</p>
      <p>But we couldn't find the trailer.</p>
    </div>
    <picture>
      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" 
              media="(max-width: 320px)">
      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" 
              media="(max-width: 768px)">
      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" 
              media="(min-width: 769px)">
      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">
    </picture>
    </div>
  `;
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
  btnatlibrary.textContent = text
}