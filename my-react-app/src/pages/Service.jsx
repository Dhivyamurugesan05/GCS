import React from "react";
import "./Service.css";

function Service() {
  const instruments = [
    {
      image: "/instruments/1.png",
      title: "Digital Precision Multimeter – Fluke 8846A",
      tagline: "Measure with Confidence. Trust Every Digit.",
      description:
        "Engineered for professionals who can’t afford uncertainty, the Fluke 8846A delivers laboratory-grade precision across voltage, current, and resistance measurements helping you test faster, troubleshoot smarter, and make data-backed decisions every time.",
    },
    {
      image: "/instruments/2.png",
      title: "Advanced Multiproduct Calibrator – Transmile 4010",
      tagline: "One Calibrator. Infinite Possibilities.",
      description:
        "The Transmile 4010 simplifies your entire calibration workflow – voltage, current, resistance, and more all in one powerful system. Save time, eliminate setup error, and achieve seamless traceability across your lab’s calibration standards.",
    },
    {
      image: "/instruments/3.png",
      title: "High Stability Decade Megaohm Box – Vaiseshika 8400",
      tagline: "Where Precision Meets Reliability.",
      description:
        "For high-resistance calibration that demands consistency, the Vaiseshika 8400 offers long-term stability and accuracy up to 10 GΩ. Built for dependable performance, it’s your trusted tool for ensuring insulation and resistance integrity.",
    },
    {
    image: "/images/4.jpg",
    title: "AC/DC Clamp Coil Adaptor – Transmille EA002",
    tagline: "Expand Your Range. Extend Your Accuracy.",
    description:
      "The Transmille EA002 allows effortless AC/DC current measurements when used with your calibrator or meter. Compact yet highly precise, it enhances flexibility while maintaining the reliability professionals expect in every test.",
  },
    {
      image: "/instruments/5.png",
      title: "Digital Power Meter – Yokogawa WT310E",
      tagline: "Power Accuracy You Can Count On.",
      description:
        "The Yokogawa WT310E delivers unmatched precision in power measurement, ideal for R&D, production, and efficiency testing. With industry-leading accuracy and easy data integration, it helps you optimise every watt of performance.",
    },
    {
    image: "/images/6.jpg",
    title: "High Voltage Probe – Pintek HVP-40",
    tagline: "Safety and Precision at High Voltage.",
    description:
      "Designed for extreme conditions, the Pintek HVP-40 ensures safe and stable voltage measurement up to 40kV. Ideal for laboratory and field applications requiring dependable high-voltage testing.",
  },
     {
    image: "/images/7.jpg",
    title: "3-Phase Calibration Source – Educe Tech P350",
    tagline: "Powerful. Precise. Three-Phase Perfect.",
    description:
      "The Educe Tech P350 delivers fully programmable 3-phase outputs for accurate calibration of meters and protection systems, simplifying complex electrical testing processes.",
  },
    {
      image: "/instruments/8.png",
      title: "Handy CAL Calibrator – Yokogawa CA71",
      tagline: "Portable Precision in the Palm of Your Hand.",
      description:
        "The Yokogawa CA71 combines multiple functions in a compact, field-ready calibrator. Whether on-site or in the lab, it offers instant accuracy for voltage, current, and thermocouple calibration wherever the job takes you.",
    },
    {
      image: "/instruments/9.png",
      title: "Thermocouple Simulator/Measurement Adapter – Transmille EA001A",
      tagline: "Simulate. Measure. Simplify Temperature Testing.",
      description:
        "The Transmille EA001A streamlines thermocouple simulation and measurement with unmatched stability and accuracy. Ideal for temperature calibration setups that demand reliability and repeatability.",
    },
    {
      image: "/instruments/10.png",
      title: "High Precision Decade Resistance Box – Vaiseshika 7400",
      tagline: "Precision You Can Set and Trust.",
      description:
        "The Vaiseshika 7400 offers ultra-stable, fine-tuned resistance control for precise calibration and measurement. Built for durability and repeatability, it ensures consistent results in demanding test environments.",
    },
    {
      image: "/instruments/11.png",
      title: "Standard Resistance – Vaiseshika 9409-B",
      tagline: "The Benchmark for True Accuracy.",
      description:
        "The Vaiseshika 9409-B provides a reliable resistance reference standard for calibration laboratories. Its stability and low temperature coefficient make it ideal for maintaining traceability and long-term measurement consistency.",
    },
  ];

  return (
    <section className="service-section">
      <h2 className="service-title">Our Calibration Instruments & Services</h2>

      {instruments.map((item, index) => (
        <div
          key={index}
          className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="service-image">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="service-content">
            <h3>{item.title}</h3>
            <h4>{item.tagline}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Service;
