// import flatpickr from "flatpickr";

// flatpickr(".flatpickr-input", {
//     dateFormat: "Y",
//     minDate: "2015",
//     maxDate: "2023",
//     static: true,
//     onOpen: function(selectedDates, dateStr, instance) {
//       const dropdown = instance.calendarContainer;
//       dropdown.style.display = "block";
//     },
//     onClose: function(selectedDates, dateStr, instance) {
//       const dropdown = instance.calendarContainer;
//       dropdown.style.display = "none";
//     },
//     onChange: function(selectedDates, dateStr, instance) {
//       console.log("Обраний рік:", dateStr);
//     }
//   });
// import { cardMarkup } from './card-markup';
// import { fetchMovieDetails } from '../fetches/fetch-movie-details';
// import { fetchSearch } from '../fetch/fetch-search';
// import Notiflix from 'notiflix';

// const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

// const container = document.querySelector('.card-list-search-result');
// const searchForm = document.querySelector('#search-form');

// // Function to load search results
// const loadMovies = async (inputYear) => {
//   try {
//     const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
//     const data = await response.json();
//     const { results } = data;

//     // Step 2: Destructure the response information
//     const filteredResults = results.filter(result => {
//       const releaseYear = Number(result.release_date.slice(0, 4));
//       return releaseYear === inputYear;
//     });

//     // Step 4: Map to an array
//     const movieIds = filteredResults.map(result => result.id);

//     // Step 5: Generate markup for each ID
//     const movieMarkup = await Promise.all(movieIds.map(async id => {
//       const movieDetails = await fetchMovieDetails(id);
//       return cardMarkup(movieDetails.id);
//     }));

//     // Step 6: Insert markup into the DOM
//     container.innerHTML = '';
//     movieMarkup.forEach(card => {
//       const liElement = document.createElement('li');
//       liElement.className = 'card-item-search-result';
//       liElement.innerHTML = card;
//       container.appendChild(liElement);
//     });
//   } catch (error) {
//     console.log('Error:', error);
//     Notiflix.Notify.Failure('An error occurred. Please try again.');
//   }
// };

// // Event handler for search form submission
// searchForm.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const inputYear = Number(document.querySelector('.year-of-film-search-form').value);

//   try {
//     const searchResults = await fetchSearch(inputYear);
//     const movieIds = searchResults.map(result => result.id);
//     const movieMarkup = await Promise.all(movieIds.map(async id => {
//       const movieDetails = await fetchMovieDetails(id);
//       return cardMarkup(movieDetails.id);
//     }));
//     container.innerHTML = '';
//     movieMarkup.forEach(card => {
//       const liElement = document.createElement('li');
//       liElement.className = 'card-item-search-result';
//       liElement.innerHTML = card;
//       container.appendChild(liElement);
//     });
//   } catch (error) {
//     console.log('Error:', error);
//     Notiflix.Notify.Failure('An error occurred. Please try again.');
//   }
// });


  
// const inputFilmName = document.querySelector('.input-film-name-search-form');
// const inputCloseSvg = document.querySelector('.input-close-svg');
// const searchForm = document.querySelector('.film-name-search-form');

// // 
// inputFilmName.addEventListener('input', () => {
//   const inputValue = inputFilmName.value.trim();

//   if (inputValue !== '') {
//     inputCloseSvg.classList.remove('hidden');
//   } else {
//     inputCloseSvg.classList.add('hidden');
//   }
// });

// // 
// inputCloseSvg.addEventListener('click', () => {
//   inputFilmName.value = '';
//   inputCloseSvg.classList.add('hidden');
// });

// 
// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//  
//   const searchQuery = inputFilmName.value.trim();

//   // Виконати необхідні дії зі значенням пошукового запиту, наприклад, відправити на сервер або виконати пошук
//   // Ваш код тут

//   // Очистити значення інпута
//   inputFilmName.value = '';
//   inputCloseSvg.classList.add('hidden');
// });

// import axios from 'axios';

// const API_KEY = 'YOUR_API_KEY'; // Встановіть свій API ключ TMDb

// const getMovieTrailer = async (movieId) => {
//   try {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });

//     const videos = response.data.results;

//     // Знайдено відео трейлерів
//     if (videos.length > 0) {
//       // Виберіть перший трейлер
//       const trailer = videos.find((video) => video.type === 'Trailer');

//       if (trailer) {
//         const trailerKey = trailer.key;
//         const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

//         // Виконайте необхідні дії з посиланням на трейлер
//         console.log(trailerUrl);
//       } else {
//         // Не знайдено відео трейлерів
//         console.log('No trailer found');
//       }
//     } else {
//       // Не знайдено відео трейлерів
//       console.log('No trailer found');
//     }
//   } catch (error) {
//     console.log('Error:', error);
//   }
// };

// getMovieTrailer(cardId);



// ------------------------- Working code !!! ----------------------------- //

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
console.log(trendData);
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
      itemsPerPage: trendData.weeklyTrendsList.length
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
  const inputValue = searchNameInput.value.trim();
  console.log(inputValue);

  if (inputValue !== '') {
    displayQueryFilmCatalog(inputValue);
      };
     
}
searchForm.addEventListener('submit', onSubmit);

const displayQueryFilmCatalog  = async () => {
  const queryData = await fetchSearch(inputValue, );
  console.log(queryData);
  const catalogMovies = await Promise.all(
    queryData.map(async (movie) => {

      const year = new Date().getFullYear();
      console.log(year);

      const card = await cardMarkup(movie.id);
      return card;
    })
  ); 
  if (catalogContainer) {
    catalogContainer.innerHTML = catalogMovies.join('');
  }
}

function pagination ({totalItems, itemsPerPage}) {
  const refs = {
    tuiPaginationEl: document.querySelector('#pagination')
}

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

  pagination.on('afterMove', async function(eventData) {
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
      if (yearCatalog) {
        yearCatalog.innerHTML = addYears();
      }

      if (viewportWidth >= 1280){
        scroll({top: 880, behavior: 'smooth'})
      }
      else {
        scroll({top: 560, behavior: 'smooth'})
      }
      }
      
);
}

// ------------------ Query catalog cards markup by keyword ------------------ //

