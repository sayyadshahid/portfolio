import { Box } from "@mui/material";
import Portfolio from "./page/Portfolio";
import { Routes, Route } from "react-router-dom";  // ✅ Only use Routes and Route

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Box>
  );
}

export default App;
