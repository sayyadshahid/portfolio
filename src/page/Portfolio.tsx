import { Box } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sections
import Home from "../components/Home";
import AboutSection from "../components/abou";
import AboutMe from "../components/Aboutme";
import MySkills from "../components/Skills";
import TechSkills from "../components/TechSkills";
import AllPortfolio from "../components/Portfolios";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Import your bottom navigation component
import PortfolioBottomNav from "../components/BottomNav"; // Adjust the path as needed
import MyExperience from "../components/Experience";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Box sx={{ bgcolor: "#D7D7D7" }}>
        {/* No AOS for hero section */}
        <Home />
        <Box data-aos="fade-up">
          <AboutSection />
        </Box>
        <Box data-aos="fade-up">
          <AboutMe />
        </Box>
        <Box data-aos="fade-up">
          <MyExperience />
        </Box>
        <Box data-aos="zoom-in-up">
          <TechSkills />
        </Box>
        <Box data-aos="fade-up">
          <AllPortfolio />
        </Box>
        <Box data-aos="fade-up">
          <Contact />
        </Box>
        <Box data-aos="fade-up">
          <Footer />
        </Box>
      <PortfolioBottomNav />
      </Box>
      {/* Add your fixed bottom navigation here */}
    </>
  );
}
