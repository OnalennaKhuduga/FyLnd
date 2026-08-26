import { Box, Text } from "@chakra-ui/react";
import { MovieBase } from "../types/movie";
import getImage from "../utils/getImage";
import MovieImage from "./MovieImage";
import MoviePlaceholder from "./MoviePlaceholder";

interface Props {
  movie: MovieBase;
}

const MovieDetailCard = ({ movie }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.15s ease-in-out",
        cursor: "pointer",
      }}
      w="100%"
      h="100%"
    >
      <Box position="relative" w="100%" h="100%">
        <MovieImage
          src={movie.backdrop_path ? getImage(movie.backdrop_path) : undefined}
          placeholder={<MoviePlaceholder />}
        />

        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          borderRadius={10}
          padding={2}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          bg="rgba(0, 0, 0, 0.3)"
          opacity={movie.backdrop_path ? "0" : "1"}
          _hover={{
            opacity: "1",
          }}
          transition="opacity 0.15s ease-in-out"
        >
          <Text fontWeight="bold">{movie.title}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetailCard;
