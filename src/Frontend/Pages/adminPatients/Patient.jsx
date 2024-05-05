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
import "./Patient.css";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import Widget from "../../Components/adminWidget/Widget";
import PieChart from "../../Components/adminPieChart/PieChart";
function Patient() {
    const data1 = [
        { id: 0, value: 19, label: 'Male', color: '#141E61' },
        { id: 1, value: 31, label: 'Female', color: '#E63E6D' },
      ];
    const data2 = [
        { id: 0, value: 25, label: '<20', color: '#640D6B' },
        { id: 1, value: 10, label: '20-40', color: '#C40C0C' },
        { id: 2, value: 5, label: '40>', color: '#1A4D2E' },
      ];
    const data3 = [
        { id: 0, value: 16, label: 'Local', color: '#EA9C1B' },
        { id: 1, value: 4, label: 'Foreign', color: '#045757' },
      ];
  return (
    <div className="patient">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="newpatient" />
          <Widget type="totalpatient" />
          <Widget type="malepatient" />
          <Widget type="femalepatient" />
        </div>

        <div className="charts">
          <PieChart data={data3} title="Patient by Gender" />
          <PieChart data={data1} title="Patient by Gender" />
          <div className="chartOuter">
          <PieChart data={data2} title="Patient by Age"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Patient;
