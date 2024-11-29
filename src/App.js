import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/header/header";
import Definitions from "./components/definitions/Definitions";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState("en");

  const dictonaryApi = async (word) => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      console.log(`data.data: ${data.data}`);
      console.log(`data.data.meanings: ${data.data.meanings}`);

      setMeanings(data.data.meanings);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    dictonaryApi(word);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setWord("");
  };

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      }
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          color: "white",
        }}
      >
        <Header
          language={language}
          handleLanguage={handleLanguage}
          word={word}
          setWord={setWord}
          handleSearch={handleSearch}
        />
        <Definitions meanings={meanings} language={language} word={word} />
      </Container>
    </div>
  );
}

export default App;
