import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useData } from "../../ContextApi/DataContent";
import "./DataForm.css";
import { fetchAppointmentData } from '../../../Services/GetInfo'; 

function DataForm({ editable }) {

  const { data, setData } = useData();

  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        let data1 = await fetchAppointmentData();
        setInfoData(data1)
        console.log("data is : ", data1);
        data[0].patientFullName = data1.patientFullName || " ";
        data[1].patientCNIC = data1.patientCNIC || 0;
        data[2].patientAge=data1.patientAge || 0;
        data[5].patientEmail = data1.patientEmail || "";
        data[6].patientCurrentWeight = data1.patientCurrentWeight || 0;
        data[7].patientOccupation = data1.patientOccupation || "";
        data[8].patientFoodChoices = data1.patientFoodChoices || "4";
        data[9].patientHomeCook = data1.patientFoodAvoid || "44";
        data[10].patientHomeCook = data1.patientHomeCook || "";
        data[11].patientWristCircumference = data1.patientWristCircumference || 0;
        data[12].patientHeight = data1.patientHeight || 0;
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    loadData();
  }, []);

  if (!infoData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }

  function handleNameChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[0] = { ...newData[0], patientFullName: e.target.value };

      return newData;
    });
  }


  function handleCnicChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[1] = { ...newData[1], patientCNIC: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleAgeChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[2] = { ...newData[2], patientAge: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleGenderChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[3] = { ...newData[3], patientGender: e.target.value };
      return newData;
    });
  }

  function handleNumberChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[4] = { ...newData[4], patientContactNumber: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleEmailChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[5] = { ...newData[5], patientEmail: e.target.value };
      return newData;
    });
  }

  function handleWeighthChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[6] = { ...newData[6], patientCurrentWeight: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleOccupationChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[7] = { ...newData[7], patientOccupation: e.target.value };
      return newData;
    });
  }

  function handleFoodChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[8] = { ...newData[8], patientFoodChoices: e.target.value };
      return newData;
    });
  }
  function handleNotFoodChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[9] = { ...newData[9], patientFoodAvoid: e.target.value };
      return newData;
    });
  }

  function handleCookChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[10] = { ...newData[10], patientHomeCook: e.target.value };
      return newData;
    });
  }
  
  function handleWristChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[11] = { ...newData[11], patientWristCircumference: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleHeightChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[12] = { ...newData[12], patientHeight: parseInt(e.target.value) };
      return newData;
    });
  }

  return (
    <div class="info">
      <div>
        <label for="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="patientFullName"
          // value={data[0].patientFullName}
          value={data[0].patientFullName}
          placeholder="Your Answer here"
          onChange={handleNameChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="cnic">CNIC (without -) *</label>
        <input
          type="number"
          id="cnic"
          name="patientCNIC"
          // value={data[1].patientCNIC}
          value={data[1].patientCNIC}
          placeholder="Your Answer here"
          onChange={handleCnicChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="Age">Age *</label>
        <input
          type="text"
          id="age"
          name="patientAge"
          // value={data[2].patientAge}
        
    value={data[2].patientAge}
          placeholder="Your Answer here"
          onChange={handleAgeChange}
          readOnly={!editable}
          required
        />
      </div>

  

      <div>
        <label for="contact">Contact Number *</label>
        <input
          type="number"
          id="contact"
          name="patientContactNumber"
          placeholder="Your Answer here"
          value={data[4].patientContactNumber}
              // value={infoData.}
          //   onChange={(e) => setNumber(parseInt(e.target.value))}
          onChange={handleNumberChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="email">Email *</label>
        <input
          type="email"
          id="email"
          name="patientEmail"
          placeholder="Your Answer here"
          // value={data[5].patientEmail}
      value={data[5].patientEmail}
          //   onChange={(e) => setEmail(e.target.value)}

          onChange={handleEmailChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="weight">Current Weight *</label>
        <input
          type="number"
          id="weight"
          name="patientCurrentWeight"
          placeholder="Your Answer here"
          // value={data[6].patientCurrentWeight}
              value={infoData.patientCurrentWeight || data[6].patientCurrentWeight}
          //   onChange={(e) => setWeight(parseInt(e.target.value))}
          onChange={handleWeighthChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="occupation">Occupation</label>
        <input
          type="text"
          id="weight"
          name="patientOccupation"
          // value={data[7].patientOccupation}
           value={data[7].patientOccupation}
          //   onChange={(e) => setOccupation(e.target.value)}

          onChange={handleOccupationChange}
          readOnly={!editable}
          placeholder="Your Answer here"
        />
      </div>

      <div>
        <label for="food ">Mention your own food choices</label>
        <input
          type="text"
          id="food"
          name="patientFoodChoices"
          // value={data[8].patientFoodChoices}
            value={data[8].patientFoodChoices}
          //   onChange={(e) => setFood(e.target.value)}

          onChange={handleFoodChange}
          readOnly={!editable}
          placeholder="Your Answer here"
        />
      </div>

      <div>
        <label for="notfood">
          Mention the foods you want us to not add in your diet plan
        </label>
        <input
          type="text"
          id="notfood"
          name="patientFoodAvoid"
          value={data[9].patientHomeCook}
        //  value={infoData.patientFoodAvoid || data[9].patientHomeCook}
          //   onChange={(e) => setnotFood(e.target.value)}

          onChange={handleNotFoodChange}
          readOnly={!editable}
          placeholder="Your Answer here"
        />
      </div>

      <div>
        <label for="cook">Who cooks in your home</label>
        <input
          type="text"
          id="cook"
          name="patientHomeCook"
          value={data[10].patientHomeCook}
          // value={infoData.patientHomeCook || data[10].patientHomeCook}
          //   onChange={(e) => setCook(e.target.value)}

          onChange={handleCookChange}
          readOnly={!editable}
          placeholder="Your Answer here"
        />
      </div>

      <div>
        <label for="wrist">Wrist Circumference (cm) *</label>
        <input
          type="text"
          id="wrist"
          name="patientWristCircumference"
          placeholder="Your Answer here"
          value={data[11].patientWristCircumference}
              // value={infoData.patientWristCircumference || data[11].patientWristCircumference}
          // nChange={(e) => setWrist(parseInt(e.target.value))}
          onChange={handleWristChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="height">Height (cm)*</label>
        <input
          type="text"
          id="height"
          name="patientHeight"
          placeholder="Your Answer here"
          value={data[12].patientHeight}
        // value={infoData.patientHeight || data[12].patientHeight}
          //   onChange={(e) => setHeight(parseInt(e.target.value))}
          onChange={handleHeightChange}
          readOnly={!editable}
          required
        />
      </div>
    </div>
  );
}

export default DataForm;
