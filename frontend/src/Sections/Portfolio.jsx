import "../index.css"

import brows_img1 from "../assets/brows.jpg"
import brows_img3 from "../assets/brows3.jpg"
import brows_img5 from "../assets/micro-blading-img.jpg"
import clementina from "../assets/clementina.jpg"
import ombre from "../assets/ombre.jpg"
import brows_4 from "../assets/brows_4.jpg"

const Portfolio = () => {
  return (
    <>
        <section id="portfolio" className="portfolio">
        <div className="container">
          <h3 className="section-title">Our Work</h3>
          <p className="section-subtitle">
            See the transformations we've created for our satisfied clients
          </p>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={brows_img1}
                  alt="Natural microblading eyebrow technique close-up"
                  className="portfolio-image-actual"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-text">Natural Microblading</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={ombre}
                  alt="Combo brows microblading and shading technique"
                  className="portfolio-image-actual"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-text">Ombre Brows</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={brows_img3}
                  alt="Bold defined eyebrows microblading result"
                  className="portfolio-image-actual"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-text">Bold & Defined</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={brows_4}
                  alt="Soft subtle microblading for natural enhancement"
                  className="portfolio-image-actual"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-text">Combo Brows</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={brows_img5}
                  alt="Professional microblading retouch session"
                  className="portfolio-image-actual"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-text">Retouch Results</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={clementina}
                  alt="Complete eyebrow transformation with microblading"
                  className="portfolio-image-actual"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-text">Full Transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio