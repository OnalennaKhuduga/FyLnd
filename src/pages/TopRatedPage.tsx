import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";

const TopRatedPage = () => {
  return (
    <>
      <GenreFilter />
      <MovieGrid category={"top_rated"} />
    </>
  );
};

export default TopRatedPage;
