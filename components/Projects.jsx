import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  CircularProgress,
  Text,
  Badge,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { icons } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

function Project({ name, languages_url, html_url, created_at }) {
  const [languagesType, setLanguagesType] = useState();
  const [imgIcons, setImgIcons] = useState({});

  async function technologies() {
    const response = await fetch(languages_url);
    const data = await response.json();
    setLanguagesType(Object.keys(await data));
    return;
  }

  useEffect(() => {
    technologies();
    setImgIcons(icons);
    Aos.init({});
  }, []);

  return (
    <Box
      maxW="1200px"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      mb="10px"
      align="left"
      data-aos="fade-right"
    >
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          fontSize={["lg", "2xl"]}
        >
          <a href={html_url} target="_blank" className="project-name">
            {name}
          </a>
        </Box>
        <Flex>
          {languagesType?.map((tec, index) => (
            <Box mr={5} align="center" key={tec}>
              <Image
                src={imgIcons[tec?.toLowerCase()]}
                boxSize={25}
                style={{ margin: "10px 0px" }}
              />
              <Text fontSize="sm">{tec}</Text>
            </Box>
          ))}
        </Flex>
        <Box as="span" color="gray.600" fontSize="sm">
          Created at: {created_at.slice(0, 10)}
        </Box>
      </Box>
    </Box>
  );
}

function Projects(props) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getRepo() {
    const response = await fetch("https://api.github.com/users/Flavio27/repos");
    const data = await response.json();
    setRepos(data);
    console.log(data);
    setLoading(false);
  }

  useEffect(() => {
    getRepo();
  }, []);

  return (
    <Box align="center">
      {loading && <CircularProgress isIndeterminate color="#00BFA6" />}
      {repos.map((repo) => (
        <Project {...repo} key={repo.name} />
      ))}
    </Box>
  );
}

export default Projects;
