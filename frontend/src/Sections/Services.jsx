import "../index.css"
import service_2 from "../assets/micro-blading-img.jpg"
import ombre_brows from "../assets/ombre.jpg"
import brows from "../assets/brows.jpg"

const Services = () => {
  return (
    <>
        <section className="services-preview">
        <div className="container">
          <h3 className="section-title">Our Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image-container">
                <img
                  src={brows}
                  alt="Microblading technique demonstration"
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h4 className="service-title">Microblading</h4>
                <p className="service-description">
                  Semi-permanent eyebrow tattooing technique for natural-looking
                  brows
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img
                  src={service_2}
                  alt="Professional retouch session"
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h4 className="service-title">Retouch</h4>
                <p className="service-description">
                  Refresh and maintain your existing microblading for lasting
                  results
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img
                  src={ombre_brows}
                  alt="Combo brows technique with microblading and shading"
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h4 className="service-title">Ombre Brows</h4>
                <p className="service-description">
                  Combination of microblading and shading for fuller, more defined
                  brows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services