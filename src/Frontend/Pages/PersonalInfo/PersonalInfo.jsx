import React, { useState } from "react";
import "./PersonalInfo.css";
import DataForm from "../../Components/DataForm/DataForm";
import { useData } from "../../ContextApi/DataContent";
import Navbar from '../../Components/Navbar/Navbar'
import { fetchUpdateData } from '../../../Services/UpdateInfo'; 
function PersonalInfo() {
  const { data } = useData();
  const [infoData1, setInfoData1] = useState(null);
  const [edit, setEdit] = useState(false); // Initialize edit state and its setter function

  const handleEditClick = () => {
    setEdit(true); // Set edit to true when the Edit button is clicked
    console.log(edit);
  };

  async function handleSubmit(event) {
    console.log(data)
    event.preventDefault();
    try {
        const result = await fetchUpdateData(data);
        console.log('Info created:', result);
        alert('Data entered successfully!');
        // Handle success
    } catch (error) {
        console.error('Error creating appointments:', error);
        // Handle error
    }
}


  return (
    <>
    <Navbar/>
    
      <div class="section-title">
        <h2>Info</h2>
        <p>Fill Your Information</p>
      </div>
      <div class="info">
      <button id="submit" onClick={handleEditClick}>
          Edit Data
        </button>
        {edit?  <h3>You can edit your data, {data[0].name}</h3>:''}
        <form onSubmit={handleSubmit}>
          <DataForm editable={edit}/>

          <button type="submit" id="submit" >
            Submit
          </button>
         
        </form>
      </div>
    </>
  );
}

export default PersonalInfo;
