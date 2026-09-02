import {
  Badge,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import genres from "../data/genres";
import { Movie } from "../types/movie";
import formatDate from "../utils/formatDate";
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";
import MovieImage from "./MovieImage";
import MoviePlaceholder from "./MoviePlaceholder";
import WatchlistButton from "./WatchlistButton";

interface Props {
  movie: Movie;
}

const MovieSearchCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      w="100%"
      align="stretch"
      borderRadius={5}
      key={movie.id}
      onClick={() => navigate(`/movie/${movie.id}`)}
      _hover={{ cursor: "pointer" }}
    >
      {/* backdrop image */}
      <Box width="25%" position="relative">
        <MovieImage
          src={movie.backdrop_path ? getImage(movie.backdrop_path) : undefined}
          placeholder={<MoviePlaceholder />}
        />

        <Box
          position="absolute"
          top="1"
          right="1"
          borderRadius={5}
          bgGradient="linear(to-l, blackAlpha.400, blackAlpha.100)"
        >
          <WatchlistButton movie={movie} variant="icon" />
        </Box>
      </Box>

      {/* movie metadata */}
      <VStack align="start" fontSize="sm" spacing={4}>
        <Box>
          <Heading fontSize="3xl">
            {movie.title}{" "}
            <CriticScore score={parseInt(`${movie.vote_average}`)} />
          </Heading>
          <Text color="gray">{formatDate(new Date(movie.release_date))}</Text>
        </Box>
        <HStack>
          {movie.genre_ids.map((g) => (
            <Badge colorScheme="white" key={g}>
              {genres.get(g)}
            </Badge>
          ))}
        </HStack>
      </VStack>
    </Stack>
  );
};

export default MovieSearchCard;
