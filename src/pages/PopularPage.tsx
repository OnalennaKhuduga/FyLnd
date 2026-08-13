import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const PopularPage = () => {
  const popular = getMovies("popular");

  return <MovieGrid endpoint={popular} />;
};

export default PopularPage;
