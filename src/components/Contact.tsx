import React, { useState, useEffect } from "react";
import { MdCopyright, MdMailOutline, MdSend } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline.fromTo(
      ".contact-header-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    contactTimeline.fromTo(
      ".contact-card-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );

    contactTimeline.fromTo(
      ".contact-form-wrapper",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    return () => {
      contactTimeline.kill();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const payload = {
      service_id: "service_5n8l8xr",
      template_id: "template_s6umhs9",
      user_id: "wYpOotgmvo0wbNjqv",
      template_params: {
        to_email: config.contact.email,
        fullName: formData.fullName || "N/A",
        email: formData.email || "N/A",
        message: formData.message || "N/A",
        reply_to: formData.email || "N/A",
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "Message sent successfully! I will get back to you soon.",
        });
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please email directly to " + config.contact.email,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        {/* Main Content Layout: Cards Left, Form Right */}
        <div className="contact-main-grid">
          {/* Left Column: Contact Cards */}
          <div className="contact-left-cards">
            {/* Email Card */}
            <div className="contact-card-item" data-cursor="disable">
              <div className="contact-card-icon">
                <MdMailOutline />
              </div>
              <h4>Email</h4>
              <p className="contact-card-val">{config.contact.email}</p>
              <a
                href={`mailto:${config.contact.email}`}
                className="contact-card-link"
                data-cursor="disable"
              >
                Send a message &rarr;
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-card-item" data-cursor="disable">
              <div className="contact-card-icon whatsapp-icon">
                <FaWhatsapp />
              </div>
              <h4>WhatsApp</h4>
              <p className="contact-card-val">{config.contact.phone}</p>
              <a
                href={config.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
                data-cursor="disable"
              >
                Send a message &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper">
            <span className="contact-subtitle">Get in Touch</span>
            <h2 className="contact-header-title">Contact Me</h2>

            <form onSubmit={handleSubmit} className="modern-contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="modern-input"
                  data-cursor="disable"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="modern-input"
                  data-cursor="disable"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="modern-input modern-textarea"
                  data-cursor="disable"
                ></textarea>
              </div>

              {statusMessage.text && (
                <div
                  className={`status-alert ${statusMessage.type}`}
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="contact-submit-btn"
                data-cursor="disable"
              >
                {loading ? (
                  <span className="btn-loading">Sending...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <MdSend className="send-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="contact-footer-credit">
          <p>
            Designed and Developed by <span>{config.developer.fullName}</span>
          </p>
          <h5>
            <MdCopyright /> {new Date().getFullYear()} All Rights Reserved
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
