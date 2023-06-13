import axios from 'axios';


const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error;
  }
  
};

export { fetchTrendingMovies };
