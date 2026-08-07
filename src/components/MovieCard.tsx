import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import genres from "../data/genres";
import { Movie } from "../hooks/useMovies";
import CriticScore from "./CriticScore";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card position="relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        borderRadius={5}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        bg="blackAlpha.600"
        h="100%"
        w="100%"
        borderRadius={5}
      />

      <CardBody position="absolute" top="0" left="0">
        <HStack>
          <Heading fontSize="2xl">{movie.title}</Heading>
          <CriticScore score={parseFloat(movie.vote_average.toFixed(1))} />
        </HStack>
        <HStack marginTop={2} color="gray.300">
          {movie.genre_ids.map((g, index) => (
            <React.Fragment key={g}>
              {index > 0 && index < 3 && <Text>/</Text>}
              {index < 3 && <Text fontSize="xs">{genres.get(g)}</Text>}
            </React.Fragment>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
