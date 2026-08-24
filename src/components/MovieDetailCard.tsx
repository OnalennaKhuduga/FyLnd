import { Box, Image, Text } from "@chakra-ui/react";
import { MovieBase } from "../types/movie";
import getImage from "../utils/getImage";

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
    >
      <Box position="relative">
        <Image
          src={getImage(movie.backdrop_path)}
          boxSize="cover"
          borderRadius={10}
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
          opacity="0"
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
