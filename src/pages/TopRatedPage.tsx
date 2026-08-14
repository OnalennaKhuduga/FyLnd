import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const TopRatedPage = () => {
  const topRated = getMovies("top_rated");

  return (
    <>
      <GenreFilter />
      <MovieGrid endpoint={topRated} />
    </>
  );
};

export default TopRatedPage;
