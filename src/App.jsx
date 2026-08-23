import { useState } from "react";
import "./App.css";

const products = [
  {
    title: "Zirconia",
    description:
      "High-strength, natural-looking zirconia restorations crafted with digital precision.",
    image: "/images/zirconia.jpg",
  },
  {
    title: "Crowns & Bridges",
    description:
      "Precision-made crowns and bridges designed for durability, comfort and aesthetics.",
    image: "/images/crowns.jpg",
  },
  {
    title: "Implant Solutions",
    description:
      "Reliable implant-supported restorations designed for accurate fit and function.",
    image: "/images/implants.jpg",
  },
  {
    title: "Dentures",
    description:
      "Comfortable and aesthetic removable solutions created with careful craftsmanship.",
    image: "/images/dentures.jpg",
  },
  {
    title: "Veneers",
    description:
      "Premium aesthetic veneers designed to create natural-looking smiles.",
    image: "/images/veneers.jpg",
  },
  {
    title: "Orthodontic",
    description:
      "Custom dental appliances manufactured for effective orthodontic treatment.",
    image: "/images/orthodontic.jpg",
  },
];

const galleryImages = [
  "/images/work-1.jpg",
  "/images/work-2.jpg",
  "/images/work-3.jpg",
  "/images/work-4.jpg",
  "/images/work-5.jpg",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logoMark">B</div>

          <div className="logoText">
            <strong>BHARATH</strong>
            <span>DENTAL LAB</span>
          </div>
        </a>

        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#technology" onClick={closeMenu}>
            Technology
          </a>

          <a href="#work" onClick={closeMenu}>
            Our Work
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="navEnquire"
            onClick={closeMenu}
          >
            Enquire Now
          </a>

        </nav>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="heroImage">
          <img
            src="/images/hero-dental.jpg"
            alt="Bharath Dental Lab"
          />
        </div>

        <div className="heroOverlay"></div>

        <div className="heroContent">

          <div className="heroTag">
            PRECISION • TECHNOLOGY • TRUST
          </div>

          <h1>
            Smiles Built
            <br />
            <span>with Precision.</span>
          </h1>

          <p>
            Advanced dental laboratory solutions combining
            modern digital technology with skilled craftsmanship.
          </p>

          <div className="heroButtons">

            <a
              href="#products"
              className="primaryButton"
            >
              Explore Our Work
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="secondaryButton"
            >
              Get In Touch
            </a>

          </div>

        </div>


        {/* ================= STATS ================= */}

        <div className="stats">

          <div className="stat">
            <strong>25+</strong>
            <span>Years Experience</span>
          </div>

          <div className="stat">
            <strong>50K+</strong>
            <span>Cases Completed</span>
          </div>

          <div className="stat">
            <strong>100+</strong>
            <span>Dental Solutions</span>
          </div>

          <div className="stat">
            <strong>99%</strong>
            <span>Quality Focus</span>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section about" id="about">

        <div className="aboutImages">

          <img
            className="aboutMainImage"
            src="/images/lab-building.jpg"
            alt="Dental laboratory building"
          />

          <div className="smallImages">

            <img
              src="/images/technician.jpg"
              alt="Dental technician"
            />

            <img
              src="/images/lab-team.jpg"
              alt="Dental laboratory team"
            />

          </div>

        </div>


        <div className="aboutContent">

          <div className="sectionLabel">
            ABOUT US
          </div>

          <h2>
            Where Technology
            <br />
            Meets <span>Craftsmanship.</span>
          </h2>

          <p>
            Bharath Dental Lab is focused on delivering
            high-quality dental laboratory solutions with
            precision, consistency and attention to detail.
          </p>

          <p>
            From digital workflows to carefully finished
            restorations, our goal is to support dentists
            with dependable laboratory work that patients
            can trust.
          </p>

          <a href="#contact" className="textButton">
            Discover More
            <span>→</span>
          </a>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section
        className="section productsSection"
        id="products"
      >

        <div className="sectionHeading">

          <div>

            <div className="sectionLabel">
              OUR SOLUTIONS
            </div>

            <h2>
              Dental Solutions
              <br />
              <span>Made Better.</span>
            </h2>

          </div>

          <p>
            Precision-focused dental restorations created
            to meet modern clinical requirements.
          </p>

        </div>


        <div className="productGrid">

          {products.map((product, index) => (

            <article
              className="productCard"
              key={product.title}
            >

              <div className="productImage">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <div className="productNumber">
                  0{index + 1}
                </div>

              </div>

              <div className="productContent">

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.description}
                </p>

                <a href="#contact">
                  Learn More →
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= TECHNOLOGY ================= */}

      <section
        className="technology"
        id="technology"
      >

        <div className="technologyImage">

          <img
            src="/images/dental-machine.jpg"
            alt="Dental technology"
          />

        </div>

        <div className="technologyContent">

          <div className="sectionLabel">
            DIGITAL TECHNOLOGY
          </div>

          <h2>
            Precision Powered
            <br />
            by <span>Technology.</span>
          </h2>

          <p>
            Modern dental laboratories depend on accurate
            digital workflows. We combine technology with
            experienced technicians to achieve consistent
            results.
          </p>

          <div className="technologyList">

            <div className="technologyItem">
              <strong>01</strong>
              <span>CAD/CAM</span>
            </div>

            <div className="technologyItem">
              <strong>02</strong>
              <span>Digital Design</span>
            </div>

            <div className="technologyItem">
              <strong>03</strong>
              <span>Precision Milling</span>
            </div>

            <div className="technologyItem">
              <strong>04</strong>
              <span>Quality Control</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="section whyUs">

        <div className="sectionHeading centered">

          <div className="sectionLabel">
            WHY BHARATH
          </div>

          <h2>
            Built on <span>Trust.</span>
            <br />
            Driven by Precision.
          </h2>

        </div>


        <div className="reasonGrid">

          <div className="reason">
            <div className="reasonIcon">01</div>
            <h3>Precision</h3>
            <p>
              Attention to detail at every stage of production.
            </p>
          </div>

          <div className="reason">
            <div className="reasonIcon">02</div>
            <h3>Quality</h3>
            <p>
              Consistent laboratory work built around quality.
            </p>
          </div>

          <div className="reason">
            <div className="reasonIcon">03</div>
            <h3>Technology</h3>
            <p>
              Digital tools supporting modern dental workflows.
            </p>
          </div>

          <div className="reason">
            <div className="reasonIcon">04</div>
            <h3>Reliability</h3>
            <p>
              Dependable communication and laboratory support.
            </p>
          </div>

        </div>

      </section>


      {/* ================= OUR WORK ================= */}

      <section
        className="section gallerySection"
        id="work"
      >

        <div className="sectionHeading">

          <div>

            <div className="sectionLabel">
              OUR WORK
            </div>

            <h2>
              Precision You
              <br />
              <span>Can See.</span>
            </h2>

          </div>

        </div>


        <div className="gallery">

          {galleryImages.map((image, index) => (

            <div
              className="galleryItem"
              key={image}
            >

              <img
                src={image}
                alt={`Dental work ${index + 1}`}
              />

              <div className="galleryOverlay">
                View Work →
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contactWrapper"
        id="contact"
      >

        <div className="contactSection">

          <div className="contactIntro">

            <div className="sectionLabel">
              LET'S WORK TOGETHER
            </div>

            <h2>
              Let's Build
              <br />
              Better <span>Smiles.</span>
            </h2>

            <p>
              Have a case or want to know more about our
              laboratory solutions? Get in touch with our team.
            </p>

            <img
              src="/images/contact-dental.jpg"
              alt="Dental restoration"
            />

          </div>


          <form
            className="contactForm"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="formRow">

              <div className="formGroup">

                <label>Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                />

              </div>

              <div className="formGroup">

                <label>Phone</label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                />

              </div>

            </div>


            <div className="formGroup">

              <label>Email</label>

              <input
                type="email"
                placeholder="Your email"
              />

            </div>


            <div className="formGroup">

              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Tell us about your requirement"
              />

            </div>


            <button
              type="submit"
              className="submitButton"
            >
              Send Enquiry →
            </button>

          </form>


          <div className="contactInfo">

            <div>
              <span>CALL US</span>
              <strong>+91 XXXXX XXXXX</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>
                info@bharathdentallab.com
              </strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>
                Tamil Nadu, India
              </strong>
            </div>

            <div>
              <span>WORKING HOURS</span>
              <strong>
                Mon – Sat · 9AM – 6PM
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footerBrand">

          <div className="footerLogo">

            <div className="logoMark">
              B
            </div>

            <div className="logoText">
              <strong>BHARATH</strong>
              <span>DENTAL LAB</span>
            </div>

          </div>

          <p>
            Precision dental laboratory solutions
            built with technology and craftsmanship.
          </p>

        </div>


        <div className="footerColumn">

          <h4>Company</h4>

          <a href="#about">About</a>
          <a href="#technology">Technology</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="footerColumn">

          <h4>Solutions</h4>

          <a href="#products">Zirconia</a>
          <a href="#products">Crowns & Bridges</a>
          <a href="#products">Implants</a>
          <a href="#products">Dentures</a>

        </div>


        <div className="footerColumn">

          <h4>Connect</h4>

          <a href="#contact">Instagram</a>
          <a href="#contact">WhatsApp</a>
          <a href="#contact">Email Us</a>

        </div>


        <div className="footerBottom">

          <span>
            © 2026 Bharath Dental Lab. All rights reserved.
          </span>

          <span>
            Crafted with precision.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;