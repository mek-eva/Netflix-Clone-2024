const API_KEY =process.env.REACT_APP_API_KEY; 
const requests = {
  fetchTrending: `/treding/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixoriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `discover/movies?api_key=${API_KEY}$with_genres=28`,
  fetchComedyMovies: `discover/movies?api_key=${API_KEY}$with_genres=35`,
  fetchHorrorMovies: `discover/movies?api_key=${API_KEY}$with_genres=27`,
  fetchRomanceMovies: `discover/movies?api_key=${API_KEY}$with_genres=10749`,
  fetchDocumentaries: `discover/movies?api_key=${API_KEY}$with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};


export default requests;