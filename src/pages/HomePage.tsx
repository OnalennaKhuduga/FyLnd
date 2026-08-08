import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import BannerContainer from "../components/BannerContainer";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";
import SideBar from "../components/SideBar";
import { useState } from "react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
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
      <Show above="lg">
        <GridItem area="aside">
          <Box h="100%" overflowY="auto">
            <SideBar
              isOpen={sidebarCollapsed}
              onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </Box>
        </GridItem>
      </Show>
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
