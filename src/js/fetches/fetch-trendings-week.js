import axios from 'axios';


const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';

const fetchTrendingWeekMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  //  response.data.results;

   const weeklyTrendsData = {
    weeklyPage: response.data.page,
    weeklyTrendsList: response.data.results,
    weeklyTrendsPages: response.data.total_pages,
    weeklyTrendsTotal: response.data.total_results,    
   };

  //  return weeklyTrendsData;
   return weeklyTrendsData;

};

export { fetchTrendingWeekMovies };
