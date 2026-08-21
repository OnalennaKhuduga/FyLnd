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
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";
import MovieLink from "./MovieLink";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card position="relative">
      <Image src={getImage(movie.poster_path)} borderRadius={5} />

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
          <MovieLink id={movie.id}>
            <Heading fontSize="2xl">{movie.title}</Heading>
          </MovieLink>
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
