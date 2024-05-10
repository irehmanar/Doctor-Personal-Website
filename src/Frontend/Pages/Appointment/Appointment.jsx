import React, { useState } from 'react';
import './Appointment.css';
import GridData from '../../Components/adminDataGrid/GridData';

function Appointment() {
    // Using useState to manage the rows dynamically to allow for state changes in the grid
    const [rows, setRows] = useState([
        { id: 1, appointment: '24-10-2024', planner: 'Premium', month: 2, status: 'Pending' },
        { id: 2, appointment: '24-10-2024', planner: 'Premium', month: 4, status: 'Pending' },
        { id: 3, appointment: '24-10-2024', planner: 'Premium', month: 6, status: 'Pending' },
        { id: 4, appointment: '24-10-2024', planner: 'Premium', month: 5, status: 'Pending' },
    ]);

    const handleAccept = (id) => {
        const newRows = rows.map(row => {
            if (row.id === id) {
                return { ...row, status: 'Accepted' };
            }
            return row;
        });
        setRows(newRows);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, headerClassName: 'bold-header' },
        { field: 'appointment', headerName: 'Appointment', width: 150, headerClassName: 'bold-header' },
        { field: 'planner', headerName: 'Planner', width: 150, headerClassName: 'bold-header' },
        { field: 'month', headerName: 'Months', width: 150, headerClassName: 'bold-header' },
        { field: 'status', headerName: 'Status', width: 150, headerClassName: 'bold-header' },
        {
            field: 'accept',
            headerName: 'Accept',
            width: 150,
            renderCell: (params) => {
                return params.row.status === 'Pending' ? (
                    <button className='AppointmentButton' onClick={() => handleAccept(params.row.id)}>Accept</button>
                ) : (
                    <button className='AppointmentButton' disabled>Accepted</button>
                );
            },
            headerClassName: 'bold-header'
        },
    ];

    return (
        <div className="container m-auto">
            <h1 className="display-4 text-4xl font-bold mb-4">View Appointments</h1>
            <GridData columns={columns} rows={rows} />
        </div>
    );
}

export default Appointment;
