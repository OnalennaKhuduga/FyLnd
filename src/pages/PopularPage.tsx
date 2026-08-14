import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const PopularPage = () => {
  const popular = getMovies("popular");

  return (
    <>
      <GenreFilter />
      <MovieGrid endpoint={popular} />
    </>
  );
};

export default PopularPage;
