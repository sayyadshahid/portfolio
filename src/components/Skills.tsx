import React from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Skill = {
  name: string;
  level: string;
};

type SkillBoxProps = {
  title: string;
  data: Skill[];
};

const skills = {
  frontend: [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "Material UI", level: "Advanced" },
    { name: "Bootstrap", level: "Basic" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Type Script", level: "Intermediate" },
    { name: "Jquery", level: "Basic" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Basic" },
  ],
  backend: [
    { name: "Python", level: "Advanced" },
    { name: "FastApi", level: "Advanced" },
    { name: "Django", level: "Basic" },
    { name: "Rest Api", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
  ],
};

export default function MyExperience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const SkillItem = ({ name, level }: Skill) => (
    <Box display="flex" alignItems="flex-start" gap={1}>
      <CheckCircleIcon sx={{ color: "#584c4c", fontSize: 18, mt: 0.5 }} />
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "0.95rem" }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", color: "#aaa" }}>
          {level}
        </Typography>
      </Box>
    </Box>
  );

  const SkillBox = ({ title, data }: SkillBoxProps) => (
    <Paper
      data-aos="fade-up"
      data-aos-duration="1000"
      id="experience"
      elevation={4}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.185)",
        backdropFilter: "blur(20px)",
        border: "1px solid grey",
        borderRadius: 5,
        padding: 4,
        minWidth: 300,
        width: "100%",
        maxWidth: 500,
        flex: 1,
        height: 370,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          borderColor: "#00BFFF",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "GREY",
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
      >
        {data.map((skill: Skill, i: number) => (
          <Box key={i} width="48%">
            <SkillItem name={skill.name} level={skill.level} />
          </Box>
        ))}
      </Box>
    </Paper>
  );

  return (
    <Box
      data-aos="fade-in"
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #fafafa 0%, #D7D7D7  100%)",
        color: "white",
        px: { xs: 2, md: 4 },
        py: 10,
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <img src={`${process.env.PUBLIC_URL}/breaker.svg`} alt="breaker" style={{ maxWidth: "200px" }} />
      </Box>

      <Typography variant="overline" sx={{ color: "GREY", letterSpacing: 2 }}>
        What Skill's I Have
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          fontSize: 50,
          color: "grey",
        }}
      >
        My Experience
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <SkillBox title="Frontend Development" data={skills.frontend} />
        <SkillBox title="Backend Development" data={skills.backend} />
      </Box>
    </Box>
  );
}
