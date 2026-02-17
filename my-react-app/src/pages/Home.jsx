import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
           GCS specializes in advanced electrical instruments, calibration
          systems, and industrial testing solutions. We are committed to
          delivering accuracy, safety, and performance to industries
          across India.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
          <h2>Our Journey</h2>
        <p>
          Established in 2013 under Gayathiri Computer Solutions, we have built a strong reputation for precision and reliability in the field of instrument calibration.

          At Gayathiri Calibration Services, excellence drives everything we do. By combining cutting-edge master equipment, certified professionals, and meticulously controlled environments, we provide calibration services that guarantee uncompromising accuracy and dependable performance.
        </p>
      </section>

      {/* CLIENTS SECTION */}
      <section className="clients-section">
        <h2 className="clients-title">Our Trusted Clients</h2>

        <div className="clients-container">
          <img src="/clients/aquasub.png" alt="Aquasub" />
          <img src="/clients/bharat.png" alt="Bharat" />
          <img src="/clients/cri2.png" alt="CRI Pumps" />
          <img src="/clients/crompton.jpeg" alt="Crompton" />
          <img src="/clients/egger.png" alt="Egger" />
          <img src="/clients/elgi.png" alt="Elgi" />
          <img src="/clients/grundfos.png" alt="Grundfos" />
          <img src="/clients/kirloskar.png" alt="Kirloskar" />
          <img src="/clients/ledl.jpg" alt="LEDL" />
          <img src="/clients/mahendra.png" alt="Mahendra" />
          <img src="/clients/psg.png" alt="PSG" />
        </div>
      </section>

    </div>
  );
}

export default Home;
