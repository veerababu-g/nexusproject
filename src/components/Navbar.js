import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <img className='logo' src='nexus.svg' alt='Nexus Web logo featuring geometric design in a navigation header'/>
        <Link to="/" className="brand">Nexus<span>ItWeb</span></Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
