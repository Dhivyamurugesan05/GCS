import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-wrapper">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Gayathiri Calibration Services Private Limited</h2>
        <Link to="/" className="nav-btn">Back to Home</Link>
      </nav>

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Your trusted calibration partner in Coimbatore</p>
      </div>

      <div className="contact-content">

        {/* COMPANY DETAILS */}
        <div className="company-card">
          <h2>Company Information</h2>

          <p><strong>Gayathiri Calibration Services Pvt Ltd</strong></p>
          <p>CIN: U71200TZ2024PTC032470</p>
          <p>Coimbatore, Tamil Nadu, India</p>

          <div className="divider"></div>

          <h3>Reach Us</h3>

          <p>📞 +91 9442257582</p>
          <p>📧 info@gcscare.in</p>
          <p>📍 Masakalipalayam, Coimbatore - 641015</p>
        </div>

        {/* FORM */}
        <div className="form-card">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
