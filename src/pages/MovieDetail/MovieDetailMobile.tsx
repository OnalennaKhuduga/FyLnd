import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import YouTube from "react-youtube";
import CriticScore from "../../components/CriticScore";
import MetadataList from "../../components/MetadataList";
import MovieDetailCardMobile from "../../components/MovieDetailCardMobile";
import MovieImage from "../../components/MovieImage";
import MoviePlaceholder from "../../components/MoviePlaceholder";
import WatchlistButton from "../../components/WatchlistButton";
import useMovieVideos from "../../hooks/useMovieVideo";
import useShowTrailer from "../../hooks/useShowTrailer";
import { Movie, MovieDetails } from "../../types/movie";
import getImage from "../../utils/getImage";

interface Props {
  movieId: number;
  movie: MovieDetails;
  similarMovies: Movie[];
}

const MovieDetailMobile = ({ movieId, movie, similarMovies }: Props) => {
  const { data: video } = useMovieVideos(movieId);
  const trailer = video?.results.find(
    (video) =>
      video.site === "YouTube" && video.type === "Trailer" && video.official,
  );

  const showTrailer = useShowTrailer(3000);

  const {
    title,
    genres,
    overview,
    backdrop_path,
    vote_average,
    runtime,
    release_date,
  } = movie;

  const metadata = [
    <CriticScore score={parseInt(vote_average.toFixed(1))} />,
    runtime + " min",
    release_date,
  ];

  return (
    <VStack h="100vh">
      {/* Backdrop Image and Trailer */}
      <Box h="100%" w="100%">
        {showTrailer ? (
          <AspectRatio ratio={16 / 9}>
            <YouTube
              videoId={trailer?.key}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </AspectRatio>
        ) : (
          <MovieImage
            src={
              movie.backdrop_path ? getImage(movie.backdrop_path) : undefined
            }
            placeholder={<MoviePlaceholder />}
          />
        )}
      </Box>

      {/* Content */}
      <VStack align="flex-start" w="100%" padding={4} spacing={5}>
        <HStack>
          {genres.map((g, index) => (
            <Box key={index}>
              <Badge colorScheme="white">{g.name}</Badge>
            </Box>
          ))}
        </HStack>

        <VStack align="flex-start">
          <Heading fontSize="3xl">{title}</Heading>
          <HStack paddingY={1}>
            <MetadataList metadata={metadata} />
          </HStack>

          <VStack w="100%" gap={1}>
            <Button
              as="a"
              href={movie.homepage}
              target="_blank"
              colorScheme="blue"
              w="inherit"
            >
              Watch Now
            </Button>
            <WatchlistButton movie={movie} />
          </VStack>

          <Text>{overview}</Text>
        </VStack>

        <Flex direction="column" gap={3} w="100%" alignItems="flex-start">
          {movie &&
            similarMovies.map((m) => (
              <Box key={m.id}>
                <MovieDetailCardMobile movie={m} />
              </Box>
            ))}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default MovieDetailMobile;
