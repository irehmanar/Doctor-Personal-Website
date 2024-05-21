import React, { useState, useEffect, useRef } from "react";
import { addPrescription } from '../../../Services/AddPrescription';
import Navbar from "../../Components/Navbar/Navbar";
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { addImage } from '../../../aws/addimage.js';

function AddPrescription() {
  const [message, setMessage] = useState(""); // Declare message and setMessage
  const [displayAlert, setDisplayAlert] = useState(false); // Declare message and setMessage
  const [files, setFiles] = useState(0);
  const [patientCNIC, setPatientCNIC] = useState("");
  const [fileInputs, setFileInputs] = useState([]);
  const [imageUrls, setImageUrls] = useState({}); // Store image URLs
  const selectedFiles = useRef({});

  const handleFilesChange = (e) => {
    const value = parseInt(e.target.value);
    setFiles(value);
    setFileInputs(new Array(value).fill(null));
  };

  const handleFileChange = (index, file) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = file;
    setFileInputs(newFileInputs);
  };

  const handleNewUrls = (urls) => {
    setImageUrls(urls);
    console.log("New URLs:", urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (patientCNIC.length !== 13) {
      setMessage("CNIC must be exactly 13 digits long.");
      setDisplayAlert(true)
      return;
    }

    const images = Object.values(imageUrls).flat();
    const files = images;

    const formData = {
      patientCNIC,
      numberOfFiles: images.length,
      files,
    };

    console.log(formData);

    try {
      const result = await addPrescription(formData);
      console.log('Prescription added :', result);
      setMessage("Add Prescription Successfully");
      setDisplayAlert(true)
    } catch (error) {
      console.error('Error adding prescription: ', error);
      setMessage("Network Disconnected");
      setDisplayAlert(true)
      // Handle error
    }
  };

  useEffect(() => {
    if (fileInputs.length > 0) {
      addImage(selectedFiles.current, handleNewUrls);
    }
  }, [fileInputs]);














  
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setDisplayAlert(false)

    setState({ ...state, open: false });
  };

  return (
    <>
      <Navbar/>


      <div className="section-title">
        <h2>Prescription</h2>
        <p>Add Prescription for Patient</p>
      </div>
      {displayAlert?
      <Snackbar style={{Top:'20px'}}
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClose={handleClose}
        onClick={handleClose}
        autoHideDuration={2000}
        message= {message}
        key={vertical + horizontal}
      />:''}
      <div className="info">
        <form onSubmit={handleSubmit} id="aws-form">
          <div>
            <label htmlFor="patientcnic">CNIC (without -) *</label>
            <input style={{color:'black'}}
              type="text"
              id="patientcnic"
              name="patientcnic"
              placeholder="Enter 13-digit CNIC"
              value={patientCNIC}
              onChange={(e) => setPatientCNIC(e.target.value.replace(/\D/g, '').slice(0, 13))}
              maxLength={13}
              minLength={13}
              required
            />
          </div>

          <div>
            <label htmlFor="filesNumber">No of Files *</label>
            <select
              id="filesNumber"
              name="filesNumber"
              value={files}
              onChange={handleFilesChange}
              required
            >
              {[...Array(9).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {[...Array(files)].map((_, index) => (
            <div key={index}>
              <label htmlFor={`patientFile${index + 1}`}>
                Attach File no {index + 1}
              </label>
              <input
                type="file"
                id={`patientFile${index + 1}`}
                className="file-input"
                name={`patientFile${index + 1}`}
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                required
              />
            </div>
          ))}

          <button type="submit" id="submit" style={{background: '#0f172a', color: 'white'}}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPrescription;
