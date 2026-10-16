import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function setImageTimeline() {
  if (window.innerWidth <= 1024) return;

  // Initial state: centered on Section 1
  gsap.set(".single-hero-photo", {
    left: "50%",
    xPercent: -50,
    opacity: 1,
    display: "flex",
    pointerEvents: "none",
  });

  // Unified master timeline for .single-hero-photo
  const masterPhotoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      endTrigger: ".whatIDO",
      end: "top 70%",
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });

  // Phase 1 (0 to 0.45): Section 1 (Landing) -> Section 2 (About)
  masterPhotoTl
    .to(".single-hero-photo", {
      left: "26%",
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.45,
    }, 0)
    .to(".landing-container", { opacity: 0, duration: 0.25 }, 0)
    .to(".landing-container", { y: "40%", duration: 0.45 }, 0)
    .fromTo(".about-me", { y: "-30%" }, { y: "0%", duration: 0.45 }, 0)

  // Phase 2 (0.45 to 0.85): Hold photo on left side during About section
    .to(".single-hero-photo", {
      left: "26%",
      opacity: 1,
      duration: 0.4,
    }, 0.45)

  // Phase 3 (0.85 to 1.0): Fade out completely as user approaches Section 3 (What I Do)
    .to(".single-hero-photo", {
      opacity: 0,
      scale: 0.85,
      duration: 0.15,
      ease: "power1.out",
    }, 0.85);

  // Hard guarantee: hide image whenever scroll is at or past What I Do
  ScrollTrigger.create({
    trigger: ".whatIDO",
    start: "top 60%",
    end: "max",
    onEnter: () => {
      gsap.to(".single-hero-photo", { opacity: 0, display: "none", duration: 0.2 });
    },
    onLeaveBack: () => {
      gsap.to(".single-hero-photo", { display: "flex", duration: 0.1 });
    },
  });
}

export function setAllTimeline() {
  setImageTimeline();

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 50%",
      end: "bottom 30%",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "0%" },
      { maxHeight: "100%", duration: 1, ease: "none" },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.2 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
