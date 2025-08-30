import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Person, School, Work } from "@mui/icons-material";

export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #D7D7D7, #c9c9c9)",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <Box
          data-aos="zoom-in"
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box bgcolor={"grey"} sx={{ borderRadius: 4 }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/shahid.jpeg`}
              alt="profile"
              sx={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 4,
                boxShadow: 10,
                transform: "rotate(6deg)",
                transition: "all 1s ease",
                ":hover": {
                  boxShadow: 6,
                  transform: "rotate(0deg)",
                },
              }}
            />
          </Box>
        </Box>

        {/* Text & Cards Section */}
        <Box
          sx={{ flex: 2, width: "100%" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Typography
            variant="overline"
            sx={{ color: "grey", letterSpacing: 2 }}
          >
            Get To Know
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4, fontSize: { xs: 28, md: 36 } }}
          >
            About Me
          </Typography>

          {/* Info Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            {[
              {
                icon: <Work fontSize="large" sx={{ color: "grey", mb: 1 }} />,
                title: "Experience",
                desc: "8+ months of Working",
              },
              {
                icon: <School fontSize="large" sx={{ color: "grey", mb: 1 }} />,
                title: "Education",
                desc: "Bachelor's Of Science In Computer Science",
              },
              {
                icon: <Person fontSize="large" sx={{ color: "grey", mb: 1 }} />,
                title: "Projects",
                desc: "5+ Completed",
              },
            ].map((card, idx) => (
              <Card
                key={idx}
                data-aos="fade-up"
                data-aos-delay={300 + idx * 100}
                sx={{
                  backgroundColor: "#D7D7D7",
                  border: "1px solid grey",
                  borderRadius: 3,
                  textAlign: "center",
                  width: { xs: "100%", sm: 200 },
                  height: { sm: idx === 1 ? 180 : 150 },  
                  transition: "all 0.6s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  ":hover": {
                    boxShadow: 6,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  {card.icon}
                  <Typography variant="subtitle1" fontWeight="bold">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.8,
              textAlign: isMobile ? "center" : "left",
            }}
            data-aos="fade-in"
            data-aos-delay="500"
          >
            I am a Full Stack Web Developer with robust problem-solving skills
            and proven experience developing websites.
          </Typography>

          {/* CTA Button */}
          <Box textAlign={isMobile ? "center" : "left"} data-aos="zoom-in-up">
            <a href="#contact">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  ":hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Let's Talk
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
