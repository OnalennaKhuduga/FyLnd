export type MovieCategory =
  | "discover"
  | "now_playing"
  | "popular"
  | "top_rated";

const endpointMap: Record<string, string> = {
  discover: "/discover/movie",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
};

const getMovieEndpoint = (
  category: MovieCategory,
  genreId?: number,
): string => {
  if (!genreId) return endpointMap[category];

  const defaultEndpoint = endpointMap["discover"];
  switch (category) {
    case "discover":
      return `${defaultEndpoint}?with_genres=${genreId}`;

    case "popular":
      return `${defaultEndpoint}?with_genres=${genreId}&sort_by=popularity.desc`;

    case "top_rated":
      return `${defaultEndpoint}?with_genres=${genreId}&sort_by=vote_average.desc`;

    case "now_playing":
      return `${defaultEndpoint}?with_genres=${genreId}&sort_by=primary_release_date.desc`;

    default:
      return defaultEndpoint;
  }
};

export default getMovieEndpoint;
