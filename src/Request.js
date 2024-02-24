const key = "a970a637774ef9f86b60cf1f62620ec8";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=2&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAdventure: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=adventure&page=2&include_adult=false`,
  requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=2&include_adult=false`,
  requestHistory: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=history&page=2&include_adult=false`,
  requestMusic: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=music&page=2&include_adult=false`,
  requestRomance: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=romance&page=2&include_adult=false`,
  requestWar: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=war&page=2&include_adult=false`,
};

export default requests;
