// import axios from 'axios';

import starFull from '../../images/icons/stars/star-full.svg';
import starHalf from '../../images/icons/stars/star-half.svg';
import starEmpty from '../../images/icons/stars/star-empty.svg';

import { fetchMovieDetails } from '../fetches/fetch-movie-details';

/* Function expects film's ID and returns finished markup of film's card */

  const cardMarkup = async (movieId) => {

    const details = await fetchMovieDetails(movieId)
      .then(responce => {
        // console.log(responce);
    
        const fetchData = {
          id: responce.id,
          smallPoster: responce.smallPoster,
          title: responce.title,
          genres: responce.genres,
          year: responce.date.slice(0, 4),
          rate: Math.round(responce.voteAverage),
        };
    
        // console.log (fetchData);
    
        let array = ['', '', '', '', ''];
    
        // const valueChoose = {
        //   full: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">
        //   <path fill="url(#a)" d="M13.852 15.875a.563.563 0 0 1-.33-.106L9 12.491 4.48 15.77a.562.562 0 0 1-.863-.636L5.379 9.91.81 6.776a.562.562 0 0 1 .316-1.026h5.639L8.465.513a.563.563 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027L12.622 9.91l1.762 5.222a.564.564 0 0 1-.532.743Z"/>
        //   <defs>
        //     <linearGradient id="a" x1="2.625" x2="13.876" y1="1.25" y2="16.25" gradientUnits="userSpaceOnUse">
        //       <stop stop-color="#F84119"/>
        //       <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>
        //     </linearGradient>
        //   </defs>
        // </svg>`,
        //   half: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        //   <path stroke="url(#a)" stroke-linejoin="round" d="M15 6.5H9.625L8 1.5l-1.625 5H1l4.375 3-1.688 5L8 11.375l4.313 3.125-1.688-5L15 6.5Z"/>
        //   <path fill="url(#b)" d="M8 1.5v9.875L3.687 14.5l1.688-5L1 6.5h5.375L8 1.5Z"/>
        //   <defs>
        //     <linearGradient id="a" x1="2.71" x2="11.98" y1="2.429" y2="14.855" gradientUnits="userSpaceOnUse">
        //       <stop stop-color="#F84119"/>
        //       <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>
        //     </linearGradient>
        //     <linearGradient id="b" x1="1.855" x2="10.8" y1="2.429" y2="8.424" gradientUnits="userSpaceOnUse">
        //       <stop stop-color="#F84119"/>
        //       <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>
        //     </linearGradient>
        //   </defs>
        // </svg>`,
        //   empty: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none">
        //   <path stroke="url(#a)" stroke-linejoin="round" d="M15 5.5H9.625L8 .5l-1.625 5H1l4.375 3-1.688 5L8 10.375l4.313 3.125-1.688-5L15 5.5Z"/>
        //   <defs>
        //     <linearGradient id="a" x1="2.71" x2="11.98" y1="1.429" y2="13.855" gradientUnits="userSpaceOnUse">
        //       <stop stop-color="#F84119"/>
        //       <stop offset="1" stop-color="#F89F19" stop-opacity=".68"/>
        //     </linearGradient>
        //   </defs>
        // </svg>`,
        // };

        const valueChoose = {
          full: starFull,
          half: starHalf,
          empty: starEmpty,
        }
    
        console.log(valueChoose.half, valueChoose.empty);
    
        const newArray = array.map(() => {
          if (fetchData.rate !== 0) {
            if (fetchData.rate >= 2) {
              fetchData.rate -= 2;
              return valueChoose.full;
            } else if (fetchData.rate === 1) {
              fetchData.rate -= 1;
              return valueChoose.half;
            }
          } else {
            return valueChoose.empty;
          }
        });
    
        // console.log(newArray);
    
    
        const rateMarkup = newArray
          .map(
            elem =>
              // `<li class="rating-item">
              //  <img class="rating-icon" src="./images/icons/stars/${elem}" alt="">
              //  </li>
              //  `
    
              `<li class="rating-item">
               <img class="rating-icon" src="${elem}" alt="">
               </li>`
              //  `<li class="rating-item">
              //  ${elem}
              //  </li>`
      
          )
          .join('');
    
        // console.log(rateMarkup);
    
        const fullMarkup = 
        `
          <div class="film-card" id="${fetchData.id}">
          <a class="card-link" href="">
          <div class="img-ovelay"></div>
          <img class ="film-poster" src="https://image.tmdb.org/t/p/original${fetchData.smallPoster}" alt="${fetchData.title}, ${fetchData.year}, ${fetchData.genres}">
          <div class="film-card-info">
          <p class="film-name">${fetchData.title}</p>
          <div class="film-wrap">
            <p class="film-feature">${fetchData.genres} | ${fetchData.year}</p>
            <ul class="film-rating">
    
            ${rateMarkup}
            </ul>
            </div>
          </div>
        </a>
        </div>
        `;
    
        // console.log (fullMarkup);
    
        return fullMarkup;
    
      }
      )
      .catch(error => console.log(error));
    return details;
    };

    export {cardMarkup};