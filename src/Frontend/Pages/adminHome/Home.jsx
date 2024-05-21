import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import "./Home.css";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import Navbar from "../../Components/adminNavbar/Navbar";
import Widget from '../../Components/adminWidget/Widget';
import Featured from '../../Components/adminFeatured/Featured';
import Chart from '../../Components/adminChart/Chart';
import { fetchDashboardData } from '../../../Services/Api'; 

function Home() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchDashboardData();
        if (data && typeof data === 'object' && data.monthlyAverage !== undefined) {
          data.monthlyAverage = parseFloat(data.monthlyAverage.toFixed(2));
        }
        setDashboardData(data);
        console.log("data is : ", data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    loadData();
  }, []);

  if (!dashboardData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }

  // Now safe to render assuming data is properly loaded and structured
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="patient" value={dashboardData.monthlyAverage}/>
          <Widget type="income" value={dashboardData.dailyIncome}/>
          <Widget type="earning" value={dashboardData.monthlyIncomeValue}/>
          <Widget type="balance" value={dashboardData.totalIncomeValue}/>
        </div>
        <div className="charts">
          <Featured income={dashboardData.dailyIncome}/>
          <div className="chartOuter">
            <Chart title="Last 12 Months (Revenue)" aspect={2 / 1} data={dashboardData.incomeByMonth}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


