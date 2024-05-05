import React from "react";
import "./Home.css";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import Widget from '../../Components/adminWidget/Widget';
import Featured from '../../Components/adminFeatured/Featured'
import Chart from '../../Components/adminChart/Chart';
// import Table from '../../Components/adminTable/Table'

function Home() {
  return (
    <div className="home">

      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="patient"/>
          <Widget type="income"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <div className="chartOuter">
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> <Chart/>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
