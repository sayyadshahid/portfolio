import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Nav from "./Nav";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box position="relative" height="100vh" width="100%" overflow="hidden" >
      <Nav />

      {/* Left Section (Main Content) */}
      <Box
        sx={{
          backgroundColor: "#D7D7D7",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 5 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 40 },
              fontWeight: 600,
              lineHeight: { xs: "40px", md: "70px" },
            }}
          >
            Hi, I am
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 40, md: 80 },
              fontWeight: 600,
              background: "linear-gradient(to right, grey, black)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shahid Sayyad
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 18, md: 25 },
              fontWeight: 600,
              color: "#909090",
            }}
          >
            FullStack Developer
          </Typography>

          <Box mt={4} sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <a href="https://github.com/sayyadshahid">
              <img src="./git.svg" alt="GitHub" style={{ height: 40 }} />
            </a>
            <a href="https://www.linkedin.com/in/shahid-sayyad-23a0bb331/?originalSubdomain=in">
              <img src="./linked in.svg" alt="LinkedIn" style={{ height: 40 }} />
            </a>
            <Button
              sx={{
                color: "white",
                bgcolor: "black",
                borderRadius: 10,
                height: 50,
                fontWeight: 600,
                px: 3,
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right Section (Rotated Overlay - only on desktop) */}
      {!isMobile && (
        <Box
          sx={{
            backgroundColor: "#000000",
            width: "100%",
            height: "140%",
            position: "absolute",
            top: 0,
            right: "-47%",
            transform: "rotate(10deg)",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </Box>
  );
}
