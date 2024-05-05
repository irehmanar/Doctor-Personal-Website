import React from 'react'
import './PatientData.css'
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import GridData from '../../Components/adminDataGrid/GridData'
function PatientData() {
  return (
    <div className="container">

      <Sidebar />

<div className="homeContainer">
  <Navbar />
  <div className="grid">
  <GridData/>
    {/* <Widget type="patient"/>
    <Widget type="income"/>
    <Widget type="earning"/>
    <Widget type="balance"/> */}
  </div>

</div>
    </div>
  )
}

export default PatientData