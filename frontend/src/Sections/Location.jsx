import "../index.css"

const Location = () => {
  return (
    <>
        <section id="location" className="location">
        <div className="container">
          <h3 className="section-title">Visit Our Studio</h3>

          <div className="location-content">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.7673!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ShilohLuxe Microblading Studio Location"
              >
              </iframe>
            </div>

            <div className="address-info">
              <div className="address-card">
                <h4 className="address-title">Studio Address</h4>
                <address className="address-text">
                  62 second east circular<br />
                  along sakponba road<br />
                  Benin City, Edo State Nigeria
                </address>

                <div className="contact-info">
                  <p className="contact-item">
                    <strong>Phone:</strong> (+234) 814-665-9618
                  </p>
                  <p className="contact-item">
                    <strong>Email:</strong> shilohluxe@gmail.com
                  </p>
                  <p className="contact-item">
                    <strong>Hours:</strong> Appointment Only (Book Now)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Location