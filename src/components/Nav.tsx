import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Experience", href: "#exp" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Paper
      id="home"
        sx={{
          position: "absolute",
          top: 4,
          left: 0,
          width: "96%",
          padding: "16px 32px",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",
          zIndex: 4,
        }}
      >
        {/* Logo */}
        <Box>
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" style={{ height: 40 }} />
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item, index) => (
              <a href={item.href} key={index}>
                <Button
                  sx={{
                    color: item.label === "Contact" ? "#000" : "white",
                    bgcolor: item.label === "Contact" ? "white" : "transparent",
                    borderRadius: item.label === "Contact" ? 10 : 0,
                    padding: item.label === "Contact" ? "10px 20px" : "auto",
                    fontWeight: 600,
                  }}
                >
                  {item.label.toUpperCase()}
                </Button>
              </a>
            ))}
          </Box>
        )}

        {/* Mobile Nav */}
        {isMobile && (
          <IconButton
            sx={{ color: "#000000" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Paper>

      {/* Drawer (Mobile - Top Drawer) */}
    <Drawer
  anchor="top"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  sx={{
    '& .MuiDrawer-paper': {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent white background
      backdropFilter: 'blur(1px)', // Apply blur effect to the content behind the drawer
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.7)', // Slight border for contrast
      padding: '10px',
    }
  }}
>
  <List>
    {navItems.map((item, index) => (
      <ListItem disablePadding key={index}>
        <ListItemButton
          component="a"
          href={item.href}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Drawer>

    </>
  );
}
