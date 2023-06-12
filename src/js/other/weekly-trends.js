import { fetchTrendingMovies } from '../fetches/fetch-trendings';
import { cardMarkup } from './card-markup';

const displayWeeklyTrends = async () => {
  const movies = await fetchTrendingMovies();

  const firstThreeMovies = movies.slice(0, 3);

  const movieCards = await Promise.all(
    firstThreeMovies.map(async (movie) => {
      const card = await cardMarkup(movie.id);
      return card;
    })
  );

  const homeTrendsList = document.querySelector('.home-trends-list');
  if (homeTrendsList) {
    homeTrendsList.innerHTML = movieCards.join('');
  }
};

displayWeeklyTrends();