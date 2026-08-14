import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import PortfolioBottomNav from "./BottomNav";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import setSplitText from "./utils/splitText";

const MainContainer = () => {
  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <PortfolioBottomNav />
      <SocialIcons />
      {/* Single Hero Photo animated across sections */}
      <div className="single-hero-photo">
        <img src="/images/shahid.png" alt="Shahid" />
      </div>
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStackNew />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
