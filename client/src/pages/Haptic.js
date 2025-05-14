import React, { useState, useRef } from 'react';
import '../assets/Haptic.css';
import left from '../assets/images/left.png'
import right from '../assets/images/right.png'
import p12 from '../assets/images/p12.avif'
import p13 from '../assets/images/p13.avif'
import p14 from '../assets/images/p14.avif'
import p26 from '../assets/images/p26.avif'



const Haptic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const carouselRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <section id="home">
        <div className="container">
          <div
            className="menu"
            id="menu"
            style={{ display: isMenuOpen ? 'flex' : 'none' }}
          >
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#careers">Careers</a>
          </div>

          <button className="toggle-btn" onClick={toggleMenu}>
            <div className={`menu-icon ${isMenuOpen ? 'close' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </button>

          <h2 className="heading">Haptic</h2>

          <div className="home-content">
            <p className="homepage-text">
              We help ambitious teams turn bold visions into lasting impact.
            </p>

            <div className="hiring-badge">
              <div className="badge-graphic">
                <img src={p26} alt="badge-graphic" />
              </div>
              <div className="badge-content">
                <h3 className="job-title">Senior Designer</h3>
                <p className="hiring-status">Hiring</p>
              </div>
              <img src={right} alt="rirht" style={{ height: '25px', width: '25px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel">
        <div className="nav-buttons">
          <img src={left} alt="left" onClick={scrollPrev} />
          <img src={right} alt="right" onClick={scrollNext} />
        </div>
        <ul className="carousel-list" ref={carouselRef}>
          <li className="company-card">
            <a href="https://haptic.studio">
              <img src={p12} alt="Harvard company" className="company-media" />
              <div className="company-card-heading">
                <img src={p12} alt="logo" />
                <div className="company-info">
                  <h3 className="company-title">Harvard</h3>
                  <p className="company-subtitle">Empowering youth with neuroscience</p>
                </div>
              </div>
            </a>
          </li>
          <li className="company-card">
            <a href="https://haptic.studio">
              <img src={p13} alt="Neon Horizons company" className="company-media" />
              <div className="company-card-heading">
                <img src={p13} alt="logo" />
                <div className="company-info">
                  <h3 className="company-title">Neon Horizons</h3>
                  <p className="company-subtitle">Welcome to the cyberscape</p>
                </div>
              </div>
            </a>
          </li>
          <li className="company-card">
            <a href="https://haptic.studio">
              <img src={p14} alt="Spark company" className="company-media" />
              <div className="company-card-heading">
                <img src={p14} alt="logo" />
                <div className="company-info">
                  <h3 className="company-title">Spark</h3>
                  <p className="company-subtitle">Sustainable home improvement</p>
                </div>
              </div>
            </a>
          </li>
          <li className="company-card">
            <a href="https://haptic.studio">
              <img src={p12} alt="Harvard company" className="company-media" />
              <div className="company-card-heading">
                <img src={p12} alt="logo" />
                <div className="company-info">
                  <h3 className="company-title">Harvard</h3>
                  <p className="company-subtitle">Empowering youth with neuroscience</p>
                </div>
              </div>
            </a>
          </li>
          <li className="company-card">
            <a href="https://haptic.studio">
              <img src={p13} alt="Neon Horizons company" className="company-media" />
              <div className="company-card-heading">
                <img src={p13} alt="logo" />
                <div className="company-info">
                  <h3 className="company-title">Neon Horizons</h3>
                  <p className="company-subtitle">Welcome to the cyberscape</p>
                </div>
              </div>
            </a>
          </li>
          <li className="company-card">
            <a href="https://haptic.studio">
              <img src={p14} alt="Spark company" className="company-media" />
              <div className="company-card-heading">
                <img src={p14} alt="logo" />
                <div className="company-info">
                  <h3 className="company-title">Spark</h3>
                  <p className="company-subtitle">Sustainable home improvement</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Why Haptic?</h2>
        <h1>Startups come to us when they need a team that can deliver real results.</h1>

        <div className="testimonial">
          <video
            src="https://framerusercontent.com/assets/bout3KxbMaPTRUvJGVwRzI0WM.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="person">
            <img
              src="https://framerusercontent.com/images/yOoOgDhD8QJcqo1FB92IJIaBRGU.jpg"
              alt="Danny Quick"
            />
            <p className="name">Danny Quick</p>
            <p className="title">Founder, Powerups</p>
          </div>
        </div>

        <div className="testimonial">
          <video
            src="https://framerusercontent.com/assets/XMwwb4nP2hKlj2AMlyQ79Ou8g8.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="person">
            <img
              src="https://framerusercontent.com/images/brJEZ6nL04XW4TIjcASw66NyTWc.jpg"
              alt="Adam McIntee"
            />
            <p className="name">Adam McIntee</p>
            <p className="title">Co-Founder, Apollo</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work">
        <h2 className="section-title">Partners + Projects</h2>

        {[
          { title: 'Momentify', tags: 'Brand, Web, Product', year: '2024' },
          { title: 'Norby', tags: 'Motion', year: '2025' },
          { title: 'Spark', tags: 'Brand, Web, Product', year: '2024' },
          { title: 'Google', tags: 'Web, Product', year: '2025' },
        ].map((project, index) => (
          <div key={index} className="project">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-meta">
              <span className="project-tags">{project.tags}</span>
              <span className="project-year">{project.year}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        {[
          {
            theme: 'yellow',
            title: 'Tactile',
            price: '£7,500',
            description: 'Great for teams who work in weekly sprints and need design/strategy support.',
            features: [
              'Dedicated Senior Designer',
              'Weekly Sprint Call',
              'Async Loom updates',
              'Unlimited slack comms',
            ],
          },
          {
            theme: 'blue',
            title: 'Immersive',
            price: '£15,500',
            description: 'For teams needing brand, marketing, and website support.',
            features: [
              'Access to our full team',
              'Daily Standups',
              'Async Loom updates',
              'Pause or cancel anytime',
            ],
          },
          {
            theme: 'orange',
            title: 'Sprint',
            price: '£10,000',
            description: '2-week delivery for product features or landing pages.',
            features: [
              'Specially curated team',
              'Weekly Sprint Call',
              'Async Loom updates',
              'Scalable with your needs',
            ],
          },
        ].map((plan, index) => (
          <div key={index} className="pricing-card" data-theme={plan.theme}>
            <div className="card-header">
              <div className="icon-badge" style={{ backgroundColor: `var(--accent-${plan.theme})` }}></div>
              <h3>{plan.theme === 'orange' ? 'Fast Turnaround' : 'Subscription'}</h3>
            </div>
            <h2 className="plan-title">{plan.title}</h2>
            <p className="description">{plan.description}</p>
            <div className="price">
              {plan.price}<span>/Month</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a
              href="https://calendly.com/d/5c2-3g6-964/haptic"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </div>
        ))}
      </section>

      {/* Careers Section */}
      <section id="careers">
        <h2>Careers</h2>
        <p>Join our amazing team!</p>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="content">
          <div className="logo-container">
            <svg viewBox="0 0 120 95" className="logo">
              <path fill="currentColor" d="M..."></path>
            </svg>
          </div>

          <div className="column">
            <h4 className="section-title">Learn More</h4>
            <nav className="nav-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#careers" className="nav-link">Careers</a>
            </nav>
          </div>

          <div className="column">
            <h4 className="section-title">Follow Us</h4>
            <nav className="nav-links">
              <a
                href="https://www.linkedin.com/company/hapticstudio"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/byhaptic/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://x.com/madebyhaptic"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </nav>
          </div>
        </div>

        <div className="copyright">
          <p>Haptic © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Haptic;