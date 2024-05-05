// import React from 'react'
// import './Patient.css';
// import Sidebar from "../../Components/adminSidebar/Sidebar";
// import Navbar from "../../Components/adminNavbar/Navbar";
// function Patient() {
//   return (
//     <div className="patient">

//       <Sidebar />

// <div className="homeContainer">
//   <Navbar />
//   <div className="widgets">
//     {/* <Widget type="patient"/>
//     <Widget type="income"/>
//     <Widget type="earning"/>
//     <Widget type="balance"/> */}
//     abhhja
//   </div>
//   <div className="charts">
//     {/* <Featured/> */}
//     <div className="chartOuter">
//       {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> <Chart/> */}
//     </div>
//   </div>

// </div>

//     </div>
//   )
// }

// export default Patient

import React from "react";
import "./Package.css";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import Widget from "../../Components/adminWidget/Widget";
import Line from "../../Components/adminLine/Line";
import Bar from "../../Components/adminBarChart/valueFormatter"
function Package() {  
  return (
    <div className="patient">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="toppackage" />
          <Widget type="totalappointment" />
        </div>

        <div className="charts">
          <Bar/>
          <div className="chartOuter">
          <Line></Line>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Package;
