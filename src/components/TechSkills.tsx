import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const skills = [
  { name: "HTML 5", img: `${process.env.PUBLIC_URL}/skills/html.svg` },
  { name: "Css", img: `${process.env.PUBLIC_URL}/skills/css.svg` },
  { name: "Bootstrap", img: `${process.env.PUBLIC_URL}/skills/bootstrap.svg` },
  { name: "Material UI", img: `${process.env.PUBLIC_URL}/skills/mui.svg` },
  { name: "jQuery", img: `${process.env.PUBLIC_URL}/skills/jquery.svg` },
  { name: "JavaScript", img: `${process.env.PUBLIC_URL}/skills/js.svg` },
  { name: "Type Script", img: `${process.env.PUBLIC_URL}/skills/ts.svg` },
  { name: "React", img: `${process.env.PUBLIC_URL}/skills/react.svg` },
  { name: "Next.JS", img: `${process.env.PUBLIC_URL}/skills/next-js.svg` },
  { name: "Python", img: `${process.env.PUBLIC_URL}/skills/python-5.svg` },
  { name: "FastApi", img: `${process.env.PUBLIC_URL}/skills/fastapi-1.svg`},
  { name: "Django", img: `${process.env.PUBLIC_URL}/skills/django-community.svg` },
  { name: "MongoDB", img: `${process.env.PUBLIC_URL}/skills/mongo.svg` },
  { name: "PostgreSQL", img: `${process.env.PUBLIC_URL}/skills/postgresql.svg` },
  { name: "Git", img: `${process.env.PUBLIC_URL}/skills/Git.svg` },
  { name: "Postman", img: `${process.env.PUBLIC_URL}/skills/postman.svg` },
];

const TechSkills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #ffffff 0%, #D7D7D7  100%)",
        color: "white",
        px: { xs: 2, md: 10 },
        py: 10,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", mb: 6 }}
        data-aos="fade-down"
      >
        <img src={`${process.env.PUBLIC_URL}/breaker.svg`} alt="breaker" style={{ maxWidth: "200px" }} />
      </Box>
      <Typography
        variant="h4"
        data-aos="fade-up"
        sx={{
          color: "grey",
          fontWeight: "bold",
          letterSpacing: 2,
          fontSize: { xs: 28, md: 40 },
          textAlign: "center",
          mb: 6,
        }}
      >
        TECHNICAL SKILLS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "center",
          mt: 9,
        }}
      >
        {skills.map((skill, index) => (
          <Paper
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            elevation={3}
            sx={{
              width: 120,
              height: 130,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 2,
              p: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <Box
              component="img"
              src={skill.img}
              alt={skill.name}
              sx={{ width: 50, height: 50, mb: 3 }}
            />
            <Typography variant="caption" fontWeight="bold">
              {skill.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default TechSkills;
