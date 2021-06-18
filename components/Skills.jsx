import React from 'react';
import { useState, useEffect } from "react";
import {
  Divider,
  Image,
  Flex,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  Stack,
  Wrap,
  Tooltip,
} from "@chakra-ui/react";
import skills from "../images/skills.png";
import Aos from 'aos';
import "aos/dist/aos.css"
import { img } from 'data';
function Skills({ props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#e1e1e1", "#00111d");
  const square = useColorModeValue("#b1b1b1", "#5f5f5f");

  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <>
      <Flex
        bg={bg}
        justifyContent="center"
        alignItems="center"
        w="100%"
        minW="100%"
        direction="column"
        mt={["55px", "110px", "110px", "110px"]}
        pb={50}
        
      >
        <Flex justify="right">
          <Flex
            w="full"
            direction="column"
            position="relative"
            ml={["10px", "20px", "0px", "0px"]}
          >
            <Box mt={[10, 10, 10, 10, 10]} maxW={["800px", "800px", "800px", "600px", "1200px"]}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <Flex mt={[0, 50, 100, 100, 100]}>
                <Text fontSize={["sm", "md"]} align="center">
                  <Text fontSize={["lg", "4xl"]} color="#00BFA6">
                    {props?.skills?.title}
                  </Text>
                  <Divider mb={6} />
                  {props?.skills?.text}
                  <Flex>
                    <Wrap spacing={5} mt={10}>
                      {img.map(i => (
                        <Tooltip label={i.name} aria-label="A tooltip">
                        <Box className="grow-skills" maxW="sm" borderBottom="1px" borderColor={square} overflow="hidden" cursor="pointer">
                          <Image
                            p={1}
                            boxSize="50px"
                            src={i.url}
                            alt="Segun Adebayo"
                            objectFit="cover"
                            alt={i.name}
                          />
                        </Box>
                        </Tooltip>
                      ))}
                    </Wrap>
                  </Flex>
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Skills;