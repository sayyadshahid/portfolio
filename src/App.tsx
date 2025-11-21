import { Box } from "@mui/material";
import Portfolio from "./page/Portfolio";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";   

function App() {
  return (
    <Box>
      {/* ToastContainer placed here makes it available app-wide */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Box>
  );
}

export default App;
