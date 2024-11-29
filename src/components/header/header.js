import React, { useState } from "react";
import "./header.css";
import { Button, createMuiTheme, TextField, ThemeProvider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import categories from "../data/category";

const Header = ({ language, handleLanguage, word, setWord, handleSearch }) => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="search"
            label="Standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={language}
              onChange={(e) => handleLanguage(e)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map(({ label, value }) => (
                <MenuItem value={label}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={handleSearch}>
            Search
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
