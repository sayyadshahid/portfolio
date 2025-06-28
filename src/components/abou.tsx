import { Box, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
     
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h5"
        sx={{
          letterSpacing: 4,
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: 24, md: 32 },
        }}
      >
        ABOUT
      </Typography>

      {/* Description Text */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          lineHeight: 1.8,
          fontSize: { xs: 16, md: 18 },
        }}
      >
        Hi, I'm <strong>Sayyed Shahid</strong>, a passionate and self-driven web developer.
        This portfolio website showcases my skills, creativity, and dedication toward
        building modern, responsive web applications. I specialize in both frontend and backend development, and I enjoy turning ideas into functional, user-friendly websites.
        <br /><br />
        This portfolio project is designed and coded by me to highlight my work, skills, and the journey I'm on as a developer.
      </Typography>

      {/* Read More Button */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          border: "1px solid white",
          px: 2,
          py: 1,
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "white",
            color: "#1a1a1a",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            letterSpacing: 2,
            fontWeight: 600,
            mx: 1,
          }}
        >
          READ MORE
        </Typography>
      </Box>
    </Box>
  );
}
