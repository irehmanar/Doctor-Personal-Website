import React, { useState } from "react";
import { addPrescription } from '../../../Services/AddPrescription';
function AddPrescription() {
  const [files, setFiles] = useState(0);
  const [patientCNIC, setPatientCNIC] = useState("");
  const [fileInputs, setFileInputs] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (patientCNIC.length !== 11) {
      alert("CNIC must be exactly 11 digits long.");
      return;
    }

    const images = await Promise.all(
      fileInputs.map((file) => fileToBase64(file))
    );

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

    // Here you can use the formData in a POST API request, for example:
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <div className="section-title">
        <h2>Prescription</h2>
        <p>Add Prescription for Patient</p>
      </div>
      <div className="info">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="patientcnic">CNIC (without -) *</label>
            <input
              type="text" // Changed from number to text to prevent number input quirks
              id="patientcnic"
              name="patientcnic"
              placeholder="Enter 11-digit CNIC"
              value={patientCNIC}
              onChange={(e) => setPatientCNIC(e.target.value.replace(/\D/g, '').slice(0, 11))} // Only allow digits and limit to 11
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
                name={`patientFile${index + 1}`}
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                required
              />
            </div>
          ))}

          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPrescription;
