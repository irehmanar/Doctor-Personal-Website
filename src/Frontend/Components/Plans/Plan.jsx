import React from "react";
import { useData } from "../../ContextApi/DataContent";
import "./Plan.css";
function Plan({ editable }) {
  const { data, setData } = useData();

  function handleNameChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[0] = { ...newData[0], name: e.target.value };
      return newData;
    });
  }

  function handleCnicChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[1] = { ...newData[1], cnic: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleAgeChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[2] = { ...newData[2], age: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleGenderChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[3] = { ...newData[3], gender: e.target.value };
      return newData;
    });
  }

  function handleNumberChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[4] = { ...newData[4], number: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleEmailChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[5] = { ...newData[5], email: e.target.value };
      return newData;
    });
  }

  function handleWeighthChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[6] = { ...newData[6], weight: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleOccupationChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[7] = { ...newData[7], occupation: e.target.value };
      return newData;
    });
  }

  function handleFoodChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[8] = { ...newData[8], food: e.target.value };
      return newData;
    });
  }

  function handleCookChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[9] = { ...newData[9], cook: e.target.value };
      return newData;
    });
  }

  function handleWristChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[10] = { ...newData[10], wrist: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleHeightChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[11] = { ...newData[11], height: parseInt(e.target.value) };
      return newData;
    });
  }

  function handleNotFoodChange(e) {
    setData((prevData) => {
      const newData = [...prevData];
      newData[12] = { ...newData[12], notfood: e.target.value };
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
          name="name"
          value={data[0].name}
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
          name="cnic"
          value={data[1].cnic}
          placeholder="Your Answer here"
          //   readOnly={true}
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
          name="age"
          value={data[2].age}
          placeholder="Your Answer here"
          //   onChange={(e) => setAge(parseInt(e.target.value))}
          onChange={handleAgeChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="plan">Gender *</label>
        <label>
          <input
            type="radio"
            id="basic"
            name="gender"
            value="male"
            checked={data[3].gender === "male"}
            // onChange={(e) => setGender(e.target.value)}
            onChange={handleGenderChange}
            readOnly={!editable}
            required
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            id="premium"
            name="gender"
            value="female"
            checked={data[3].gender === "female"}
            // onChange={(e) => setGender(e.target.value)}

            onChange={handleCnicChange}
            readOnly={!editable}
            required
          />
          Female
        </label>
        
      </div>

      <div>
        <label for="contact">Contact Number *</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Answer here"
          value={data[4].number}
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
          name="email"
          placeholder="Your Answer here"
          value={data[5].email}
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
          name="weight"
          placeholder="Your Answer here"
          value={data[6].weight}
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
          name="weight"
          value={data[7].occupation}
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
          name="food"
          value={data[8].food}
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
          name="notfood"
          value={data[12].notfood}
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
          name="cook"
          value={data[9].cook}
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
          name="wrist"
          placeholder="Your Answer here"
          value={data[10].wrist}
          //   onChange={(e) => setWrist(parseInt(e.target.value))}
          onChange={handleWristChange}
          readOnly={!editable}
          required
        />
      </div>

      <div>
        <label for="height">Height *</label>
        <input
          type="text"
          id="height"
          name="height"
          placeholder="Your Answer here"
          value={data[11].height}
          //   onChange={(e) => setHeight(parseInt(e.target.value))}
          onChange={handleHeightChange}
          readOnly={!editable}
          required
        />
      </div>
    </div>
  );
}

export default Plan;
