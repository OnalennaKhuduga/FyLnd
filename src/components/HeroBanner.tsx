import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import genres from "../data/genres";
import useMovies from "../hooks/useMovies";
import formatDate from "../utils/formatDate";
import getImage from "../utils/getImage";
import summarizeText from "../utils/summarizeText";
import CriticScore from "./CriticScore";
import HeroBannerSkeleton from "./HeroBannerSkeleton";
import MetadataList from "./MetadataList";

const HeroBanner = () => {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <HeroBannerSkeleton />;
  if (error) return null;

  const currentMovie = data?.results[0];
  const {
    title,
    overview,
    vote_average,
    release_date,
    original_language,
    genre_ids,
    backdrop_path,
    poster_path,
  } = currentMovie!;

  const formattedReleaseDate = formatDate(new Date(release_date));

  const movie_metadata = [
    <CriticScore score={parseInt(vote_average.toFixed(1))} />,
    formattedReleaseDate,
    original_language,
  ];

  const summarizedOverview = summarizeText(overview, 90);

  return (
    <AspectRatio
      ratio={{ base: 9 / 16, md: 16 / 9 }}
      bgImage={{
        base: getImage(poster_path),
        md: getImage(backdrop_path),
      }}
      bgPosition="center"
      bgSize="cover"
      borderRadius={{ base: 7, md: 20 }}
    >
      <Box display="inline-block" position="relative">
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
        />

        {/* Content */}
        <Show above="sm">
          <VStack
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            align="flex-start"
            padding={6}
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
              <Heading fontSize="xl" noOfLines={1}>
                {title}
              </Heading>
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
      </Box>
    </AspectRatio>
  );
};

export default HeroBanner;
