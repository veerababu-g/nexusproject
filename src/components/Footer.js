import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h2  onClick={() => navigate("/")}>NexusWeb</h2>
          <p>
            Building modern websites, web applications and digital solutions
            that help businesses grow online.
          </p>
        </div>

        <div>
          <h3 onClick={() => navigate("/services")}>Services</h3>

          <ul>
            <li  onClick={() => navigate("/contact")}>Website Development</li>
            
            
            <li  onClick={() => navigate("/contact")}>Sales website</li>
           
            <li  onClick={() => navigate("/contact")}>SEO Optimization</li>
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li  onClick={() => navigate("/services")}>Services</li>
            
            <li  onClick={() => navigate("/contact")}>About</li>
            <li  onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📧 nexusitweb@gmail.com</p>

          <p>📞 +91 6302533612</p>

          <p>Andhra Pradesh, India</p>
        </div>

      </div>

      <div className="copyright">
        © {new Date().getFullYear()} NexusWeb. All Rights Reserved.
      </div>
    </footer>
  );
}
