import React from 'react'
import './PatientData.css'
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import GridData from '../../Components/adminDataGrid/GridData'
import { Link } from 'react-router-dom';
function PatientData() {
  const columns = [
    { field: 'id',
     headerName: 'ID', 
     width: 100, 
     headerClassName: 'bold-header'
     },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      editable: false,
      headerClassName: 'bold-header'
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 130,
      editable: false,
      headerClassName: 'bold-header'
    },
    { field: 'age',
    headerName: 'Age', 
    width: 100, 
    headerClassName: 'bold-header'
    },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
      headerClassName: 'bold-header'
    },
    {
      field: 'latestAppointment',
      headerName: 'Last Appointment',
      // type: 'date',
      editable: false,
      width: 130,
      headerClassName: 'bold-header',
    },
    {
      field: 'planner',
      headerName: 'Planner',
      editable: false,
      width: 130,
      headerClassName: 'bold-header'
    },    
    {
      field: 'Deatils',
      headerName: 'View More',
      width: 130,
      renderCell: (params) => (
        <Link to={`/Info`}>View Detail</Link>
      // <Link to={`/Histroy/details/${params.row.id}`}>View More</Link>
      ),
      headerClassName: 'bold-header'
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, latestAppointment: '24-10-2024',planner: 'Premium' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, latestAppointment: '24-10-2024',planner: 'Economic'  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, latestAppointment: '24-10-2024',planner: 'Premium'  },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, latestAppointment: '24-10-2024',planner: 'Premium'  },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 14, latestAppointment: '24-10-2024',planner: 'Economic'  },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, latestAppointment: '24-10-2024',planner: 'Premium'  },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, latestAppointment: '24-10-2024',planner: 'Economic'  },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, latestAppointment: '24-10-2024',planner: 'Premium'  },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, latestAppointment: '24-10-2024',planner: 'Premium'  },
  ];
  return (
    <div className="containerPatientData">

      <Sidebar />

<div className="homeContainer">
  <Navbar />
  <div className="grid">
  <GridData columns={columns} rows={rows}/>
  </div>

</div>
    </div>
  )
}

export default PatientData