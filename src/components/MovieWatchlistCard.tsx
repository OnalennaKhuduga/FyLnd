import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import useMovieWatchlistStore from "../stores/useMovieWatchlistStore";
import { MovieBase } from "../types/movie";
import getImage from "../utils/getImage";
import summarizeText from "../utils/summarizeText";
import CriticScore from "./CriticScore";
import MovieImage from "./MovieImage";
import MoviePlaceholder from "./MoviePlaceholder";
interface Props {
  movie: MovieBase;
}

const MovieWatchlistCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  const removeMovie = useMovieWatchlistStore((s) => s.removeMovie);
  const onRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    removeMovie(movie.id);
  };

  return (
    <Box
      width={{ base: "170px", md: "220px" }}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in-out",
      }}
      h="100%"
      cursor="pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <Box
        position="relative"
        h="100%"
        borderRadius={5}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="250px"
      >
        {/* Poster Image */}
        <Box h="100%">
          <MovieImage
            src={
              movie.poster_path
                ? getImage(movie.poster_path, "w500")
                : undefined
            }
            placeholder={<MoviePlaceholder />}
          />
        </Box>

        {/* Dark Overlay */}
        <Box
          position="absolute"
          borderRadius={10}
          bottom="0"
          left="0"
          h="100%"
          w="100%"
          bgImage="radial-gradient(circle at bottom left, blackAlpha.700, blackAlpha.200)"
        />

        <VStack
          position="absolute"
          top="0"
          left="0"
          h="100%"
          w="1005"
          padding={2}
          justifyContent="space-between"
          align="flex-start"
        >
          <HStack w="100%" justifyContent="space-between">
            <CriticScore score={parseInt(movie.vote_average.toFixed(0))} />
            <Button
              colorScheme="red"
              size="sm"
              fontSize="sm"
              onClick={(e) => onRemove(e)}
            >
              <Icon as={RxCross2} />
            </Button>
          </HStack>

          <VStack spacing={2} align="flex-start" w="75%">
            <Heading noOfLines={2} fontSize="md">
              {movie.title}
            </Heading>
            <Text noOfLines={2} fontSize="sm">
              {summarizeText(movie.overview, 40)}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default MovieWatchlistCard;
