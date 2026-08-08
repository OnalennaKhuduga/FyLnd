import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import BannerContainer from "../components/BannerContainer";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";
import NavBar from "../components/NavBar";
import Navigation from "../components/Navigation";

const HomePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `${sidebarCollapsed ? "70px" : "305px"} 1fr`,
      }}
      templateRows={{
        lg: "64px 1fr",
      }}
      h="100vh"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside">
        <Box h="100%" overflowY="auto">
          <Navigation
            isOpen={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </Box>
      </GridItem>
      <GridItem area="main" minH={0} overflowY="auto">
        <MovieContainer>
          <BannerContainer />
          <MovieGrid />
        </MovieContainer>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
