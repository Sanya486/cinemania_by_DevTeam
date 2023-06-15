import { rateArray } from './rate-markup';
import placeHolder from '../../images/components/post-holder.jpg'


function catalogMarkup(film) {
  const picturePAth = `https://image.tmdb.org/t/p/original`
  try {

const genresArray = [];

  film.genre_ids.forEach(genre => { 
    if(!genre){
    return
  } else{
    return genresArray.push(genre.name)
  }
    })


  const id = film.id;
  const poster = film.poster_path;
  let filmName;
  const genres = genresArray.join(', ');
  const releaseYear = film.release_date;
  let year = '';
  let picture;

  const rate = rateArray(Math.round(film.vote_average));

  if(!poster){
    picture = placeHolder;
  }
  else{
    picture = picturePAth + poster;
  }

  if (!film.title) {
    filmName = film.name;
  } else {
    filmName = film.title;
  }

  if (!releaseYear) {
    year = film.first_air_date.slice(0, 4);
  } else {
    year = releaseYear.slice(0, 4);
  }

  const rateMarkup = rate
    .map(
      elem =>
        `<li class="rating-item">
              <img class="rating-icon" src="${elem}" alt="">
              </li>`
    )
    .join('');

  const moviesListArr = `
    <li class="film-card" id="${id}">
    <div class="img-ovelay"></div>
    <img class ="film-poster" loading="lazy" src="${picture}" alt="${filmName}, ${year}, ${genres}">
    <div class="film-card-info">
    <p class="film-name">${filmName}</p>
    <div class="film-wrap">
      <p class="film-feature">${genres} | ${year}</p>
      <ul class="film-rating">${rateMarkup}</ul>
    </div>
  </div>
</li> `;

    return(moviesListArr);
  } catch (error) {
    console.log(error)
  return  `
<li class="film-card">
<img src="${placeHolder}" alt="">
 </li>`
  }
}

export { catalogMarkup};
