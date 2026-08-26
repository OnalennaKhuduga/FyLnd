import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { MovieBase } from "../types/movie";
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";
import MovieImage from "./MovieImage";
import MoviePlaceholder from "./MoviePlaceholder";

interface Props {
  movie: MovieBase;
}

const MovieDetailCardMobile = ({ movie }: Props) => {
  return (
    <Flex w="100%" h="100%">
      <Box maxW="100px" h="100%" w="100%">
        <MovieImage
          src={movie.poster_path ? getImage(movie.poster_path) : undefined}
          placeholder={<MoviePlaceholder />}
        />
      </Box>

      <VStack padding={2} align="flex-start">
        <Heading fontSize="xl">
          {movie.title}{" "}
          <CriticScore score={parseInt(movie.vote_average.toFixed(1))} />
        </Heading>
        <Text color="whiteAlpha.600">{movie.release_date}</Text>
      </VStack>
    </Flex>
  );
};

export default MovieDetailCardMobile;
