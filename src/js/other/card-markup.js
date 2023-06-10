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
    
        const valueChoose = {
          full: starFull,
          half: starHalf,
          empty: starEmpty,
        };
    
        console.log(valueChoose.half, valueChoose.empty);
    
        const newArray = array.map(() => {
          if (fetchData.rate !== 0) {
            if (fetchData.rate > 2) {
              fetchData.rate -= 2;
              return valueChoose.full;
            } else if (fetchData.rate == 1) {
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
              `<li class="rating-item">
               <img class="rating-icon" src="${elem}" alt="">
               </li>
               `
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