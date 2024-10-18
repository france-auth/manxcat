import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation, // Import useLocation hook
} from "react-router-dom";
import "./index.css";

import Homepage from "./Pages/Homepage";
import CatLevel from "./Pages/CatLevels";
import Lobby from "./Pages/Lobby";
import LobbyRules from "./Pages/LobbyRule";
import PlaceBet from "./Pages/PlaceBet";
import WebApp from "@twa-dev/sdk";
import Tasks from "./Pages/Tasks";
import Apply from "./Pages/Apply";
import ReviewTask from "./Pages/ReviewTask";
import ApproveTask from "./Pages/ApproveTask";
import Invites from "./Pages/Invites";


function BackButtonHandler() {
  const location = useLocation(); // Use React Router's useLocation to track route changes

  useEffect(() => {
    // Initialize the BackButton from the TWA SDK
    WebApp.expand()
    const backButton = WebApp.BackButton;

    // Check the current route and show or hide the back button accordingly
    if (location.pathname === "/") {
      backButton.hide(); // Hide back button on homepage
    } else {
      backButton.show(); // Show back button on other pages
    }

    // Handle back button click event
    backButton.onClick(() => {
      window.history.back(); // Navigate back in browser history
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      backButton.hide(); // Hide the back button when the app unmounts
    };
  }, [location]); // Re-run effect when the location (route) changes

  return null; // This component doesn't need to render anything
}

function App() {
  return (
    <Box width={"100vw"} overflowX={"hidden"}>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/level" element={<CatLevel />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/stake" element={<PlaceBet />} />
        <Route path="/rules" element={<LobbyRules />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="review" element={<ReviewTask />} />
        <Route path="/approved" element={<ApproveTask />} />
        <Route path="/friends" element={<Invites />} />
      </Routes>
    </Box>
  );
}

export default function RootApp() {
  return (
    <Router>
      <BackButtonHandler /> {/* This handles the back button logic */}
      <App />
    </Router>
  );
}
