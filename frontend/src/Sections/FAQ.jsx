import React from 'react'
import "../index.css"

const FAQ = () => {
  return (
    <>
        <section id="faq" className="faq">
        <div className="container">
          <h3 className="section-title">Frequently Asked Questions</h3>
          <p className="section-subtitle">
            Everything you need to know about microblading and our services
          </p>

          <div className="faq-content">
            <div className="faq-item">
              <div className="faq-question">
                <h4>What is microblading?</h4>
              </div>
              <div className="faq-answer">
                <p>
                  Microblading is a semi-permanent cosmetic tattooing technique
                  that creates hair-like strokes to fill in and shape eyebrows.
                  Using a manual tool with fine needles, pigment is deposited into
                  the upper layers of skin to create natural-looking brow hairs.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>How long does microblading last?</h4>
              </div>
              <div className="faq-answer">
                <p>
                  Microblading typically lasts 12-18 months, depending on your
                  skin type, lifestyle, and aftercare. Oily skin types may fade
                  faster, while dry skin types tend to retain the pigment longer.
                  Annual touch-ups are recommended to maintain optimal results.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>Does microblading hurt?</h4>
              </div>
              <div className="faq-answer">
                <p>
                  Most clients experience minimal discomfort. We apply a topical
                  numbing cream before the procedure to ensure your comfort. The
                  sensation is often described as similar to threading or light
                  scratching.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>What's the healing process like?</h4>
              </div>
              <div className="faq-answer">
                <p>
                  The healing process takes about 4-6 weeks. Initially, brows will
                  appear darker and more defined. They'll lighten and soften
                  during healing. We provide detailed aftercare instructions to
                  ensure optimal healing and color retention.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>When will I need a touch-up?</h4>
              </div>
              <div className="faq-answer">
                <p>
                  A complimentary touch-up session is included 6-8 weeks after
                  your initial appointment. This allows us to perfect the shape
                  and add any additional strokes needed after the healing process
                  is complete.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>Who is not a candidate for microblading?</h4>
              </div>
              <div className="faq-answer">
                <p>
                  Microblading may not be suitable for pregnant/nursing women,
                  those on blood thinners, people with certain skin conditions, or
                  those undergoing chemotherapy. We'll discuss your medical
                  history during consultation to ensure safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ