import { useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import CriticScore from "../../components/CriticScore";
import getImage from "../../utils/getImage";
import MetadataList from "../../components/MetadataList";
import { FaPlay } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import MovieDetailCard from "../../components/MovieDetailCard";
import useMovieVideos from "../../hooks/useMovieVideo";
import { useEffect, useState } from "react";

const MovieDetailDesktop = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useMovie(parseInt(id!));
  const { data: movies } = useSimilarMovies(parseInt(id!));

  const { data: video } = useMovieVideos(parseInt(id!));
  const trailer = video?.results.find(
    (video) =>
      video.site === "YouTube" && video.type === "Trailer" && video.official,
  );
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrailer(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return null;

  const { title, overview, genres, vote_average, release_date, runtime } =
    data!;

  const metadata = [
    <CriticScore score={parseInt(vote_average.toFixed(1))} />,
    runtime + " min",
    release_date,
  ];

  return (
    <Box position="fixed" h="100vh" w="100vw" justifyContent="space-between">
      {/* Background Image */}
      <Box
        position="relative"
        top="0"
        left="0"
        h="100%"
        w="100%"
        bgImage={getImage(data?.backdrop_path || "")}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        inset={0}
        zIndex="1"
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        bgGradient="linear(to-r, blackAlpha.900, blackAlpha.300)"
        zIndex="2"
      />

      {/* Main Container */}
      <VStack
        position="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        paddingTop={20}
        paddingBottom={4}
        paddingX={5}
        zIndex="50"
      >
        {/* Main Content */}
        <VStack align="left" justifyContent="space-between" h="100%">
          {/* Genres */}
          <HStack>
            {genres.map((g) => (
              <Box key={g.id}>
                <Badge colorScheme="white">{g.name}</Badge>
              </Box>
            ))}
          </HStack>

          <HStack justifyContent="space-between" w="full">
            <VStack align="flex-start" flex="1">
              <VStack align="left" spacing={3}>
                {/* Title */}
                <Heading fontSize="5xl">{title}</Heading>
                <HStack>
                  <MetadataList metadata={metadata} />
                </HStack>
                {/* Overview */}
                <Text color="#cac9c9">{overview}</Text>
                <HStack>
                  <Button variant="solid" fontSize="xl">
                    <Icon as={FaPlay} />
                  </Button>
                  <Button
                    variant="ghost"
                    fontSize="xl"
                    leftIcon={<Icon as={FaCirclePlus} />}
                  >
                    Add to WatchList
                  </Button>
                </HStack>
              </VStack>
            </VStack>

            <Box flex="1">
              {showTrailer && trailer && (
                <AspectRatio ratio={16 / 9} maxH="400px">
                  <iframe
                    title={trailer?.name}
                    src={
                      trailer
                        ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
                        : undefined
                    }
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </AspectRatio>
              )}
            </Box>
          </HStack>

          <VStack align="flex-start">
            <Heading fontSize="2xl" marginBottom={3}>
              Recommended Movies
            </Heading>

            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
              {movies?.results.slice(0, 4).map((m, index) => (
                <GridItem key={index} display="flex" alignItems="center">
                  <MovieDetailCard movie={m} />
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default MovieDetailDesktop;
