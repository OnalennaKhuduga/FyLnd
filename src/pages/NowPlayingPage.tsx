import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";

const NowPlayingPage = () => {
  return (
    <>
      <GenreFilter />
      <MovieGrid category={"now_playing"} />
    </>
  );
};

export default NowPlayingPage;
