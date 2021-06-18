import React from "react";
import Typewriter from "typewriter-effect";
import { Flex, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";

function WriterEn() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("#042230", "##29f3c3");

  return (
    <Flex ml="-50px" color={color}>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .typeString(`<strong>Flavio Rocha</strong>`)
            .pauseFor(1000)
            .deleteChars(14)
            .typeString(`Front-end Developer`)
            .pauseFor(1500)
            .start();
        }}
      />
    </Flex>
  );
}

export default WriterEn;
