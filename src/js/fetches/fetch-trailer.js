import axios from 'axios';
import { API_KEY } from '../utils/api-key';


const fetchTrailers = async movieId => {
  try {
    const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  return response.data.results;
  } catch (error) {
    console.log(error)
  }
};

export { fetchTrailers };
