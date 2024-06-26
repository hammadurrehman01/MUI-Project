import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed, Navbar, Rightbar, Sidebar } from "./constants";
import "../index.css";
import { useState } from "react";

const App = () => {
  const [mode, setmode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} />
        <Stack
          direction={"row"}
          alignItems={"start"}
          justifyContent={"space-between"}
          spacing={1}
          pt={8}
        >
          <Sidebar mode={mode} setmode={setmode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
