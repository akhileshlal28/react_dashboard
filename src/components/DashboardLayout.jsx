import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrawer from "./Sidedrawer";
import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <Sidedrawer isOpen={isOpen} onClose={onClose} />
      <Box overflowX="hidden" overflowY="auto" flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container h="calc(100vh - 88px)" mt="6" maxW="auto">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
