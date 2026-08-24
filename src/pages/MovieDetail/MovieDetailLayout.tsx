import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Box } from "@chakra-ui/react";

const MovieDetailLayout = () => {
  return (
    <Box position="relative" h="100%" w="100%">
      <Box position="absolute" top="0" left="0" w="100%" zIndex="100">
        <NavBar isDark={true} />
      </Box>
      <Outlet />
    </Box>
  );
};

export default MovieDetailLayout;
