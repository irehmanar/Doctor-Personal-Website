import React, { useEffect, useState } from "react";
import './Appointment.css';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import GridData from '../../Components/adminDataGrid/GridData';
import { fetchAppointmentData } from '../../../Services/ViewAllAppointments';

function Appointment() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleAccept = (id) => {
        // const newRows = rows.map(row => {
        //     if (row._id === id) {
        //         return { ...row, appointmentStatus: 'Accepted' };
        //     }
        //     return row;
        // });
        // setRows(newRows);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 100, headerClassName: 'bold-header' },
        { field: 'appointmentdate', headerName: 'Appointment', width: 150, headerClassName: 'bold-header' },
        { field: 'planChosen', headerName: 'Planner', width: 150, headerClassName: 'bold-header' },
        { field: 'month', headerName: 'Months', width: 150, headerClassName: 'bold-header' },
        { field: 'appointmentStatus', headerName: 'Status', width: 150, headerClassName: 'bold-header' },
        {
            field: 'accept',
            headerName: 'Accept',
            width: 150,
            renderCell: (params) => {
                return params.row.appointmentStatus === 'Pending' ? (
                    <button className='appointment-button' onClick={() => handleAccept(params.row._id)}>Accept</button>
                ) : (
                    <button className='appointment-button' disabled>Accepted</button>
                );
            },
            headerClassName: 'bold-header'
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAppointmentData();
                if (Array.isArray(data)) {
                    setRows(data);
                } else {
                    console.error("Expected data to be an array, but received:", data);
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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

    return (
        <div className="container m-auto">
            <h1 className="display-4 text-4xl font-bold mb-4">View Appointments</h1>
            <GridData columns={columns} rows={rows} getRowId={(row) => row._id} />
        </div>
    );
}

export default Appointment;
