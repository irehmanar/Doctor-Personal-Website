// <Link to={`/Histroy/details/${params.row.id}`}>View More</Link>import React from 'react'

import React, { useEffect, useState } from "react";
import './PatientData.css';
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchpatientData } from '../../../Services/PatientData'; 
import { Link } from 'react-router-dom';

function PatientData() {
  const [patientDataArray, setPatientDataArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchpatientData();
        setPatientDataArray(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }

  if (!patientDataArray.length) {
    return <div>No data available</div>;
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 100, headerClassName: 'bold-header' },
    { field: 'patientFullName', headerName: 'Full Name', width: 150, headerClassName: 'bold-header' },
    { field: 'patientCNIC', headerName: 'CNIC', width: 150, headerClassName: 'bold-header' },
    { field: 'patientEmail', headerName: 'patientEmail', width: 200, headerClassName: 'bold-header' },
    { field: 'patientAge', headerName: 'Age', width: 100, headerClassName: 'bold-header' },
    { field: 'appointmentdate', headerName: 'Last Appointment', width: 150, headerClassName: 'bold-header' },
    { field: 'planChosen', headerName: 'Planner', width: 130, headerClassName: 'bold-header' },
    {
      field: 'Details', headerName: 'View More', width: 130, renderCell: (params) => (
        <Link to={`/Info`}>View Detail</Link>
      ), headerClassName: 'bold-header'
    },
  ];

  return (
    <div className="containerPatientData">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="grid">
          <DataGrid 
            columns={columns} 
            rows={patientDataArray} 
            getRowId={(patientDataArray) => patientDataArray._id} 
            autoHeight
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </div>
    </div>
  );
}

export default PatientData;