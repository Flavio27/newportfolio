import Layout from 'src/components/Layout';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  const whiteTheme = 'linear(to-l, #29f3c3, #FFFF)';
  const darkTheme = 'linear(to-l, #29f3c3, #011627)';

  const bg = useColorModeValue(whiteTheme, darkTheme);

  return (
    <Layout>
      <Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          h={['20vh', '40vh']}
          w="100%"
          minW="100%"
          bgGradient={bg}
          direction="column"
        >
          <Heading as="h3" size="xl" mb={2}>
            @flaviorocha
          </Heading>
          <Stack direction="row" spacing={2}>
            <Link href="https://www.instagram.com/">
              <Icon w={6} h={6} as={FaInstagram} />
            </Link>
            <Link href="https://www.linkedin.com/">
              <Icon w={6} h={6} as={FaLinkedin} />
            </Link>
            <Link href="https://www.youtube.com/">
              <Icon w={6} h={6} as={FaYoutube} />
            </Link>
          </Stack>
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
              <Avatar size="xl" src="/avatar.jpeg" />
            </Box>
            <Box ml="105px" mt={1}>
              <Heading as="h3" size="md">
                Flavio Rocha
              </Heading>
              <Text fontSize="sm">Fullstack Developer</Text>
            </Box>
            <Box mt={10}>
              <Text fontSize="sm">...</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}

export default About;
