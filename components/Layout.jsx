import {
  Box,
  Flex,
  useColorModeValue,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import Topbar from "./Topbar";

function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#f0f0f0", "#1A202C");

  return (
    <Box bgColor={bgColor} minH="100vh">
      <Topbar />
      <Flex flexDirection="column" pt="62px">
        <Box
          h="1px"
          maxW={["100%", "100%", "400px", "400px"]}
          className={
            colorMode === "light" ? "line-gradient-white" : "line-gradient-dark"
          }
        />
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;
