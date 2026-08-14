import React, { useState, useEffect, useRef } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { lenis } from "./Navbar";

export default function PortfolioBottomNav() {
  const [value, setValue] = useState(0);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));  

  const sectionIds = [
    "home",
    "about",
    "skills",
    "career",
    "work",
    "techstack",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return;

      const currentY = window.scrollY;
      if (currentY < 150) {
        setValue(0);
        return;
      }

      // Check sections from bottom to top using absolute bounding client rect
      const triggerPoint = currentY + window.innerHeight * 0.4;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = rect.top + currentY;
          if (triggerPoint >= absoluteTop) {
            setValue(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    isClickingRef.current = true;

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1800);

    const sectionId = sectionIds[newValue];
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      if (lenis) {
        lenis.scrollTo(targetElement as HTMLElement, { duration: 1.5 });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMouseMoveAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffsets((prev) => {
      const next = [...prev];
      next[index] = { x: x * 0.35, y: y * 0.35 };
      return next;
    });
  };

  const handleMouseLeaveAction = (index: number) => {
    setOffsets((prev) => {
      const next = [...prev];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  };

  const renderNavAction = (index: number, icon: React.ReactElement) => {
    const isActive = value === index;
    const offset = offsets[index] || { x: 0, y: 0 };

    let circleBg = "transparent";
    let iconColor = "rgba(234, 229, 236, 0.55)";

    if (isNavHovered) {
      if (isActive) {
        circleBg = "#3b3b3bea";
        iconColor = "#ffffff";
      } else {
        circleBg = "transparent";
        iconColor = "#0b080c";
      }
    } else {
      if (isActive) {
        circleBg = "#ffffff";
        iconColor = "#0b080c";
      } else {
        circleBg = "transparent";
        iconColor = "rgba(234, 229, 236, 0.55)";
      }
    }

    return (
      <BottomNavigationAction
        key={index}
        onMouseMove={(e) => handleMouseMoveAction(e, index)}
        onMouseLeave={() => handleMouseLeaveAction(index)}
        icon={
          <Box
            sx={{
              width: isMobile ? 30 : 36,
              height: isMobile ? 30 : 36,
              borderRadius: "50%",
              bgcolor: circleBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isActive ? "0 4px 15px rgba(0, 0, 0, 0.25)" : "none",
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: "transform 0.15s ease-out, background-color 0.3s ease",
            }}
          >
            {React.cloneElement(icon, {
              style: {
                color: iconColor,
                fontSize: isMobile ? 17 : 20,
                transition: "color 0.3s ease",
              },
            })}
          </Box>
        }
      />
    );
  };

  return (
    <Paper
      data-cursor="icons"
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
      sx={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 20,
        zIndex: 9999,
        borderRadius: 8,
        px: isMobile ? 1.0 : 2.0,
        py: 0.4, 
        bgcolor: isNavHovered ? "#d8c2ff" : "rgba(18, 14, 22, 0.85)",
        boxShadow: isNavHovered
          ? "0 0 30px rgba(194, 164, 255, 0.6), 0 0 50px rgba(194, 164, 255, 0.3)"
          : "0 12px 40px rgba(0, 0, 0, 0.65), 0 0 20px rgba(194, 164, 255, 0.08)",
        width: "auto",
        maxWidth: "95vw",
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: isNavHovered
          ? "1px solid rgba(216, 194, 255, 0.8)"
          : "1px solid rgba(255, 255, 255, 0.12)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      elevation={4}
    >
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => handleNavigation(newValue)}
        showLabels={false}
        sx={{
          bgcolor: "transparent",
          width: "100%",
          alignItems: "center",
          ".Mui-selected": { color: "#fff" },
          ".MuiBottomNavigationAction-root": {
            minWidth: 0,
            padding: "0 3px",
            maxWidth: isMobile ? 40 : 48,
          },
        }}
      >
        {renderNavAction(0, <HomeRoundedIcon />)}
        {renderNavAction(1, <PersonRoundedIcon />)}
        {renderNavAction(2, <CodeRoundedIcon />)}
        {renderNavAction(3, <WorkHistoryRoundedIcon />)}
        {renderNavAction(4, <GridViewRoundedIcon />)}
        {renderNavAction(5, <TerminalRoundedIcon />)}
        {renderNavAction(6, <MailRoundedIcon />)}
      </BottomNavigation>
    </Paper>
  );
}
