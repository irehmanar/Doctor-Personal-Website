import React from 'react'
import './Histroy.css'
import GridData from '../../Components/adminDataGrid/GridData'
import { Link } from 'react-router-dom';
function Histroy() {
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
    { id: 1,Appointment: '24-10-2024',planner: 'Premium', month:2,imgae: ['img1','img2','img3'], pdf:['pdf1','pdf2']},
    { id: 1,Appointment: '24-10-2024',planner: 'Premium', month:2,imgae: ['img1','img2','img3'], pdf:['pdf1','pdf2']},
    { id: 1,Appointment: '24-10-2024',planner: 'Premium', month:2,imgae: ['img1','img2','img3'], pdf:['pdf1','pdf2']},
    { id: 1,Appointment: '24-10-2024',planner: 'Premium', month:2,imgae: ['img1','img2','img3'], pdf:['pdf1','pdf2']},
    { id: 1,Appointment: '24-10-2024',planner: 'Premium', month:2,imgae: ['img1','img2','img3'], pdf:['pdf1','pdf2']},
  ];
  return (
    
    <div className="container m-auto">
       <h1 class="display-4 text-4xl font-bold mb-4">View History</h1>


  <GridData columns={columns} rows={rows}/>
</div>
   
  )
}

export default Histroy