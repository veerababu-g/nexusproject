import "./Testimonials.css";

const testimonials = [
  {
    name: "Ramesh Kumar",
    company: "RK Enterprises",
    feedback:
      "NexusWeb developed our business website professionally. The design is fast, responsive, and helped us attract more customers.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Startup Founder",
    feedback:
      "Excellent communication and timely delivery. Highly recommended for modern web development.",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    company: "Digital Marketing",
    feedback:
      "Their SEO optimization and responsive design significantly improved our online presence.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>

              <p>"{item.feedback}"</p>

              <h4>{item.name}</h4>

              <span>{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}