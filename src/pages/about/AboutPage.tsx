import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TMDBLogo from "../../assets/tmdb-logo.svg";

const AboutPage = () => {
  return (
    <Box h="100vh" w="100vw">
      <VStack padding={10} justifyContent="space-between" gap={5} paddingY={20}>
        <Heading fontSize="3xl">ABOUT FILMFIND</Heading>
        <Text>Explore movies. Discover something worth watching.</Text>

        <VStack
          justifyContent="space-between"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="whiteAlpha.800"
          padding={10}
          w="100%"
          // h="100%"
        >
          <Heading fontSize="2xl">ABOUT THE APP</Heading>

          <Text>
            FilmFind is a movie browsing application designed to make exploring
            movies simple and enjoyable.
          </Text>
        </VStack>

        <VStack
          justifyContent="space-between"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="whiteAlpha.800"
          padding={10}
          w="100%"
          h="100%"
        >
          <Heading fontSize="2xl">MOVIE DATA</Heading>

          <Text>
            All movie information displayed in this application is provided by
            The Movie Database (TMDB).
          </Text>

          <Image src={TMDBLogo} w="200px" />

          <Text>
            This product uses the TMDB API but is not supported, endorsed or
            certified by TMDB.
          </Text>

          <Link to="https://www.themoviedb.org/" target="_blank">
            <Text
              fontWeight="bold"
              bgGradient="linear(to-r, #90cea1, #01b4e4)"
              bgClip="text"
              textDecoration="underline"
            >
              [ Visit TMDB ]
            </Text>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AboutPage;
