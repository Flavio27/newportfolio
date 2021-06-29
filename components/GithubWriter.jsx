import React from 'react';
import Typewriter from 'typewriter-effect';
import { Flex, useColorMode, useColorModeValue, Text } from '@chakra-ui/react';

function GithubWriter() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('#042230', '##29f3c3');

  return (
    <Flex ml="-50px" color={color}>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .typeString(`<strong>Github.com/Flavio27</strong>`)
            .pauseFor(1000)
            .start();
        }}
      />
    </Flex>
  );
}

export default GithubWriter;
