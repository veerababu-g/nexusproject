import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ServicesHome from "../pages/ServicesHome";

export default function Home() {
  return (
    <div>
      <Navbar />
      

      <div className="container hero">
        <h1>We connect your business to the web.</h1>
        <p>Websites, secure logins, and admin dashboards — designed, built and hosted for businesses in Hyderabad.</p>
        <Link to="/contact" className="btn">Get a quote</Link>
      </div>

      <div className="container section" id="services">
        <h2> Pricing</h2>
        <div className="grid3">
          <div className="card">
            <h3>Basic</h3>
            <p>A simple, fast-loading website with a contact form. Good for a first online presence.</p>
            <span className="price">₹15,000 – 25,000</span>
          </div>
          <div className="card">
            <h3>Standard</h3>
            <p>Secure login system, database, and an admin dashboard to manage your customers.</p>
            <span className="price">₹40,000 – 70,000</span>
          </div>
          <div className="card">
            <h3>Premium</h3>
            <p>A fully custom build with advanced features, tailored to how your business runs.</p>
            <span className="price">₹80,000+</span>
          </div>
        </div>
      </div>
      <ServicesHome/>
      <Testimonials/>
      <Footer/>

       
    </div>
  );
}
