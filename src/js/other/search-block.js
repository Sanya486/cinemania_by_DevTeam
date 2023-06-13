import { cardMarkup } from './card-markup';
// import { fetchMovieDetails } from '../fetches/fetch-movie-details';

import { addYears } from './sort-films-years';

import {fetchTrendingWeekMovies} from '../fetches/fetch-trendings-week';

import Pagination from 'tui-pagination';

const viewportWidth = document.body.clientWidth;



const catalogContainer = document.querySelector('.card-list-search-result');

const yearCatalog = document.querySelector('.year-of-film-search-form');


// ------------------ Onload window catalog cards markup ------------------ //

const displayWeeklyTrendsCatalog = async (page) => {
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


function pagination ({totalItems, itemsPerPage, fetchCallBack}) {
  
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

