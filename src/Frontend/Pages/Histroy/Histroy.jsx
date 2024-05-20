import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './Histroy.css'
import GridData from '../../Components/adminDataGrid/GridData'
import { Link } from 'react-router-dom';
import { fetchAppointmentData } from '../../../Services/GetAllAppointments';
import Navbar from "../../Components/Navbar/Navbar";
function Histroy() {
  const [histroyData, setHistroyData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchAppointmentData();
        console.log("data is: ",data);
        setHistroyData([data]);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    loadData();
    {setHistroyData( {
      id: 10,
      Appointment: "20-05-2024",
      planner: "Basic",
      month: 1,
      pdfs: ["a.pdf", "b.pdf"],
    })}
  }, []);

  if (!histroyData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }


  const columns = [
    { field: 'id',
     headerName: 'ID', 
     width: 100, 
     headerClassName: 'bold-header'
     },
    {
      field: 'Appointment',
      headerName: 'Appointment',
      // type: 'date',
      editable: false,
      width: 150,
      headerClassName: 'bold-header',
    },
    {
      field: 'planner',
      headerName: 'Planner',
      editable: false,
      width: 150,
      headerClassName: 'bold-header'
    },
    {
      field: 'month',
      headerName: 'No of Month',
      editable: false,
      width: 150,
      headerClassName: 'bold-header'
    },
    {
        field: 'Deatils',
        headerName: 'View More',
        width: 150,
        renderCell: (params) => (
          <Link to={`/Histroy/details`}>Read More</Link>
        // <Link to={`/Histroy/details/${params.row.id}`}>View More</Link>
        ),
        headerClassName: 'bold-header'
      },
  ];
  
  const rows = [
    {
      id: 10,
      Appointment: "21-05-2024",
      planner: "Basic",
      month: 1,
      pdfs: ["a.pdf", "b.pdf"],
    },
    // {
    //   id: 11,
    //   Appointment: "21-05-2024",
    //   planner: "Premium",
    //   month: 3,
    //   pdfs: ["a.pdf", "b.pdf", "c.pdf"],
    // },
    // {      id: 12,
    //   Appointment: "21-05-2024",
    //   planner: "Premium",
    //   month: 1,
    //   pdfs: ["c.pdf"]},
  ];
  return (
    <>
    <Navbar/>
    <div className="container m-auto">
          <div class="section-title" style={{ marginTop: "2rem" }}>
          <p>Check Your Recent Bookings</p>
          <h2>Hisroy</h2>
        </div>



  <GridData columns={columns} rows={rows} />
</div>
    </>
  )
}

export default Histroy