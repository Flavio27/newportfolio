import React from "react";
import { useState, useEffect } from "react";
import {
  useColorMode,
  useColorModeValue,
  Heading,
  Image,
  Flex,
  Box,
  Stack,
  Link,
  Icon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
  Button,
  useClipboard,
  Input
} from "@chakra-ui/react"
import {
  FaLinkedin,
  FaGithub,
  FaMailBulk,
} from "react-icons/fa";


import Writer from "src/components/Writer";
import WriterEn from "src/components/WriterEn";
import useAuth from "src/hooks/useAuth";


function Hero({ props }) {
  const { lenguage, setLenguage } = useAuth();
  const [apiData, setApiData] = useState({});
  const { colorMode, toggleColorMode } = useColorMode();
  const whiteTheme = "linear(to-r, #e1e1e1, #c4c4c4,)";
  const darkTheme = "linear(to-l, #743ad5, #011627)";
  const bg = useColorModeValue(whiteTheme, darkTheme);
  const iconsSize = [6, 8, 10, 10];
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [value, setValue] = React.useState("email@flaviorocha.com")
  const { hasCopied, onCopy } = useClipboard(value)

  const gitApi = async () => {
    const response = await fetch("https://api.github.com/users/Flavio27");
    const data = await response.json();
    setApiData(data);
  };

  useEffect(() => {
    gitApi();
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h={["20vh", "40vh"]}
      w="100%"
      minW="100%"
      borderRadius={[
        "5em 0px 5em 0px",
        "8em 0px 8em 0px",
        "10em 0px 10em 0px",
        "12em 0px 12em 0px",
      ]}
      bgGradient={bg}
      direction="column"
      mt={["80px", "150px", "160px", "160px"]}
    >
      <Box mt={[-150, -300, -300, -300]} position="absolute">
        <Image
          boxSize={[125, 200, 250, 250]}
          borderRadius="full"
          src={apiData.avatar_url}
        />
      </Box>
      <Heading as="h3" size="lg" mb={2} mt={10} Type="whiteAlpha">
        {lenguage === "ptBr" ? <Writer /> : <WriterEn />}
      </Heading>
      <Box mt={5}>
        <Stack direction="row" spacing={6} mb={[-10, -10, -10, -10, -10]} mt={[-5, 0, 0, 0, 0]}>
          <Link href="https://github.com/Flavio27" target="_blank">
            <Icon w={iconsSize} h={iconsSize} as={FaGithub} />
          </Link>
          <Link href="https://www.linkedin.com/in/flavio-rocha-bb0b53171/" target="_blank">
            <Icon w={iconsSize} h={iconsSize} as={FaLinkedin} />
          </Link>
          <Link>
            <Icon w={iconsSize} h={iconsSize} as={FaMailBulk} onClick={onOpen} />
          </Link>
        </Stack>
      </Box>
      <>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent bg={colorMode === "dark" ? "#011627" : "#e1e1e1"}>
            <AlertDialogHeader>{props?.modal?.title}</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <>
                <Flex mb={2}>
                  <Input value={value} isReadOnly placeholder={value} />
                  <Button onClick={onCopy} ml={2} autoFocus bg={hasCopied ? "#0abb1344" : ""}>
                    {hasCopied ? props?.modal?.buttonMsg : props?.modal?.button}
                  </Button>
                </Flex>
              </>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </>
    </Flex>
  );
}

export default Hero;