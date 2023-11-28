import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { useState } from "react";
import image from "../assets/images/downArrow.png"


function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <>

    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/about">About</a></li>
        <li onClick={toggleDropdown} className="contact-btn">
        Contact<img className="image" height={25} src={image} alt="" />
        {showDropdown && (
          <ul className="dropdown-content">
              <li><a href="mailto:info@example.com">Email</a></li>
              <li><a href="tel:+1234567890">Phone</a></li>
              {/* Add more contact options as needed */}
            </ul>
          )}
        </li> 
      </ul>
      <Link to={"/"}>
          <button>Schedule Call</button>
      </Link>
    </nav>

    <div className="mobile-navbar">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {showMenu && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="mailto:info@example.com">Email</a></li>
            <li><a href="tel:+1234567890">Phone</a></li>

            {/* Add more contact options as needed */}
          </ul>
          <Link to={"/"}>
          <button>Schedule Call</button>
          </Link>
        </div>
      )}
    </div>
    

    </>
  );
}

export default Navbar;
