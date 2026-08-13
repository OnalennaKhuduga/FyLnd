import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import NavBar from "../components/NavBar";

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Grid
      minH="100vh"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `${sidebarCollapsed ? "70px" : "305px"} 1fr`,
      }}
      templateRows={{
        base: "auto auto auto",
        lg: "70px auto",
      }}
      paddingY={{ base: "71px", lg: 0 }}
    >
      <GridItem
        area="nav"
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="70px"
        zIndex="10"
      >
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        position="fixed"
        top="72px"
        left="0"
        w={{ lg: sidebarCollapsed ? "70px" : "305px" }}
        h="calc(100vh - 70px)"
      >
        <Box h="100%">
          <Navigation
            isOpen={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </Box>
      </GridItem>
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
