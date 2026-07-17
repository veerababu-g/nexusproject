import "./Services.css";

import { useNavigate } from "react-router-dom";
const services = [
  {
    icon: "🌐",
    title: "Business Website",
    description:
      "Professional company websites for startups, agencies, schools, hospitals, and enterprises.",
    features: [
      "Responsive Design",
      "Modern UI",
      "SEO Friendly",
      "Fast Loading"
    ]
  },
  {
    icon: "🛒",
    title: "E-Commerce Website",
    description:
      "Complete online shopping websites with secure payment gateways and product management.",
    features: [
      "Shopping Cart",
      "Payment Gateway",
      "Admin Dashboard",
      "Order Tracking"
    ]
  },
  {
    icon: "📋",
    title: "Service Website",
    description:
      "Websites for service providers such as electricians, plumbers, lawyers, consultants, and healthcare.",
    features: [
      "Booking Forms",
      "Service Listing",
      "Customer Reviews",
      "Google Maps"
    ]
  },

  {
    icon: "🎓",
    title: "Education Website",
    description:
      "College, school, coaching institute, and online learning platform websites.",
    features: [
      "Courses",
      "Student Login",
      "Admissions",
      "Online Classes"
    ]
  },
 
  {
    icon: "🍽️",
    title: "Restaurant Website",
    description:
      "Restaurant websites with menu, online reservations, and food ordering.",
    features: [
      "Digital Menu",
      "Online Orders",
      "Table Booking",
      "Gallery"
    ]
  },
  
  {
    icon: "📰",
    title: "News & Blog Website",
    description:
      "News portals and blogging websites with categories and comments.",
    features: [
      "Categories",
      "Comments",
      "Search",
      "Latest News"
    ]
  },
 
 
  
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="services-page">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We design and develop modern, responsive, secure and scalable
          websites for businesses of every size.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <ul>
              {service.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <button onClick={() => {
                    navigate("/contact");
                    window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    });
                }}>Get Started</button>

                        </div>
                        ))}
                    </div>
                    

    </section>
    
  );
}