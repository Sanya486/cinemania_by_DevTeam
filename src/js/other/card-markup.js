import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import {rateArray} from './rate-markup';

/* Function expects film's ID and returns finished markup of film's card */

  const cardMarkup = async (movieId) => {

    const details = await fetchMovieDetails(movieId)
      .then(responce => { 
        const fetchData = {
          id: responce.id,
          smallPoster: responce.smallPoster,
          title: responce.title,
          genres: responce.genres,
          year: responce.date.slice(0, 4),
          rate: Math.round(responce.voteAverage),
        };
    
        const quaryRate = rateArray(fetchData.rate);

        const rateMarkup = quaryRate
          .map(
            elem =>
              `<li class="rating-item">
               <img class="rating-icon" src="${elem}" alt="">
               </li>`
          )
          .join('');
    
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
    
        return fullMarkup;
    
      }
      )
      .catch(error => console.log(error));
    return details;
    };

    export {cardMarkup};