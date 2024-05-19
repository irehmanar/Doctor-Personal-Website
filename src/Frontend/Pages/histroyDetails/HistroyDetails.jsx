import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import "./HistroyDetails.css";
import ImageGrid from "../../Components/imageGrid/ImageGrid";
import PDFbutton from "../../Components/buttonPDF/PDFbutton";
import { fetchAppointmentData } from '../../../Services/GetAllAppointments';
import Navbar from "../../Components/Navbar/Navbar";
function HistroyDetails() {
  const [histroyData, setHistroyData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchAppointmentData();
        setHistroyData(data);
        console.log("data is: ", data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    loadData();
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
































  const Data = [
    {
      id: 1,
      date: "24-05-2024",
      planner: "Basic",
      duration: 2,
      pdfs: ["a.pdf", "b.pdf"],
    },
    {
      id: 2,
      date: "21-03-2024",
      planner: "Premium",
      duration: 1,
      pdfs: ["a.pdf", "b.pdf", "c.pdf"],
    },
    {
      id: 3,
      date: "03-03-2024",
      planner: "Basic",
      duration: 4,
      pdfs: ["a.pdf", "b.pdf"],
    },
    {
      id: 4,
      date: "20-01-2024",
      planner: "Premium",
      duration: 3,
      pdfs: ["a.pdf", "b.pdf"],
    },
  ];
  return (
    <>
    <Navbar/>
      {Data.map((item) => (
        <div className="detailContainer">
          <h1 className="display-4 text-4xl font-bold mb-4" style={{color:'black'}}>
            Appointment no {item.id}
          </h1>

          <div className="detailMiddle">
            <div className="middleLeft">
              <p className="display-4 text-2xl mb-4">
                <span className="text-3xl font-bold">Dated: </span>
                {item.date}
              </p>
            </div>
            <div className="middleRight">
              <p className="display-4 text-2xl mb-4">
                <span className="text-3xl font-bold">Planner: </span>
                {item.planner}
              </p>
            </div>
            <div className="middleRight">
              <p className="display-4 text-2xl mb-4">
                <span className="text-3xl font-bold">Duration: </span>
                {item.duration} months
              </p>
            </div>
          </div>

          <ImageGrid containerId={item.id}/>

          <div className="pdfButtons">
            {item.pdfs.map((pdflink) => (
              <PDFbutton pdfLink={pdflink} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default HistroyDetails;
