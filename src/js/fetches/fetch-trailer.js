import axios from 'axios';
const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

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
