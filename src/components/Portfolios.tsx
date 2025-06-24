import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease-in-out",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
  },
}));

const Cards = [
  {
    image: "/hospital managment.png",
    title: "Hospital Management (Full Stack)",
    Description:
      "A web-based Hospital Management System with multi-hospital support, secure panels, and AI chatbot integration for streamlined operations.",
    git: "https://github.com/sayyadshahid/Hospital-managment-dynamic-web-app",
    demo: "https://hospital-managment-dynamic-web-app-shahids-projects-7019af7c.vercel.app/",
  },
  {
    image: "/yazdaan.png",
    title: "Yazdaan Academic (Full Stack)",
    Description:
      "Yazdaan Academy is a web-based e-learning platform built at Fladdra Technologies, developed by me, featuring course sales, lecture access, and a secure admin panel.",
    git: "#contact",
    demo: "https://yazdaan-academy.vercel.app/aboutus",
  },
  {
    image: "/pokdex.png",
    title: "Pokedex (FrontEnd)",
    Description:
      "A web-based Hospital Management System with multi-hospital support, secure panels, and AI chatbot integration for streamlined operations.",
    git: "https://github.com/sayyadshahid/POKEDEX",
    demo: "https://pokedex-ochre-nine.vercel.app/",
  },

];

export default function AllPortfolio() {
  return (
    <Box
      id="portfolio"
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #f1f1f1 0%, #D7D7D7 100%)",
        color: "black",
        px: { xs: 2, md: 10 },
        py: 10,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", mb: 6 }}
        data-aos="fade-down"
      >
        <img src="/breaker.svg" alt="breaker" style={{ maxWidth: "200px" }} />
      </Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        data-aos="fade-up"
        sx={{
          letterSpacing: 1,
          color: "grey",
          fontSize: 50,
        }}
      >
        Portfolio
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        }}
      >
        {Cards.map((c, i) => (
          <StyledCard
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            sx={{
              minWidth: 300,
              borderRadius: 4,
              p: 1,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={c.image}
              alt={c.title}
              sx={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                objectFit: "contain",
                backgroundColor: "#fff",
              }}
            />

            <Box sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {c.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {c.Description}
                </Typography>
              </CardContent>
            </Box>

            <Box sx={{ px: 2, pb: 2 }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  href={c.git}
                  target="_blank"
                  sx={{
                    width: "auto",
                    padding: "10px 20px",
                    fontWeight: 600,
                    bgcolor: "black",
                    color: "white",
                    borderRadius: 10,
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  href={c.demo}
                  target="_blank"
                  sx={{
                    width: "auto",
                    padding: "10px 15px",
                    fontWeight: 600,
                    borderRadius: 10,
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  Live Demo
                </Button>
              </Stack>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
}
