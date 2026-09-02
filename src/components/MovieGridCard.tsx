import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types/movie";
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";
import MovieImage from "./MovieImage";
import MoviePlaceholder from "./MoviePlaceholder";
import WatchlistButton from "./WatchlistButton";

interface Props {
  movie: Movie;
}

const MovieGridCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      maxW="300px"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.15s ease-in-out",
        cursor: "pointer",
      }}
      h="100%"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <Box flex="3" w="100%" h="100%">
        <MovieImage
          src={movie.poster_path ? getImage(movie.poster_path) : undefined}
          placeholder={<MoviePlaceholder />}
        />
      </Box>

      <VStack align="flex-start" flex="1" padding={1} spacing={0}>
        <HStack w="100%" justifyContent="space-between">
          <HStack justifyContent="space-between">
            <Box>
              <Heading fontSize="md">{movie.title}</Heading>
            </Box>
            <Box>
              <CriticScore score={parseInt(movie.vote_average.toFixed(1))} />
            </Box>
          </HStack>

          <Box>
            <WatchlistButton movie={movie} variant="icon" />
          </Box>
        </HStack>
        <Text color="whiteAlpha.700">
          {movie.release_date.replaceAll("-", " ")}
        </Text>
      </VStack>
    </Flex>
  );
};

export default MovieGridCard;
