type Endpoints = "discover" | "now_playing" | "popular" | "top_rated";

const endpointMap: Record<string, string> = {
  discover: "/discover/movie",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
};

const getMovies = (endpoint: Endpoints): string => {
  return endpointMap[endpoint];
};

export default getMovies;
