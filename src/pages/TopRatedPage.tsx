import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const TopRatedPage = () => {
  const topRated = getMovies("top_rated");

  return <MovieGrid endpoint={topRated} />;
};

export default TopRatedPage;
