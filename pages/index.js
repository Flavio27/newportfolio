import { useState, useEffect } from "react";
import { useColorMode, useColorModeValue, Box } from "@chakra-ui/react";
import Layout from "src/components/Layout";
import Hero from "src/components/Hero";
import About from "../components/About";
import Skills from "src/components/Skills";
import Projects from "src/components/Projects";
import { ptBr, enUs } from "data";
import useAuth from "src/hooks/useAuth";

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

  return (
    <Layout>
      <Box>
        <Hero props={lenguageNow} />
        <About props={lenguageNow} />
        <Skills props={lenguageNow} />
      </Box>
    </Layout>
  );
}
