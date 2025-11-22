import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Link,
  CircularProgress,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
 
export default function Contact() {
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const leftElements = document.querySelectorAll('[data-aos-id="left"]');
    const rightElements = document.querySelectorAll('[data-aos-id="right"]');

    leftElements.forEach((el) => {
      el.setAttribute("data-aos", isMobile ? "fade-up" : "fade-right");
    });
    rightElements.forEach((el) => {
      el.setAttribute("data-aos", isMobile ? "fade-up" : "fade-left");
    });
  }, []);


  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },

    onSubmit: async (values, { resetForm }) => {
      console.log("Form Values:", values);
      console.log("Test:", process.env.REACT_APP_TEST);


      const payload = {
        service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CONTACT,
        user_id: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: "i.shahidsayyad@gmail.com",
          fullName: values.fullName || "N/A",
          email: values.email || "N/A",
          message: values.message || "N/A",
          reply_to: values.email || "N/A",
        },
      };

      try {
        setLoading(true);
        await axios.post("https://api.emailjs.com/api/v1.0/email/send", payload);
        toast.success("Message sent successfully!");
        resetForm();

      } catch (error) {
          toast.error("Failed to send message. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      id="contact"
      sx={{
        background: "radial-gradient(circle, #f1f1f1 0%, #D7D7D7 100%)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <img
          src={`${process.env.PUBLIC_URL}/breaker.svg`}
          alt="breaker"
          style={{ maxWidth: "200px" }}
          data-aos="fade-down"
        />
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: 1100,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            mx: "auto",
          }}
        >
          {/* Left: Contact Options */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Paper
              data-aos-id="left"
              data-aos="fade-right"
              elevation={0}
              sx={{
                bgcolor: "transparent",
                border: "1px solid grey",
                borderRadius: 3,
                p: 4,
                color: "#020202",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 260,
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: 36, color: "#000000", mb: 1 }} />
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                Email
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa", mb: 1 }}>
                i.shahidsayyad@gmail.com
              </Typography>
              <Link
                href="mailto:i.shahidsayyad@gmail.com"
                underline="hover"
                sx={{ color: "gray", fontWeight: 500 }}
              >
                Send a message
              </Link>
            </Paper>

            <Paper
              data-aos-id="left"
              data-aos="fade-right"
              data-aos-delay="150"
              elevation={0}
              sx={{
                bgcolor: "transparent",
                border: "1px solid grey",
                borderRadius: 3,
                p: 4,
                color: "#000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 260,
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 36, color: "#3d3d3d", mb: 1 }} />
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                WhatsApp
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa", mb: 1 }}>
                +91 8600330286
              </Typography>
              <Link
                href="https://wa.me/8600330286"
                underline="hover"
                sx={{ color: "gray", fontWeight: 500 }}
              >
                Send a message
              </Link>
            </Paper>
          </Box>

          {/* Right: Contact Form */}
          <Box
            data-aos-id="right"
            data-aos="fade-left"
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: { md: 6 },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#b0bec5",
                fontWeight: 400,
                mb: 0.5,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#646464",
                fontWeight: 700,
                letterSpacing: 1,
                mb: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Contact Me
            </Typography>

            {/* ✅ Contact Form */}
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "100%",
                maxWidth: 550,
                mx: { xs: "auto", md: 0 },
              }}
              autoComplete="off"
            >
              <TextField
                variant="standard"
                placeholder="Your Full Name"
                name="fullName"
                fullWidth
                value={formik.values.fullName}
                onChange={formik.handleChange}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  input: { color: "gray" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "grey",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#565657",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#565657",
                  },
                }}
                required
              />
              <TextField
                variant="standard"
                placeholder="Your Email"
                name="email"
                fullWidth
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  input: { color: "gray" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "grey",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#565657",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#565657",
                  },
                }}
                required
              />
              <TextField
                variant="standard"
                placeholder="Your Message"
                name="message"
                fullWidth
                multiline
                minRows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  textarea: { color: "gray" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "grey",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#565657",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#565657",
                  },
                }}
                required
              />

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: "#000000",
                  color: "#fff",
                  fontWeight: 600,
                  width: 180,
                  alignSelf: "flex-start",
                  borderRadius: 10,
                  mt: 1,
                  padding: "10px 20px",
                  "&:hover": {
                    bgcolor: "grey",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
