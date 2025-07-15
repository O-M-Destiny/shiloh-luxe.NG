import studio from "../assets/hero_img.jpg"
import "../index.css"

const About = () => {
  return (
    <>
        <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h3 className="section-title">About ShilohLuxe.NG</h3>
              <div className="about-story">
                <p className="about-paragraph">
                  Founded in 2024, ShilohLuxe.NG Microblading Studio has been
                  dedicated to enhancing natural beauty through the art of
                  microblading. Our mission is to help every client achieve their
                  perfect brow shape while maintaining the most natural look
                  possible.
                </p>
                <p className="about-paragraph">
                  We use only the highest quality pigments and tools, ensuring
                  safe, comfortable, and long-lasting results. Our studio
                  maintains the strictest hygiene standards and follows all health
                  department regulations.
                </p>
              </div>

              <div className="certifications">
                <h4 className="cert-title">Our Credentials</h4>
                <div className="cert-list">
                  <div className="cert-item">
                    <span className="cert-icon">🏆</span>
                    <span>Licensed Microblading Artist</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-icon">🔍</span>
                    <span>Attention to Detail in Every Session</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-icon">🕒</span>
                    <span>Passionate & Committed – Building Experience with Every Client</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-icon">🤝</span>
                    <span>Focused on Client Comfort & Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img
                src={studio}
                alt="Clean and professional microblading studio setup with equipment"
                className="about-image-actual"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About