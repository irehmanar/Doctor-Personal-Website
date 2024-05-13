import React, { useState } from "react";
import "./PersonalInfo.css";
import DataForm from "../../Components/DataForm/DataForm";
import { useData } from "../../ContextApi/DataContent";
function PersonalInfo() {
  const [edit, setEdit] = useState(false); // Initialize edit state and its setter function
  const { data } = useData();
  const handleEditClick = () => {
    setEdit(true); // Set edit to true when the Edit button is clicked
    console.log(edit);
  };
  return (
    <>
      <div class="section-title">
        <h2>Info</h2>
        <p>Fill Your Information</p>
      </div>
      <div class="info">
      <button id="submit" onClick={handleEditClick}>
          Edit Data
        </button>
        {edit?  <h3>You can edit your data, {data[0].name}</h3>:''}
        <form>
          <DataForm editable={edit}/>

          <button type="submit" id="submit">
            Submit
          </button>
         
        </form>
      </div>
    </>
  );
}

export default PersonalInfo;
