import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import Services from '../Sections/Services'
import About from '../Sections/About'
import Portfolio from '../Sections/Portfolio'
import Testimonials from '../Sections/Testimonials'
import Booking from '../Sections/Booking'
import FAQ from '../Sections/FAQ'
import Location from '../Sections/Location'
import CTA from '../Sections/CTA'
import Footer from '../Sections/Footer'




const Homepage = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Portfolio/>
      <Testimonials/>
      <Booking/>
      <FAQ/>
      <Location/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Homepage