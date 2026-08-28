import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import genres from "../data/genres";
import useMovies from "../hooks/useMovies";
import getMovieEndpoint from "../services/movie-service";
import formatDate from "../utils/formatDate";
import getImage from "../utils/getImage";
import summarizeText from "../utils/summarizeText";
import CriticScore from "./CriticScore";
import HeroBannerSkeleton from "./HeroBannerSkeleton";
import MetadataList from "./MetadataList";
import MovieLink from "./MovieLink";

const HeroBanner = () => {
  const topRatedEndpoint = getMovieEndpoint("top_rated");
  const { data, isLoading, error } = useMovies(topRatedEndpoint);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const navigate = useNavigate();

  if (isLoading) return <HeroBannerSkeleton />;
  if (error) return null;

  const currentMovie = data?.pages[0].results.slice(0, 5) ?? [];
  const {
    id,
    title,
    overview,
    vote_average,
    release_date,
    original_language,
    genre_ids,
    backdrop_path,
    poster_path,
  } = currentMovie![currentMovieIndex];

  const formattedReleaseDate = formatDate(new Date(release_date));

  const movie_metadata = [
    <CriticScore score={parseInt(vote_average.toFixed(1))} />,
    formattedReleaseDate,
    original_language,
  ];

  const summarizedOverview = summarizeText(overview, 90);

  // Handles swiping through movies
  const navDots = [0, 1, 2, 3, 4];
  const movieLimit = 4;

  const navigationButtons = [
    {
      side: "left",
      icon: MdKeyboardArrowLeft,
      action: () =>
        setCurrentMovieIndex(
          currentMovieIndex === 0 ? movieLimit : currentMovieIndex - 1,
        ),
    },
    {
      side: "right",
      icon: MdKeyboardArrowRight,
      action: () =>
        setCurrentMovieIndex(
          currentMovieIndex === movieLimit ? 0 : currentMovieIndex + 1,
        ),
    },
  ];

  return (
    <AspectRatio
      w={{ base: "80%", md: "100%" }}
      mx="auto"
      ratio={{ base: 9 / 16, md: 2.5 / 1 }}
    >
      <Box display="inline-block" position="relative">
        <Box
          position="absolute"
          inset="0"
          bgImage={{
            base: getImage(poster_path),
            md: getImage(backdrop_path),
          }}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          borderRadius={{ base: 7, md: 20 }}
          transition="opacity 0.4s ease-in-out"
        />

        {/* Dark Layer Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          borderRadius={{ base: 7, md: 20 }}
          bg={{ md: "blackAlpha.500" }}
          zIndex="1"
          onClick={() => navigate("/movie/" + id)}
        />

        {/* Navigation buttons */}
        {navigationButtons.map(({ side, icon, action }, index) => (
          <Box
            key={index}
            position="absolute"
            top="0"
            {...(side === "left" ? { left: "0" } : { right: "0" })} // Set the position of the button in banner
            h="90%"
            w="9%"
            zIndex="3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity="0"
            _hover={{ opacity: "1" }}
            transition="opacity 0.125s ease"
          >
            <Button variant="unstyled" onClick={action}>
              <Icon
                fontSize="3xl"
                _hover={{ fontSize: "4xl" }}
                transition="font-size 0.15s ease"
                as={icon}
              />
            </Button>
          </Box>
        ))}

        {/* Content */}
        <Show above="sm">
          <VStack
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            align="flex-start"
            padding={8}
            justifyContent="space-between"
            zIndex="2"
          >
            <HStack>
              {genre_ids.map((g) => (
                <Badge colorScheme="white" fontSize="2xs" padding={1} key={g}>
                  {genres.get(g)}
                </Badge>
              ))}
            </HStack>

            <VStack align="flex-start" spacing={4}>
              <MovieLink id={id}>
                <Heading fontSize="xl" noOfLines={1}>
                  {title}
                </Heading>
              </MovieLink>
              <HStack>
                <MetadataList metadata={movie_metadata} />
              </HStack>
              <Show above="lg">
                <Text w="50%" fontSize="sm">
                  {summarizedOverview}
                </Text>
              </Show>
              <HStack>
                <Button size="sm" colorScheme="red" variant="outline">
                  More Info
                </Button>
                <Button size="sm" colorScheme="blue" variant="outline">
                  Add to WatchList
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Show>

        {/* Nav Dots */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="25px"
          display="flex"
          justifyContent="center"
          zIndex="3"
        >
          {navDots.map((dot) => (
            <Text key={dot} marginX={"3px"} fontSize="xs">
              {currentMovieIndex === dot ? "●" : "◇"}
            </Text>
          ))}
        </Box>
      </Box>
    </AspectRatio>
  );
};

export default HeroBanner;
