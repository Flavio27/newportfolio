import React from 'react';
import { useState, useEffect } from "react";
import {
  Divider,
  Image,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import GitIcon from "../images/git.png";
import Aos from 'aos';
import "aos/dist/aos.css"

function About({ props }) {
  useEffect(() => {
    Aos.init({});
  }, [])
  
  return (
    <>
      <Image
        data-aos="fade-left"
        src={GitIcon}
        position="absolute"
        right={["0px", "0px", "0px", "0px", "150px"]}
        mt="8"
        display={["none", "none", "none", "flex"]}
        boxSize={["200px", "300px", "400px", "600px"]}
        objectFit="cover"
      />
      <Flex justify="center">
        <Flex
          w="full"
          maxW="1200px"
          px={[4, 8]}
          direction="column"
          position="relative"
        >
          <Box mt={20} maxW={["800px", "800px", "800px", "600px", "750px"]}>
            <Flex>
              <Text fontSize={["sm", "md"]}>
                <Text fontSize={["lg", "4xl"]} color="#00BFA6">
                  {props?.about?.title}
                </Text>
                <Divider mb={6} />
                <strong>{props?.about?.hello} 🤚 </strong>
                <br />
                {props?.about?.text}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default About;