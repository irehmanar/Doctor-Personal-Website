import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import "./Package.css";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import Widget from "../../Components/adminWidget/Widget";
import Line from "../../Components/adminLine/Line";
import Bar from "../../Components/adminBarChart/valueFormatter";
import { fetchpackagePageData } from '../../../Services/PackagePage';

function Package() {  
  const [PackageData, setPackageData] = useState(null);
  const [noOfCustomer, setNoOfCustomer] = useState([]);
  const [noOfPlan, setNoOfPlan] = useState([]);
  const monthAbbreviations = {
    "January": "Jan",
    "February": "Feb",
    "March": "Mar",
    "April": "Apr",
    "May": "May",
    "June": "June",
    "July": "July",
    "August": "Aug",
    "September": "Sept",
    "October": "Oct",
    "November": "Nov",
    "December": "Dec"
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchpackagePageData();
        setPackageData(data);
        console.log("data is: ", data);
        
        const customerNumber = data.allAppointmentsByMonth.map(item => item.totalAppointmentCount);
        // Ensure the customerNumber array has exactly 12 elements
        const filledCustomerNumber = Array(12).fill(0).map((_, index) => customerNumber[index] || 0);
        setNoOfCustomer(filledCustomerNumber);
        console.log(filledCustomerNumber);
        
        const dataset = data.basicPlanByMonth.map((basicData, index) => {
          const premiumData = data.premiumPlanByMonth[index];
          return {
            BASIC: basicData.basicPlanCount,
            PREMIUM: premiumData.premiumPlanCount,
            month: monthAbbreviations[basicData.month]
          };
        });
        
        console.log(dataset);
        setNoOfPlan(dataset);

      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    loadData();
  }, []);

  if (!PackageData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }

  return (
    <div className="patient">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="toppackage" value={PackageData.mostFrequentPlan.plan} />
          <Widget type="totalappointment" value={PackageData.totalAppointments} />
        </div>
        <div className="charts">
          <Bar dataset={noOfPlan} />
          <div className="chartOuter">
            <Line dataCustomer={noOfCustomer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
