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
    icon: "🏢",
    title: "Corporate Website",
    description:
      "Professional corporate websites showcasing company profile, team, services, and achievements.",
    features: [
      "About Company",
      "Our Team",
      "Career Page",
      "Contact Forms"
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
    icon: "🏥",
    title: "Hospital Website",
    description:
      "Hospital and clinic websites with appointment booking and doctor profiles.",
    features: [
      "Doctor Listing",
      "Appointments",
      "Departments",
      "Emergency Contact"
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
    icon: "🏠",
    title: "Real Estate Website",
    description:
      "Property listing websites for builders, brokers, and real estate companies.",
    features: [
      "Property Search",
      "Image Gallery",
      "Location Maps",
      "Agent Contact"
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
  {
    icon: "💼",
    title: "Portfolio Website",
    description:
      "Professional portfolios for developers, designers, photographers, and freelancers.",
    features: [
      "Projects",
      "Skills",
      "Resume",
      "Contact"
    ]
  },
  {
    icon: "📱",
    title: "Landing Page",
    description:
      "High-converting landing pages for products, startups, and marketing campaigns.",
    features: [
      "Lead Generation",
      "Call-to-Action",
      "Animations",
      "Analytics"
    ]
  },
  {
    icon: "⚙️",
    title: "Custom Web Application",
    description:
      "Fully customized React & Node.js web applications based on your business needs.",
    features: [
      "Authentication",
      "Dashboard",
      "REST APIs",
      "Database Integration"
    ]
  }
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
      <div className="page-header">
    <button
        className="home-btn"
        onClick={() => navigate("/")}>
        🏠 Home
    </button>
    </div>

    </section>
  );
}