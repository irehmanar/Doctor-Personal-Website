import React, { useState } from "react";

function AddPrescription() {
    const [files, setFiles] = useState(0);
  
    const handleFilesChange = (e) => {
      const value = parseInt(e.target.value);
      setFiles(value >= 0 ? value : 0); // Ensure files is non-negative
    };
  
    return (
      <>
        <div className="section-title">
          <h2>Prescription</h2>
          <p>Add Prescription for Patient</p>
        </div>
        <div className="info">
          <form>
            <div>
              <label htmlFor="patientcnic">CNIC (without -) *</label>
              <input
                type="number"
                id="patientcnic"
                name="patientcnic"
                placeholder="Your Answer here"
                required
              />
            </div>
  
            <div>
              <label htmlFor="filesNumber">No of Files *</label>
              <input
                type="number"
                id="filesNumber"
                name="filesNumber"
                placeholder="Your Answer here"
                value={files}
                onChange={handleFilesChange}
                required
              />
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
