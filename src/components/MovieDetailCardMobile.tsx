import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MovieBase } from "../types/movie";
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";

interface Props {
  movie: MovieBase;
}

const MovieDetailCardMobile = ({ movie }: Props) => {
  return (
    <Flex>
      <Box maxW="100px">
        <Image src={getImage(movie.poster_path)} borderRadius={5} />
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
