import React from 'react'
import "../index.css"

import client_img1 from "../assets/client-image-marvelous.jpg"
import client_img2 from "../assets/client-img-divine.jpg"
import client_img3 from "../assets/clementina.jpg"

const Testimonials = () => {
  return (
    <>
        <section className="testimonials">
        <div className="container">
          <h3 className="section-title">What Our Clients Say</h3>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={client_img1}
                  alt="Elizabeth. profile photo"
                  className="testimonial-avatar"
                />
                <div className="stars">★★★★★</div>
              </div>
              <p className="testimonial-text">
                "Amazing experience! My brows look so natural and perfectly
                shaped. I wake up every morning feeling confident and beautiful."
              </p>
              <div className="testimonial-author">
                <strong>Elizabeth Aghedo</strong>
                <span>Verified Client</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={client_img2}
                  alt="Ofuedo Divine Favour photo"
                  className="testimonial-avatar"
                />
                <div className="stars">★★★★★</div>
              </div>
              <p className="testimonial-text">
                "Professional, clean, and incredibly talented. The results
                exceeded my expectations. I've recommended ShilohLuxe to all my
                friends!"
              </p>
              <div className="testimonial-author">
                <strong>Ofuedo Divine Favour</strong>
                <span>Verified Client</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={client_img3}
                  alt="Clementina Ighalo"
                  className="testimonial-avatar"
                />
                <div className="stars">★★★★★</div>
              </div>
              <p className="testimonial-text">
                "The consultation was thorough and I felt completely comfortable
                throughout the process. My brows are exactly what I wanted!"
              </p>
              <div className="testimonial-author">
                <strong>Clementina Ighalo.</strong>
                <span>Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials