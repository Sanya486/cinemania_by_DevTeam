import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';
const URL = 'https://api.themoviedb.org/3/search/movie?';

const fetchSearch = async (keyword, year, page = 1) => {
  if (!keyword && !year) {
    Notiflix.Notify.failure(
      'Please enter the title of the movie, the year of release or both.'
    );
    return [];
  }

  const params = {
    api_key: API_KEY,
    page,
  };

  if (keyword) {
    params.query = keyword;
  }

  if (year) {
    params.year = year;
  }

  const response = await axios.get(URL, {
    params,
  });
  return response.data.results;
};

export { fetchSearch }; 
