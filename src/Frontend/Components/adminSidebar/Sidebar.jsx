import React from "react";
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div className='sideBar'>
      <div className="top">
      <Link to="/Admin/Dashboard" style={{ textDecoration: "none" }}>
        <span className="logo">Admin Control</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>

          <p className="title">MAIN</p>

          <Link to="/Admin/Dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">ANALYSIS BY</p>

          <Link to="/Admin/Patient" style={{ textDecoration: "none" }}>
            <li>
              <PermIdentityIcon className="icon" />
              <span>Patients</span>
            </li>
          </Link>

          <Link to="/Admin/Package" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2Icon className="icon" />
              <span>Package</span>
            </li>
          </Link>

          <Link to="/Admin/Patient/Data" style={{ textDecoration: "none" }}>
          <li>
            <CardTravelIcon className='icon'/>
            <span>Patients Data</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <LogoutIcon className='icon'/>
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar