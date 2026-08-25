import { Show, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import MovieDetailDesktop from "./MovieDetailDesktop";
import MovieDetailMobile from "./MovieDetailMobile";

const MovieDetailPage = () => {
  const { id } = useParams();
  if (!id) return null;

  const movieId = Number(id);
  const {
    data,
    isLoading: isMovieLoading,
    error: movieError,
  } = useMovie(movieId);
  const { data: similarMovies, isLoading: isSimilarMovieLoading } =
    useSimilarMovies(movieId);

  if (isMovieLoading || isSimilarMovieLoading) return <Spinner />;
  if (movieError || !data) return null;

  return (
    <>
      <Show below="lg">
        <MovieDetailMobile
          movieId={movieId}
          movie={data!}
          similarMovies={similarMovies?.results ?? []}
        />
      </Show>
      <Show above="lg">
        <MovieDetailDesktop
          movieId={movieId}
          movie={data}
          similarMovies={similarMovies?.results ?? []}
        />
      </Show>
    </>
  );
};

export default MovieDetailPage;
