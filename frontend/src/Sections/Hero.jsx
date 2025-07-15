import "../index.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-front">
        <h2 className="hero-title">Elevate Your Brows with ShilohLuxe</h2>
        <p className="hero-text">
          Experience professional microblading tailored to enhance your natural beauty.
          At Shiloh Luxe, we craft perfect brows that boost your confidence and define your elegance.
        </p>

        <a href="#booking" className="btn btn-primary">Book Appointment</a>
      </div>
    </section>
  );
};

export default Hero;
