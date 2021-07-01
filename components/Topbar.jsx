import { useState, useEffect } from "react";
import NextLink from "next/link";
import {
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Stack,
  Box,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import withAuthModal from "./Auth";
import braIcon from "../images/icons/braIcon.png";
import euaIcon from "../images/icons/euaIcon.png";
import { ptBr, enUs } from "data";

import useAuth from "src/hooks/useAuth";

function Topbar() {
  const { lenguage, setLenguage } = useAuth();
  const [lenguageNow, setLenguageNow] = useState();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#f0f0f0", "#1A202C");
  const color = useColorModeValue("#1A202C", "#EDEEEE");

  useEffect(() => {
    if (lenguage === "ptBr") {
      setLenguageNow(ptBr);
    } else {
      setLenguageNow(enUs);
    }
  }, [lenguage]);

  return (
      <Flex
        mb={[8, 16]}
        w="full"
        position="fixed"
        zIndex={99999}
        bgColor={bg}
        color={color}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          margin="0 auto"
          w="full"
          px={[4, 8]}
          h="60px"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={["flex", "flex", "none", "none"]}
            />
            <MenuList>
              <NextLink href="/" passHref>
                <Link>
                  <MenuItem icon={<ChevronRightIcon />} href="/" passHref>
                    {lenguageNow?.topBar?.home}
                  </MenuItem>
                </Link>
              </NextLink>
              <NextLink
                href={lenguage === "ptBr" ? "/#sobre" : "/#about"}
                passHref
              >
                <Link>
                  <MenuItem icon={<ChevronRightIcon />}>
                    {lenguageNow?.topBar?.about}
                  </MenuItem>
                </Link>
              </NextLink>
              <NextLink
                href={lenguage === "ptBr" ? "/#habilidades" : "/#skills"}
                passHref
              >
                <Link>
                  <MenuItem icon={<ChevronRightIcon />}>
                    {lenguageNow?.topBar?.skills}
                  </MenuItem>
                </Link>
              </NextLink>
              <NextLink href={"/projects"} passHref>
                <Link>
                  <MenuItem icon={<ChevronRightIcon />}>
                    {lenguageNow?.topBar?.projects}
                  </MenuItem>
                </Link>
              </NextLink>
            </MenuList>
          </Menu>
          <Flex alignItems="center" display={["none", "none", "flex", "flex"]}>
            <NextLink href="/" passHref>
              <Link mr={8}>{lenguageNow?.topBar?.home}</Link>
            </NextLink>
            <NextLink
              href={lenguage === "ptBr" ? "/#sobre" : "/#about"}
              scroll={true}
            >
              <Link mr={8}> {lenguageNow?.topBar?.about}</Link>
            </NextLink>
            <NextLink
              href={lenguage === "ptBr" ? "/#habilidades" : "/#skills"}
              scroll={true}
            >
              <Link mr={8}> {lenguageNow?.topBar?.skills}</Link>
            </NextLink>
            <NextLink href={"/projects"}>
              <Link>{lenguageNow?.topBar?.projects}</Link>
            </NextLink>
          </Flex>
          <Flex direction="row">
            <Stack direction="row" spacing={5}>
              {lenguage !== "ptBr" ? (
                <Image
                  borderRadius="full"
                  boxSize="30px"
                  src={braIcon}
                  cursor="pointer"
                  onClick={() => setLenguage("ptBr")}
                />
              ) : (
                <Image
                  borderRadius="full"
                  boxSize="27px"
                  src={euaIcon}
                  cursor="pointer"
                  onClick={() => setLenguage("enUs")}
                />
              )}
              {colorMode === "light" ? (
                <MoonIcon
                  w={6}
                  h={6}
                  onClick={toggleColorMode}
                  cursor="pointer"
                />
              ) : (
                <SunIcon
                  w={6}
                  h={6}
                  onClick={toggleColorMode}
                  cursor="pointer"
                />
              )}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
      
  );
}

export default withAuthModal(Topbar);
