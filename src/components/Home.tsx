import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box position="relative" height="100vh" width="100%" overflow="hidden">
      {/* Left Section (Background) */}
      <Box
        sx={{
          backgroundColor: "#D7D7D7",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
      </Box>

      {/* Right Section (Rotated Overlay) */}
      <Box
        sx={{
          backgroundColor: "#000000",
          width: "100%",
          height: "140%",
          position: "absolute",
          top: 0,
          right: "-47%",
          transform: "rotate(10deg)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
       
      </Box>
    </Box>
  );
}
