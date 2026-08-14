import { useEffect } from "react";
import "./styles/Navbar.css";
import Lenis from "lenis";
import { HiEnvelope } from "react-icons/hi2";

export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Synchronize section clicks with smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            lenis?.scrollTo(targetElement, { duration: 1.5 });
          } else {
            if (targetId === "") {
              lenis?.scrollTo(0, { duration: 1.5 });
            }
          }
        }
      });
    });

    // Handle resize
    window.addEventListener("resize", () => {
      lenis?.resize();
    });

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SS
        </a>
        <a
          href="mailto:i.shahidsayyad@gmail.com"
          className="navbar-email-pill"
          data-cursor="disable"
        >
          <span className="email-icon">
            <HiEnvelope style={{ fontSize: "19px" }} />
          </span>
          <span className="email-text">i.shahidsayyad@gmail.com</span>
        </a>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
