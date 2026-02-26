import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu,setMobileMenu]= useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={logo} alt="" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to="Hero" smooth offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="Programs" smooth offset={-260} duration={500}>
            Programs
          </Link>
        </li>

        <li>
          <Link to="About" smooth offset={-150} duration={500}>
            About Us
          </Link>
        </li>

        <li>
          <Link to="Campus" smooth offset={-260} duration={500}>
            Campus
          </Link>
        </li>

        <li>
          <Link to="testimonials" smooth offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>

        <li>
          <Link
            className="btn"
            to="Contact"
            smooth
            offset={-200}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" alt="" onClick={toggleMenu} />

    </nav>
  );
};

export default Navbar;
