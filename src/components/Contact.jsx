import { useState } from "react";

import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);

    const mailtoLink =
      `mailto:sandip.satpute0402@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            Get In Touch
          </span>

          <h2>
            Let's work <span>together</span>
          </h2>

          <p>
            Have a question or want to discuss an opportunity?
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-details">

            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>
                <strong>Pune, India</strong>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <span>Phone</span>

                <a href="tel:+919022829635">
                  +91 9022829635
                </a>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:sandip.satpute0402@gmail.com">
                  sandip.satpute0402@gmail.com
                </a>
              </div>
            </div>

            <div className="social-card glass-card">

              <h3>
                Connect with me
              </h3>

              <div className="contact-socials">

                <a
                  href="https://github.com/sandip511"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/sandip-satpute-549417285/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/sandip_satpute99/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>

              </div>

            </div>

          </div>

          <div className="contact-form-card glass-card">

            <h3>
              Send me a message
            </h3>

            <form
              onSubmit={handleSubmit}
              noValidate
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <small className="form-error">
                      {errors.name}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <small className="form-error">
                      {errors.email}
                    </small>
                  )}
                </div>

              </div>

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can I help?"
                  value={formData.subject}
                  onChange={handleChange}
                />

                {errors.subject && (
                  <small className="form-error">
                    {errors.subject}
                  </small>
                )}

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                />

                {errors.message && (
                  <small className="form-error">
                    {errors.message}
                  </small>
                )}

              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
                <FiSend />
              </button>

              {submitted && (
                <p className="form-success">
                  Your email client should open shortly.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;