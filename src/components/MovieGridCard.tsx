import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types/movie";
import getImage from "../utils/getImage";
import CriticScore from "./CriticScore";

interface Props {
  movie: Movie;
}

const MovieGridCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      maxW="2=300px"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.15s ease-in-out",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <Box flex="3">
        <Image
          src={getImage(movie.poster_path)}
          objectFit="cover"
          borderRadius={4}
        />
      </Box>

      <VStack align="flex-start" flex="1" padding={1} spacing={0}>
        <HStack justifyContent="space-between">
          <Box>
            <Heading fontSize="md">{movie.title}</Heading>
          </Box>
          <Box>
            <CriticScore score={parseInt(movie.vote_average.toFixed(1))} />
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
