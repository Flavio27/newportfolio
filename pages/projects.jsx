import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Layout from "src/components/Layout";

import Projects from "src/components/Projects";
import { ptBr, enUs } from "data";
import useAuth from "src/hooks/useAuth";
import gitIcon2 from "../images/git2.png";
import gitIcon3 from "../images/git3.png";
import gitIcon from "../images/icons/github.png";
import GithubWriter from "src/components/GithubWriter";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const { lenguage, setLenguage } = useAuth();
  const [lenguageNow, setLenguageNow] = useState(ptBr);
  const [apiData, setApiData] = useState({});
  const { colorMode, toggleColorMode } = useColorMode();
  const whiteTheme = "linear(to-r, #B6B6B6, #B6B6B6,)";
  const darkTheme = "linear(to-l, #743ad5, #011627)";
  const bg = useColorModeValue(whiteTheme, darkTheme);

  const gitApi = async () => {
    const response = await fetch("https://api.github.com/users/Flavio27");
    const data = await response.json();
    setApiData(data);
  };

  useEffect(() => {
    if (lenguage === "ptBr") {
      setLenguageNow(ptBr);
    } else {
      setLenguageNow(enUs);
    }
  }, [lenguage]);

  useEffect(() => {
    gitApi();
  }, []);

  <Projects props={lenguageNow} />;
  return (
    <Layout>
      <Flex
        justifyContent="center"
        alignItems="center"
        h={["20vh", "40vh"]}
        w="100%"
        minW="100%"
        bgGradient={bg}
        direction="column"
      >
        <Heading as="h3" size="xl" mb={2}>
          <a href="https://github.com/Flavio27/" target="_blank">
            <GithubWriter />
          </a>
          <Image
            src={colorMode === "dark" ? gitIcon2 : gitIcon3}
            w={["0", "0", "0", "450px", "600px"]}
            right={["0px", "0px", "0px", "0px", "130px"]}
            top={["0px", "0px", "0px", "100px", "100px"]}
            display={["none", "none", "none", "flex"]}
            objectFit="cover"
            position="absolute"
            opacity={0.4}
          />
          <Image
            src={gitIcon}
            w={["0", "0", "0", "250px", "250px"]}
            right={["0px", "0px", "0px", "0px", "0px"]}
            bottom={["0px", "0px", "0px", "100px", "100px"]}
            display={["none", "none", "none", "none", "flex"]}
            objectFit="cover"
            position="fixed"
            opacity={0.4}
          />
        </Heading>

      </Flex>
      <Flex justify="center">
        <Flex
          w="full"
          maxW="1200px"
          px={[4, 8]}
          direction="column"
          position="relative"
        >
          <Box top="-8" position="absolute">
            <Avatar size="xl" src={apiData.avatar_url} />
          </Box>
          <Box ml="105px" mt={1}>
            <Heading as="h3" size="md">
              <a href="https://github.com/Flavio27/" target="_blank">
                Flavio Rocha
              </a>
            </Heading>
            <Text fontSize="sm" zIndex={0}>
              {lenguageNow.hero.text}
            </Text>
          </Box>
          <Box mt={10}>
            <Projects props={lenguageNow} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
