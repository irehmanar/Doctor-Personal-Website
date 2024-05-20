import React, { useState, useEffect, useRef } from "react";
import { addPrescription } from '../../../Services/AddPrescription';
import Navbar from "../../Components/Navbar/Navbar";
import { addImage } from '../../../aws/addimage.js';

function AddPrescription() {
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

    if (patientCNIC.length !== 11) {
      alert("CNIC must be exactly 11 digits long.");
      return;
    }

    const images = Object.values(imageUrls).flat();

    const formData = {
      patientCNIC,
      numberOfFiles: files,
      images,
    };

    console.log(formData);

    try {
      const result = await addPrescription(formData);
      console.log('Prescription added :', result);
      // Handle success
    } catch (error) {
      console.error('Error adding prescription: ', error);
      // Handle error
    }
  };

  useEffect(() => {
    addImage(selectedFiles.current, handleNewUrls);
  }, [fileInputs]);

  return (
    <>
      <Navbar/>
      <div className="section-title">
        <h2>Prescription</h2>
        <p>Add Prescription for Patient</p>
      </div>
      <div className="info">
        <form onSubmit={handleSubmit} id="aws-form">
          <div>
            <label htmlFor="patientcnic">CNIC (without -) *</label>
            <input
              type="text"
              id="patientcnic"
              name="patientcnic"
              placeholder="Enter 11-digit CNIC"
              value={patientCNIC}
              onChange={(e) => setPatientCNIC(e.target.value.replace(/\D/g, '').slice(0, 11))}
              minLength="11"
              maxLength="11"
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

      {/* Print URLs */}
      <div>
        {Object.values(imageUrls).map((urls, index) => (
          <div key={index}>
            <h3>URLs for File {index + 1}:</h3>
            <ul>
              {urls.map((url, i) => (
                <li key={i}>{url}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddPrescription;
