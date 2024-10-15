import { Box, ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import customTheme from "./components/theme"
import Homepage from "./Pages/Homepage";
import CatLevel from "./Pages/CatLevels";
import Lobby from "./Pages/Lobby";
import LobbyRules from "./Pages/LobbyRule";
import PlaceBet from "./Pages/PlaceBet";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <Box width={'100vw'} overflowX={'hidden'}>
      <Router>
        <Routes>
          <Route index element={<Homepage />}/>
          <Route path="/level" element={<CatLevel />}/>
          <Route path="/lobby" element={<Lobby />}/>
          <Route path="/stake" element={<PlaceBet />}/>
          <Route path="/rules" element={<LobbyRules />}/>
        </Routes>
      </Router>
    </Box>
    </ChakraProvider>
  )
}

export default App
