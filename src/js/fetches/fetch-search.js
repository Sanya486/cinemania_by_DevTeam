import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = "21fa942e61d6ee3418d7f0261882e82d"
const URL = 'https://api.themoviedb.org/3/search/movie?';

const fetchSearch = async (keyword, page = 1) => {
  if (!keyword) {
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

  // if (year) {
  //   params.year = year;
  // }

  const response = await axios.get(URL, {
    params,
  });
  return response.data;
};

export { fetchSearch }; 
