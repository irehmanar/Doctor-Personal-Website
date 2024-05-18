import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // // Assume userProfilePic is a URL to the user's profile picture
  // const userProfilePic = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="nav-li">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/Contactus">Contact Us</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/Plans">Plans</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/settings">Settings</NavLink>
        </li>
        {/* <li className="nav-li profile-pic">
          <Link to="/settings">
            <img src={userProfilePic} alt="Profile" />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
