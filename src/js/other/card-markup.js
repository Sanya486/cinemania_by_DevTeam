// import axios from 'axios';

import starFull from '../images/icons/stars/star-full.svg';
import starHalf from '../images/icons/stars/star-half.svg';
import starEmpty from '../images/icons/stars/star-empty.svg';

import { fetchMovieDetails } from './fetches/fetch-movie-details.js';

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
    //   full: 'star-full.svg',
    //   half: 'star-half.svg',
    //   empty: 'star-empty.svg',
    // };

    const valueChoose = {
      full: starFull,
      half: starHalf,
      empty: starEmpty,
    };


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
    }
    );
    console.log(newArray);
    return newArray;
  })
  .catch(error => console.log(error));


return details;
};

// cardMarkup(12573);
// console.log(cardMarkup(12573))

export {cardMarkup};

