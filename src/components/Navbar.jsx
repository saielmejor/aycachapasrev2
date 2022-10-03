import { useState, React } from "react";
import '../App.css'
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#aboutus">About Us</a>
        </li>
        <li className="p__opensans">
          <a href="#gallery">Gallery </a>
        </li>
        <li className="p__opensans">
          <a href="#location">Location</a>
        </li>
      </ul>
{/* this is for smaller screens  */}
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="#F8CF44"
          fontSize={30}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />{" "}
            <ul className="navbar-smallscreen-links">
              <li className="navbar-li">
                <a href="#home">Home</a>
              </li>
              <li className="navbar-li">
                <a href="#menu">Menu</a>
              </li>
              <li className="navbar-li">
                <a href="#about">About Us</a>
              </li>
              <li className="navbar-li">
                <a href="#gallery">Gallery </a>
              </li>
              <li className="navbar-li">
                <a href="#location">Location</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
