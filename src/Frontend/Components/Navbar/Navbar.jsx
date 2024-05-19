import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userRole = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const commonLinks = (
    <>
      <li className="nav-li">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Services">Services</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/ChatBot">ChatBot</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Contactus">Contact Us</NavLink>
      </li>
    </>
  );

  const patientLinks = (
    <>
      <li className="nav-li">
        <NavLink to="/Plans">Plans</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Booking">Book Now</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Histroy">History</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Blogs">Blogs</NavLink>
      </li>
      <li className="nav-li">
        <a onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  const doctorLinks = (
    <>
      <li className="nav-li">
        <NavLink to="/AddPrescription">Add Prescription</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Appointments">Pending Appointments</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/AddPlan">Add Plan</NavLink>
      </li>
      <li className="nav-li">
        <a onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li className="nav-li">
        <NavLink to="/Admin/Dashboard">Dashboard</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Admin/Patient">Patients</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Admin/Package">Packages</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/Admin/Patient/Data">Patient Data</NavLink>
      </li>
      <li className="nav-li">
        <a onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  return (
    <nav>
      <Link to="/" className="title">
        Your Diet Doctor
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {commonLinks}
        {userRole === 'Patient' && patientLinks}
        {userRole === 'Doctor' && doctorLinks}
        {userRole === 'Admin' && adminLinks}
        {!userRole && (
          <li className="nav-li">
            <NavLink to="/Login">Login</NavLink>
          </li>
        )}
      </ul>
      {userRole && (
        <Link to="/Settings" className="title">
          <img
            src="https://th.bing.com/th/id/R.ae68a6da3633369482b25a3ad0836885?rik=Briz%2fuyfS5axCQ&pid=ImgRaw&r=0"
            alt="Profile"
            style={{ height: '30px', width: '30px', borderRadius: '50%' }}
          />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
