import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import InsertChartIcon from '@mui/icons-material/InsertChart';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link } from "react-router-dom";
function Sidebar() {
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
          {/* <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon'/>
            <span>Notifications</span>
          </li> */}
          <p className="title">SERVICE</p>
          {/* <li>
            <CardTravelIcon className='icon'/>
            <span>System Health</span>
          </li> */}
          {/* <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar