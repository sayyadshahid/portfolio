import React, { JSX, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionIcon from "@mui/icons-material/Description";

function PortfolioBottomNav() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sm = 600px

  const handleNavigation = (newValue: any) => {
    setValue(newValue);

    const sectionIds = ["home", "about", "skills", "portfolio", "exp", "contact"];
    const sectionId = sectionIds[newValue];

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavAction = (index: number, icon: JSX.Element) => (
    <BottomNavigationAction
      icon={
        <Box
          sx={{
            width: isMobile ? 38 : 45,
            height: isMobile ? 38 : 45,
            borderRadius: "50%",
            bgcolor: value === index ? "#3b3b3bea" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: value === index ? "blur(8px)" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {React.cloneElement(icon, {
            style: {
              color: value === index ? "#ffffff" : "#706e6e",
              fontSize: isMobile ? 20 : 24,
            },
          })}
        </Box>
      }
    />
  );

  return (
    <>
      <Box sx={{ paddingBottom: "0px" }} />

      <Paper
        sx={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 16,
          zIndex: 1000,
          borderRadius: 10,
          px: isMobile ? 1 : 3,
          py: 0.5,
          bgcolor: "rgba(100, 100, 100, 0.15)",
          boxShadow: 3,
          width: isMobile ? "90%" : "auto",
          minWidth: isMobile ? "unset" : 350,
          maxWidth: "95vw",
          display: "flex",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "all 0.3s ease-in-out",
        }}
        elevation={5}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)}
          showLabels={false}
          sx={{
            bgcolor: "transparent",
            width: "100%",
            overflowX: isMobile ? "auto" : "hidden",
            ".Mui-selected": { color: "#fff" },
            ".MuiBottomNavigationAction-root": {
              minWidth: 0,
              maxWidth: isMobile ? 48 : 56,
              color: "#585858",
            },
          }}
        >
          {renderNavAction(0, <HomeIcon />)}
          {renderNavAction(1, <DescriptionIcon />)}
          {renderNavAction(2, <MenuBookIcon />)}
          {renderNavAction(3, <FavoriteBorderIcon />)}
          {renderNavAction(4, <WorkOutlineIcon />)}
          {renderNavAction(5, <PersonIcon />)}
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default PortfolioBottomNav;
