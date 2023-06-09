import { fetchMovieDetails } from './fetches/fetch-movie-details.js';

fetchMovieDetails(54235)
  .then(responce => {
    console.log(responce);
    let fixedRating = Math.round(responce.voteAverage);
    let array = ['', '', '', '', ''];

    const valueChoose = {
      full: './images/icons/stars/star-full.svg',
      half: './images/icons/stars/star-half.svg',
      empty: './images/icons/stars/star-empty.svg',
    };

    const newArray = array.map(star => {
      if (fixedRating !== 0) {
        if (fixedRating > 2) {
          fixedRating -= 2;
          return valueChoose.full;
        } else if (fixedRating == 1) {
          fixedRating -= 1;
          return valueChoose.half;
        }
      } else {
        return valueChoose.empty;
      }
    }
    );
    console.log(newArray);
    return newArray;
  })
  .catch(error => console.log(error));