import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <h4 className="logo-text">Shiloh Luxe</h4>
              <span className="logo-subtitle">Microblading Studio</span>
            </div>
            <p className="footer-description">
              Transforming brows, enhancing beauty, boosting confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h5 className="footer-heading">Quick Links</h5>
            <div className="footer-links">
              <a href="#about" className="footer-link">About Us</a>
              <a href="#portfolio" className="footer-link">Portfolio</a>
              <a href="#booking" className="footer-link">Book Now</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h5 className="footer-heading">Services</h5>
            <div className="footer-links">
              <span className="footer-link">Microblading</span>
              <span className="footer-link">Retouch Sessions</span>
              <span className="footer-link">Combo Brows</span>
              <span className="footer-link">Consultations</span>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="footer-section">
            <h5 className="footer-heading">Connect</h5>
            <div className="footer-links">
              <span className="footer-link">📧 ShilohLuxe@brows.com</span>
              <span className="footer-link">📞 +(234) 814-665-9618</span>
              <span className="footer-link">📍 62 Second East Circular, Benin City</span>
              <a
                className="footer-link social-link"
                href="https://wa.me/2348146659618"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="social-icon" /> WhatsApp
              </a>
              <a
                className="footer-link social-link"
                href="https://instagram.com/shilohluxe.ng1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; 2024 Shiloh Luxe Microblading Studio. All rights reserved.
          </p>
          <div className="footer-legal">
            <span className="footer-link">Privacy Policy</span>
            <span className="footer-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
