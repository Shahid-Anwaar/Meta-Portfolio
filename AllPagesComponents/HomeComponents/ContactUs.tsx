"use client";

// import { send_application_form_email } from "@/DAL";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";
// import { useSnackbar } from "notistack";

type ContactInfoItem = {
  icon: "Mail" | "MapPin" | "Phone" | "Send" | string;
  info: string;
  link?: string;
};

type ContactUsContent = {
  contact_us_badge?: string;
  contact_us_detail?: string; // HTML
  send_message_title?: string;
  send_message_description?: string;

  visit_message_title?: string;
  visit_message_description?: string;

  success_message_title?: string;
  success_message_description?: string;
  success_message_badge?: string;

  // optional: allow overriding map iframe src if you want later
  map_iframe_src?: string;
  map_title?: string;
  map_company?: string;
  map_address_line1?: string;
  map_address_line2?: string;
};

type ContactProps = {
  pageContent?: any; // not used here, kept for compatibility
  contactUs: ContactUsContent;
  contactInfo?: ContactInfoItem[];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizePhone = (value: string) =>
  value
    .replace(/[^\d+ ]/g, "") // allow digits, +, spaces
    .replace(/\s+/g, " ")
    .trim();

const Contact = ({ pageContent, contactUs, contactInfo }: ContactProps) => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Icon mapping for contact info
  const iconMap = useMemo(
    () => ({
      Mail,
      MapPin,
      Phone,
      Send,
    }),
    []
  );

  const validate = useCallback((): boolean => {
    const name = (formData.name || "").trim();
    const email = (formData.email || "").trim();
    const phone = normalizePhone(formData.phone || "");
    const message = (formData.message || "").trim();

    if (!name) {
    //   enqueueSnackbar("Name is required", { variant: "error" });
      return false;
    }
    if (!email) {
    //   enqueueSnackbar("Email is required", { variant: "error" });
      return false;
    }
    if (!emailRegex.test(email)) {
    //   enqueueSnackbar("Please enter a valid email address.", { variant: "error" });
      return false;
    }
    if (!phone) {
    //   enqueueSnackbar("Mobile number is required", { variant: "error" });
      return false;
    }

    // Minimum digits check (ignoring + and spaces)
    const digits = phone.replace(/[^\d]/g, "");
    if (digits.length < 7) {
    //   enqueueSnackbar("Mobile number is too short.", { variant: "error" });
      return false;
    }

    if (!message) {
    //   enqueueSnackbar("Message is required", { variant: "error" });
      return false;
    }

    return true;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      if (!validate()) return;

      setIsSubmitting(true);

      try {
        const data = new FormData();
        data.append("website", "metalogixtech");
        data.append("form_type", "ask_a_question");
        data.append("name", formData.name.trim());
        data.append("email", formData.email.trim());
        data.append("mobile", normalizePhone(formData.phone));
        data.append("message", formData.message.trim());

        // const resp: any = await send_application_form_email(data);

        // if (resp?.code === 200) {
        //   enqueueSnackbar(resp?.message || "Message sent successfully", { variant: "success" });
        //   setIsSubmitted(true);
        //   setFormData({ name: "", email: "", phone: "", message: "" });
        // } else {
        //   enqueueSnackbar(resp?.message || "Something went wrong", { variant: "error" });
        // }
      } catch (err: any) {
        // enqueueSnackbar(err?.message || "Network error. Please try again.", { variant: "error" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, validate]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      if (name === "phone") {
        const next = normalizePhone(value);

        // allow only one leading +
        const cleaned =
          next.startsWith("+")
            ? "+" + next.slice(1).replace(/\+/g, "")
            : next.replace(/\+/g, "");

        setFormData((prev) => ({ ...prev, phone: cleaned }));
        return;
      }

      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  if (isSubmitted) {
    return (
      <section id="contact" className="contact-success-section">
        <div className="contact-success-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="contact-success-content"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-success-icon"
            >
              <CheckCircle2 className="w-10 h-10" style={{ color: "var(--white)" }} />
            </motion.div>

            <h3 className="contact-success-heading">
              {contactUs?.success_message_title || "Message Sent Successfully!"}
            </h3>

            <p className="contact-success-description">
              {contactUs?.success_message_description ||
                "Thank you for reaching out to us. We will get back to you shortly."}
            </p>

            <div className="contact-success-badge">
              {contactUs?.success_message_badge || "Expected response time: 2-4 hours"}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const mapSrc =
    contactUs?.map_iframe_src ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.123456789!2d73.10123456789!3d30.668123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQwJzA1LjIiTiA3M8KwMDYnMDQuNCJF!5e0!3m2!1sen!2spk!4v1692345678901!5m2!1sen!2spk";

  return (
    <section id="contact" className="contact-section">
      {/* Modern Background Effects */}
      <div className="contact-bg-elements">
        {/* Floating Contact Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`contact-icon-${i}`}
            className="contact-floating-icon dynamic-contact-icon-position"
            style={
              {
                "--icon-left": `${15 + i * 14}%`,
                "--icon-top": `${20 + (i % 3) * 25}%`,
              } as React.CSSProperties
            }
            animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            {i % 3 === 0 ? (
              <Mail className="w-6 h-6" style={{ color: "var(--gray-300)" }} />
            ) : i % 3 === 1 ? (
              <Phone className="w-6 h-6" style={{ color: "var(--gray-300)" }} />
            ) : (
              <Send className="w-6 h-6" style={{ color: "var(--gray-300)" }} />
            )}
          </motion.div>
        ))}

        {/* Animated Light Streaks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="contact-light-streak dynamic-contact-streak-position"
            style={
              {
                "--streak-left": `${10 + i * 25}%`,
                "--streak-top": `${15 + i * 20}%`,
              } as React.CSSProperties
            }
            animate={{ x: [0, 120, 0], opacity: [0, 0.7, 0] }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Background Gradient Blobs */}
        <motion.div
          className="contact-gradient-blob contact-gradient-blob-1"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="contact-gradient-blob contact-gradient-blob-2"
          animate={{ scale: [1, 1.1, 1], x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div
        //   ref={ref}
          initial={{ opacity: 0, y: 50 }}
           animate={true ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header-wrapper"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
             animate={true ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-container"
          >
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Send className="subtitle-icon" />
            </motion.div>
            <span className="section-subtitle">{contactUs?.contact_us_badge || ""}</span>
          </motion.div>

          <div
            className="about-description"
            dangerouslySetInnerHTML={{ __html: contactUs?.contact_us_detail || "" }}
          />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="contact-main-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={true ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="contact-form-section"
          >
            <div className="contact-form-container">
              <div className="contact-form-header">
                <motion.div
                  className="contact-form-icon"
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Send className="w-8 h-8" />
                </motion.div>

                <div className="contact-form-header-text">
                  <h4 className="contact-form-title">{contactUs?.send_message_title || ""}</h4>
                  <p className="contact-form-subtitle">{contactUs?.send_message_description || ""}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">Name *</label>
                    <div className="contact-input-wrapper">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder="Your Full Name"
                        required
                        autoComplete="name"
                      />
                      <div className="contact-input-focus-line" />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Email *</label>
                    <div className="contact-input-wrapper">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder="your@email.com"
                        required
                        autoComplete="email"
                      />
                      <div className="contact-input-focus-line" />
                    </div>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Phone Number *</label>
                  <div className="contact-input-wrapper">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="(+92) 300 1122 333"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                    />
                    <div className="contact-input-focus-line" />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Message *</label>
                  <div className="contact-input-wrapper">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="contact-form-input contact-form-textarea"
                      placeholder="Tell us about your project and how we can help you..."
                      required
                    />
                    <div className="contact-input-focus-line" />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`contact-submit-btn ${isSubmitting ? "submitting" : ""}`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <div className="contact-submit-content">
                    {isSubmitting ? (
                      <>
                        <div className="contact-loading-spinner" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </div>
                  <div className="contact-submit-glow" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map + quick info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
         animate={true ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="contact-map-section"
          >
            <div className="contact-map-header">
              <motion.div
                className="contact-map-icon"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="w-8 h-8" />
              </motion.div>
              <div>
                <h4 className="contact-map-title">{contactUs?.visit_message_title || ""}</h4>
                <p className="contact-map-subtitle">{contactUs?.visit_message_description || ""}</p>
              </div>
            </div>

            <div className="contact-map-container">
              <div className="contact-map-wrapper">
                <iframe
                  src={mapSrc}
                  className="contact-google-map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={contactUs?.map_title || "Metalogix Software House Location - Sahiwal"}
                />

                <div className="contact-map-overlay">
                  <div className="contact-map-info">
                    <div className="contact-map-marker">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="contact-map-details">
                      <h5 className="contact-map-company">
                        {contactUs?.map_company || "Metalogix Software House"}
                      </h5>
                      <p className="contact-map-address">
                        {contactUs?.map_address_line1 || "Saeed Center, Jail Road"}
                        <br />
                        {contactUs?.map_address_line2 || "Sahiwal, Pakistan"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="contact-quick-info">
              {(contactInfo || []).map((info, index) => {
                const IconComponent =
                  (iconMap as Record<string, any>)[info.icon] || Mail;

                return (
                  <motion.a
                    key={index}
                    href={info.link || "#"}
                    className="contact-quick-item flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: "var(--accent-blue)" }} />
                    <span>{info.info}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
