import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import { config } from "../config";
import {
  Dialog,
  DialogContent,
  Button,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { lenis } from "./Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const SocialIcons = () => {
  const [openCV, setOpenCV] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setPdfError(false);
    setOpenCV(true);
  };

  const handleCloseCV = () => {
    setOpenCV(false);
  };

  // Lock background scroll when Resume modal is open
  useEffect(() => {
    if (openCV) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [openCV]);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const spans = social.querySelectorAll("span");
    const cleanupFns: (() => void)[] = [];

    spans.forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animationFrameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanupFns.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div className="icons-section">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
          <span>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a href={(config.contact as any).twitter || "#"} target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </span>
        </div>

        <a
          className="resume-button"
          href="#"
          onClick={handleOpenCV}
          data-cursor="disable"
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      </div>

      {/* Resume Modal View - Centered Modal Popup */}
      <Dialog
        fullScreen={false}
        open={openCV}
        onClose={handleCloseCV}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: "800px",
            maxHeight: "90vh",
            height: "auto",
            borderRadius: 3,
            bgcolor: "#fff",
            overflow: "hidden",
            position: "relative",
            m: { xs: 2, md: 4 },
          },
        }}
      >
        {/* Top-Right Download Button */}
        <Button
          component="a"
          href="./shahid-CV.pdf"
          download="Shahid_Sayyad_Resume.pdf"
          variant="contained"
          size="small"
          startIcon={<DownloadIcon />}
          sx={{
            position: "absolute",
            right: 14,
            top: 14,
            zIndex: 10,
            bgcolor: "#0b080c",
            color: "#ffffff",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "13px",
            fontWeight: 600,
            px: 2.2,
            py: 0.7,
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
            "&:hover": {
              bgcolor: "#c2a4ff",
              color: "#0b080c",
            },
          }}
        >
          Download
        </Button>

        <DialogContent
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            bgcolor: "#fff",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              minHeight: "100%",
              pt: 0,
              pb: 0,
            }}
          >
            {pdfError ? (
              <Box
                sx={{
                  width: "100%",
                  height: isMobile ? "100vh" : "80vh",
                  p: 0,
                }}
              >
                <iframe
                  src="./shahid-CV.pdf"
                  title="Shahid Sayyad CV"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </Box>
            ) : (
              <Document
                file="./shahid-CV.pdf"
                externalLinkTarget="_blank"
                onLoadError={() => setPdfError(true)}
                loading={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{ color: "#333" }}>Loading CV...</Typography>
                  </Box>
                }
                error={
                  <Box
                    sx={{
                      width: "100%",
                      height: isMobile ? "100vh" : "80vh",
                      p: 0,
                    }}
                  >
                    <iframe
                      src="./shahid-CV.pdf"
                      title="Shahid Sayyad CV"
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </Box>
                }
              >
                <Page
                  pageNumber={1}
                  renderTextLayer={false}
                  renderAnnotationLayer={true}
                  width={isMobile ? window.innerWidth : 800}
                />
              </Document>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SocialIcons;
