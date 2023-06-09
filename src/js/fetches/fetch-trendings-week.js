import axios from 'axios';


const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchTrendingWeekMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
  
     const weeklyTrendsData = {
      weeklyPage: response.data.page,
      weeklyTrendsList: response.data.results,
      // weeklyTrendsListYears: response.data.results.release_date,
      weeklyTrendsPages: response.data.total_pages,
      weeklyTrendsTotal: response.data.total_results,    
     };
  
    //  return weeklyTrendsData;
     return weeklyTrendsData;
  } catch (error) {
    console.log(error)
  }

};

export { fetchTrendingWeekMovies };
