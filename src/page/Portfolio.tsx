import { Box } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../components/Home";
import AboutSection from "../components/abou";
import AboutMe from "../components/Aboutme";
import MySkills from "../components/Skills";
import TechSkills from "../components/TechSkills";
import AllPortfolio from "../components/Portfolios";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import PortfolioBottomNav from "../components/BottomNav";  
import MyExperience from "../components/Experience";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
    </>
  );
}
