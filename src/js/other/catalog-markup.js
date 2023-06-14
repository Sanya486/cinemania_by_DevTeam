import { fetchTrendingWeekMovies } from '../fetches/fetch-trendings-week';
import { fetchGenres } from '../fetches/fetch-genres';
import { rateArray } from './rate-markup';

async function catalogMarkup() {
  try {
    const moviesList = (await fetchTrendingWeekMovies()).weeklyTrendsList;
    console.log(moviesList);
    let moviesListArr = '';

    for (const film of moviesList) {
      try {
        const id = film.id;
        const poster = film.poster_path;
        const title = film.title;
        const name = film.name;
        let filmName = '';
        const genres = film.genre_ids;
        const releaseYear = film.release_date;
        let year = '';
        const rate = rateArray(Math.round(film.vote_average));

        if (!title) {
          filmName = name;
        } else {
          filmName = title;
        }

        if (!releaseYear) {
          year = '';
        } else {
          year = releaseYear.slice(0, 4);
        }

        console.log([poster, filmName, genres, year, rate]);

        const rateMarkup = rate
          .map(
            elem =>
              `<li class="rating-item">
                   <img class="rating-icon" src="${elem}" alt="">
                   </li>`
          )
          .join('');

        moviesListArr += `
            <div class="film-card" id="${id}">
            <a class="card-link" href="">
            <div class="img-ovelay"></div>
            <img class ="film-poster" src="https://image.tmdb.org/t/p/original${poster}" alt="${filmName}, ${year}, ${genres}">
            <div class="film-card-info">
            <p class="film-name">${filmName}</p>
            <div class="film-wrap">
              <p class="film-feature">${genres} | ${year}</p>
              <ul class="film-rating">
      
              ${rateMarkup}
              </ul>
              </div>
            </div>
          </a>
          </div>
            `;
      } catch (error) {
        console.log(error);
      }
    }
    return(moviesListArr);
  } catch (error) {}
}

export { catalogMarkup };
