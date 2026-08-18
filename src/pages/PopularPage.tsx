import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";

const PopularPage = () => {
  return (
    <>
      <GenreFilter />
      <MovieGrid category={"popular"} />
    </>
  );
};

export default PopularPage;
