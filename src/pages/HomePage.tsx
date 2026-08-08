import { Box, Grid, GridItem } from "@chakra-ui/react";
import BannerContainer from "../components/BannerContainer";
import MovieContainer from "../components/MovieContainer";
import MovieGrid from "../components/MovieGrid";
import SideBar from "../components/SideBar";
import { useState } from "react";

const HomePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Grid
      templateAreas={{
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
      <GridItem area="nav">Nav</GridItem>
      <GridItem area="aside">
        <Box h="100%" overflowY="auto">
          <SideBar
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
