import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import genres from "../data/genres";
import { Movie } from "../hooks/useMovies";
import formatDate from "../utils/formatDate";
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";
import MovieLink from "./MovieLink";

interface Props {
  movie: Movie;
}

const MovieSearchCard = ({ movie }: Props) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      w="100%"
      align="stretch"
      borderStyle={{ base: "solid", md: "none" }}
      borderColor="white"
      borderWidth="1px"
      borderRadius={5}
      key={movie.id}
    >
      {/* backdrop image */}
      <Box width={{ base: "100%", md: "25%" }}>
        <Image
          borderRadius={{ base: 0, md: 5 }}
          src={getImage(movie.backdrop_path)}
        />
      </Box>

      {/* movie metadata */}
      <VStack
        align="start"
        fontSize="sm"
        spacing={4}
        padding={{ base: 4, md: 0 }}
      >
        <Box>
          <MovieLink id={movie.id}>
            <Heading fontSize="3xl">
              {movie.title}{" "}
              <CriticScore score={parseInt(`${movie.vote_average}`)} />
            </Heading>
          </MovieLink>
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
