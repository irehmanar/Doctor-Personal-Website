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


import React, { useEffect, useState } from "react";
import "./Patient.css";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import Widget from "../../Components/adminWidget/Widget";
import PieChart from "../../Components/adminPieChart/PieChart";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchpatientPageData } from '../../../Services/PatientPage'; 
function Patient() {
  const [PatientData, setPatientData] = useState({});
  // const [noOfCustomer, setNoOfCustomer] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchpatientPageData();
        setPatientData(data);
        
        // if (data && data.allAppointmentsByMonth) {
        //   const customerNumber = data.allAppointmentsByMonth.map(item => item.totalAppointmentCount);
        //   // Ensure the customerNumber array has exactly 12 elements
        //   const filledCustomerNumber = Array(12).fill(0).map((_, index) => customerNumber[index] || 0);
        //   setNoOfCustomer(filledCustomerNumber);
        // }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    loadData();
  }, []);
  
  console.log("data is: ", PatientData);

  if (!PatientData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }






















    const data1 = [
        { id: 0, value: PatientData.malePatients, label: 'Male', color: '#141E61' },
        { id: 1, value: PatientData.femalePatients, label: 'Female', color: '#E63E6D' },
      ];
    const data2 = [
        { id: 0, value: PatientData.patientsAgelt20, label: '<20', color: '#640D6B' },
        { id: 1, value: PatientData.patientsAgegt20, label: '20-40', color: '#C40C0C' },
        { id: 2, value: PatientData.patientsAgegt40, label: '40>', color: '#1A4D2E' },
      ];
    const data3 = [
        { id: 0, value: PatientData.localPatients, label: 'Local', color: '#EA9C1B' },
        { id: 1, value: PatientData.foreignPatients, label: 'Foreign', color: '#045757' },
      ];
  return (
    <div className="patient">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="newpatient" value={PatientData.newPatientsToday}/>
          <Widget type="totalpatient" value={PatientData.patientsTodayCount}/>
          <Widget type="malepatient" value={PatientData.malePatientTodayCount}/>
          <Widget type="femalepatient" value={PatientData.femalePatientTodayCount}/>
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
