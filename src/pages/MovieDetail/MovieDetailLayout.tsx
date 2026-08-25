import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Box, Show } from "@chakra-ui/react";
import Navigation from "../../components/Navigation";

const MovieDetailLayout = () => {
  return (
    <Box position="relative" h="100%" w="100%">
      <Box
        position={{ base: "unset", lg: "absolute" }}
        top="0"
        left="0"
        w="100%"
        zIndex="100"
      >
        <NavBar isDark={true} />
      </Box>
      <Outlet />
      <Show below="lg">
        <Box
          position="fixed"
          bottom="0"
          left="0"
          w="100%"
          bg="rgba(0, 0, 0, 0.6)"
        >
          <Navigation />
        </Box>
      </Show>
    </Box>
  );
};

export default MovieDetailLayout;
