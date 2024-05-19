import React, { useState } from "react";
import "./AddPlans.css";
import { addPlan } from '../../../Services//AddPlan';
import Navbar from "../../Components/Navbar/Navbar";

function AddPlans() {
  const [plan, setPlan] = useState(0);
  const [subplans, setSubPlans] = useState([]);
  const [data, setData] = useState(
    [
      0,
      [
      ]
  ]);

  const handlePlanChange = (e) => {
    const value = parseInt(e.target.value);
    setPlan(value >= 0 ? value : 0);
    
    // Create the new sub-plans array with initial values
    const newSubPlans = Array(value).fill(0);
  
    // Create the new plans array with updated structure
    const newPlans = Array(value).fill().map(() => ({
          name:"",
          description:"",
          subPlans:0,
          subPlansDetail:[],
    }));
  
    // Update the state with new values
    setSubPlans(newSubPlans);
    setData([value, newPlans]);
  };
  

  const handleNameChange = (e, index) => {
    const newName = e.target.value;
    setData([
      data[0],
      data[1].map((plan, i) => {
        if (i === index) {
          return { ...plan, name: newName};
        }
        return plan;
      })
    ]);
  };


  const handleDescriptionChange = (e, index) => {
    const newDescription = e.target.value;
    setData([
      data[0],
      data[1].map((plan, i) => {
        if (i === index) {
          return { ...plan, description: newDescription };
        }
        return plan;
      })
    ]);
    
  };
  
  
  
  const handleSubPlanChange = (e, index) => {
    const value = parseInt(e.target.value);
    const newSubPlans = [...subplans];
    newSubPlans[index] = value >= 0 ? value : 0;
    setSubPlans(newSubPlans);
    const newPlans = [...data[1]];
    newPlans[index].subPlans = value;
    newPlans[index].subPlansDetail = Array.from({ length: value }, () => ({
      month: 0,
      dietPlan: 0,
      price: 0,
      discountedPrice: 0,
    }));
    setData([data[0], newPlans]);
  };
  
  
  const handlesubPlanMonthChange = (e, index, subplanindex) => {
    const newMonth = e.target.value;
    const newPlans = [...data[1]]; // Create a shallow copy of the plans array
    // Update the month of the specified sub-plan within the specified plan
    newPlans[index].subPlansDetail[subplanindex].month = newMonth;
    // Update the data state with the modified plans array
    setData([data[0], newPlans]);
  };
  
  const handlesubPlandietPlanChange = (e, index, subplanindex) => {
    const newDietPlan = e.target.value;
    const newPlans = [...data[1]]; // Create a shallow copy of the plans array
    // Update the diet plan of the specified sub-plan within the specified plan
    newPlans[index].subPlansDetail[subplanindex].dietPlan = newDietPlan;
    // Update the data state with the modified plans array
    setData([data[0], newPlans]);
  };
  
  const handlesubPlanPriceChange = (e, index, subplanindex) => {
    const newPrice = e.target.value;
    const newPlans = [...data[1]]; // Create a shallow copy of the plans array
    // Update the price of the specified sub-plan within the specified plan
    newPlans[index].subPlansDetail[subplanindex].price = newPrice;
    // Update the data state with the modified plans array
    setData([data[0], newPlans]);
  };
  
  const handlesubPlandiscountedPriceChange = (e, index, subplanindex) => {
    const newdiscountedPrice = e.target.value;
    const newPlans = [...data[1]]; // Create a shallow copy of the plans array
    // Update the discounted price of the specified sub-plan within the specified plan
    newPlans[index].subPlansDetail[subplanindex].discountedPrice = newdiscountedPrice;
    // Update the data state with the modified plans array
    setData([data[0], newPlans]);
  };
  


async function handleSubmit(e){
  e.preventDefault();

  console.log(data);

  try {
    const result = await addPlan(data);
    console.log('Plan added Successfully:', result);
    // Handle success
} catch (error) {
    console.error('Error creating plans:', error);
    // Handle error
}
}




























  return (
    <div style={{margin: '0px'}}>
      <Navbar/>
      <div class="section-title">
        <h2>Plans</h2>
        <p>Add Your Plans</p>
      </div>

      <div className="info">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="plannumber">No of Plans *</label>
            <select
              id="plannumber"
              name="plannumber"
              value={plan}
              onChange={handlePlanChange}
              required
            >
              <option value="">Select an option</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          {[...Array(plan)].map((_, index) => (
            <div key={index} id="formdiv">
              <h1>Plan no {index + 1}</h1>

              <div>
                <label htmlFor={`namePlan${index + 1}`}>Name *</label>
                <input
                  type="text"
                  id={`namePlan${index + 1}`}
                  name={`namePlan${index + 1}`}
                  value={((data[1])[index]).name}
                  placeholder="Your Answer here"
                  onChange={(e) => handleNameChange(e, index)}
                  required
                />
              </div>

              <div>
                <label htmlFor={`descriptionPlan${index + 1}`}>
                  Description *
                </label>
                <input
                  type="text"
                  id={`description${index + 1}`}
                  name={`description${index + 1}`}
                  value={((data[1])[index]).description}
                  placeholder="Your Answer here"
                  onChange={(e) => handleDescriptionChange(e, index)}
                  required
                />
              </div>

              <div>
                <label htmlFor={`subplannumber${index + 1}`}>
                  No of Sub-Plans *
                </label>
                <select
                  id={`subplannumber${index + 1}`}
                  name={`subplannumber${index + 1}`}
                  value={subplans[index]}
                  onChange={(e) => handleSubPlanChange(e, index)}
                  required
                  >
                  <option value="">Select an option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              {[...Array(subplans[index])].map((_, subindex) => (
                <div key={subindex} id="formsubdiv">
                  <h3>Sub-Plan no {subindex + 1}</h3>

                  <div>
                    <label htmlFor={`subPlanMonth${index + 1}_${subindex + 1}`}>
                      Month *
                    </label>
                    <input
                      type="number"
                      id={`subPlanMonth${index + 1}_${subindex + 1}`}
                      name={`subPlanMonth${index + 1}_${subindex + 1}`}
                      value={data[1][index].subPlansDetail.month}
                      placeholder="Your Answer here"
                      onChange={(e) => handlesubPlanMonthChange(e, index,subindex)}
                      //   onChange={handleNameChange}
                      //   readOnly={!editable}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor={`subPlandiet${index + 1}_${subindex + 1}`}>
                      Diet Plans *
                    </label>
                    <input
                      type="number"
                      id={`subPlandiet${index + 1}_${subindex + 1}`}
                      name={`subPlandiet${index + 1}_${subindex + 1}`}
                      value={data[1][index].subPlansDetail.dietPlan}
                      placeholder="Your Answer here"
                      onChange={(e) => handlesubPlandietPlanChange(e, index,subindex)}
                      //   onChange={handleNameChange}
                      //   readOnly={!editable}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor={`subPlanPrice${index + 1}_${subindex + 1}`}>
                      Price *
                    </label>
                    <input
                      type="number"
                      id={`subPlanPrice${index + 1}_${subindex + 1}`}
                      name={`subPlanPrice${index + 1}_${subindex + 1}`}
                      value={data[1][index].subPlansDetail.price}
                      placeholder="Your Answer here"
                      onChange={(e) => handlesubPlanPriceChange(e, index,subindex)}
                      //   onChange={handleNameChange}
                      //   readOnly={!editable}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`subPlanDiscount${index + 1}_${subindex + 1}`}
                    >
                      Discounted Price (if applicable)
                    </label>
                    <input
                      type="number"
                      id={`subPlanDiscount${index + 1}_${subindex + 1}`}
                      name={`subPlanDiscount${index + 1}_${subindex + 1}`}
                      value={data[1][index].subPlansDetail.discountedPrice}
                      placeholder="Your Answer here"
                      onChange={(e) => handlesubPlandiscountedPriceChange(e, index,subindex)}
                      //   onChange={handleNameChange}
                      //   readOnly={!editable}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}

          <button type="submit" id="submit" style={{background:'#0f172a',color:'white'}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPlans;
