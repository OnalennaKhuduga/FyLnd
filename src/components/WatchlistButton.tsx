import { Button, Icon } from "@chakra-ui/react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import useMovieWatchlistStore from "../stores/useMovieWatchlistStore";
import { MovieBase } from "../types/movie";

interface Props {
  movie: MovieBase;
  variant?: "icon" | "detail";
}

const WatchlistButton = ({ movie, variant = "detail" }: Props) => {
  const watchlistQuery = useMovieWatchlistStore();
  const { addMovie, removeMovie, isInWatchlist, watchlist } = watchlistQuery;

  const inWatchlist = watchlist.some((m) => m.id === movie.id);

  const onWatchlistToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    isInWatchlist(movie.id) ? removeMovie(movie.id) : addMovie(movie);
  };

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        padding={0}
        colorScheme="pink"
        fontSize="xl"
        onClick={(e) => onWatchlistToggle(e)}
      >
        <Icon as={inWatchlist ? FaBookmark : FaRegBookmark} />
      </Button>
    );
  }

  return (
    <Button
      w="100%"
      variant="outline"
      colorScheme={inWatchlist ? "red" : "green"}
      fontSize="xl"
      leftIcon={<Icon as={inWatchlist ? FaCircleMinus : FaCirclePlus} />}
      onClick={(e) => onWatchlistToggle(e)}
    >
      {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </Button>
  );
};

export default WatchlistButton;
