import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";
import getMovies from "../services/movie-service";

const NowPlayingPage = () => {
  const nowPlaying = getMovies("now_playing");

  return (
    <>
      <GenreFilter />
      <MovieGrid endpoint={nowPlaying} />
    </>
  );
};

export default NowPlayingPage;
