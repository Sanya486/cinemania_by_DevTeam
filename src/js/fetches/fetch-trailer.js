import axios from 'axios';
const API_KEY = "21fa942e61d6ee3418d7f0261882e82d"

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
