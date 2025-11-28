import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Nav from "./Nav";
import EarthCanvas from "./canvas/EarthCanvas";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      position="relative"
      height={!isMobile ? "100vh" : "auto"}
      width="100%"
      overflow="hidden"
    >
      <Nav />

      {/* Left Section (Main Content) */}
      <Box
        sx={{
          backgroundColor: "#D7D7D7",
          width: "100%",
          height: isMobile ? "100vh" : "100%",
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

          <Box
            mt={4}
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              alignItems: "center",   
              justifyContent: { xs: "center", md: "flex-start" },  
            }}
          >
            <a
              href="https://github.com/sayyadshahid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/git.svg`}
                alt="GitHub"
                style={{ height: 40 }}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shahid-sayyad-23a0bb331/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/linked in.svg`}
                alt="LinkedIn"
                style={{ height: 40 }}
              />
            </a>

            {/* Download CV */}
            <a
              href="./shahid CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{
                  color: "white",
                  bgcolor: "black",
                  borderRadius: 10,
                  height: 50,
                  fontWeight: 600,
                  px: 3,
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
              >
                Download CV
              </Button>
            </a>
          </Box>
        </Box>
      </Box>


      {!isMobile ? (
        // Desktop version (with rotated overlay)
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
        >
          <Box
            sx={{
              width: "600px",
              height: "600px",
              transform: "rotate(-10deg)",
              mr: 65,
            }}
          >
            <EarthCanvas />
          </Box>
        </Box>
      ) : (

        <>
          <Box
            sx={{
              width: "25%",
              height: "100vh",
              position: "absolute",
              ml: "75%",
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
          </Box>

          <Box sx={{
            width: '30%',
            height: '100vh',
            position: 'absolute',
            bgcolor: 'transparent',
            zIndex: 1,

          }}>

          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000", // optional
            }}
          >

            <Box
              sx={{
                width: "440px",
                height: "440px",
                transform: "rotate(-10deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 10
              }}
            >
              <EarthCanvas />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
