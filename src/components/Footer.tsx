import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Stack,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuBookIcon from "@mui/icons-material/MenuBook"; // For "Medium" icon substitute
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const navLinks = [
  { label: "Home", icon: <HomeIcon />, href: "#" },
  { label: "About", icon: <InfoIcon />, href: "#about" },
  { label: "Experience", icon: <WorkIcon />, href: "#experience" },
  { label: "Portfolio", icon: <FolderIcon />, href: "#portfolio" },
  { label: "Contact", icon: <ContactMailIcon />, href: "#contact" },
];

const socialLinks = [
  { icon: <GitHubIcon />, href: "https://github.com/sayyadshahid" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/shahid-sayyad-23a0bb331/?originalSubdomain=in" },
  { icon: <InstagramIcon />, href: "#" },
];

const bottomIcons = [
  <HomeIcon />,
  <InfoIcon />,
  <MenuBookIcon />,
  <FavoriteBorderIcon />,
  <LockOutlinedIcon />,
];

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        pt: 3,
        pb: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        maxHeight: "200px",
        position: "relative",
      }}
      component="footer"
    >
      {/* Top Navigation */}
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        sx={{
          mb: 3,
          flexWrap: "wrap",
          gap: 2, // Adjusted for spacing on smaller screens
          textAlign: "center",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            underline="none"
            color="white"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" }, // Font size adjusts for smaller screens
              fontWeight: 500,
              "&:hover": { color: "#c0c0c0" },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{
          mb: 2,
          flexWrap: "wrap", // Make sure icons are wrapped on smaller screens
          gap: 2,
        }}
      >
        {socialLinks.map((item, i) => (
          <IconButton
            key={i}
            href={item.href}
            sx={{
              bgcolor: "#302f2f",
              color: "white",
              width: 48,
              height: 48,
              "&:hover": { bgcolor: "#222" },
              borderRadius: "50%",
              fontSize: { xs: 24, sm: 28 }, // Adjusted icon size on small screens
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>

      {/* Copyright */}
      <Typography
        variant="body2"
        align="center"
        color="white"
        sx={{
          mt: 1,
          mb: 5,
          fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjusted font size on smaller screens
        }}
      >
        © 2022 Shahid Sayyad | All rights reserved.
      </Typography>
    </Box>
  );
}
