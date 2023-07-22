import axios from 'axios';
import Notiflix from 'notiflix';
import { API_KEY } from '../utils/api-key';


const URL = 'https://api.themoviedb.org/3/search/movie?';

const fetchSearch = async (keyword, page = 1, year) => {
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

  if (year) {
    params.year = year;
  }

  const response = await axios.get(URL, {
    params,
  });
  return response.data;
};

export { fetchSearch }; 
