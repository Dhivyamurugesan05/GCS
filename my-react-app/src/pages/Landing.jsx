import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          Gayathiri Calibration Services Private Limited
        </h2>

        <div className="nav-links">
           {/* HOME BUTTON ADDED HERE */}
          <Link to="/Home" className="nav-btn home-btn">
            Home
          </Link>

          {/* LOGIN BUTTON ADDED HERE */}
          <Link to="/login" className="nav-btn login-btn">
            Login
          </Link>

          
           {/* SERVICES BUTTON ADDED HERE */}
          <Link to="/Service" className="nav-btn service-btn">
            Services
          </Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-card">
          <h1>Accurate & Reliable Calibration Services</h1>
          <p>
            We provide industry-standard calibration services ensuring
            compliance, precision, and performance for your business.
          </p>
          <button className="cta-btn">Get free Technical guidance</button>
        </div>
      </section>


      {/* STATS */}
      <section className="stats">
        <div className="stat-box">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-box">
          <h2>500+</h2>
          <p>Clients Served</p>
        </div>
        <div className="stat-box">
          <h2>ISO Certified</h2>
          <p>Quality Standards</p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>
            "Excellent service and professional calibration support.
            Highly recommended!"
          </p>
          <span>- Industrial Client</span>
        </div>
      </section>

      <footer>
        © 2026 Gayathiri Calibration Services Pvt Ltd
      </footer>
    </>
  );
}

export default Landing;
