import React, { useState } from "react";
import "./AddPlans.css";

function AddPlans() {
  const [plan, setPlan] = useState(0);
  const [subplans, setSubPlans] = useState([]);

  const handlePlanChange = (e) => {
    const value = parseInt(e.target.value);
    setPlan(value >= 0 ? value : 0);
    setSubPlans(Array(value).fill(0));
  };

  const handleSubPlanChange = (e, index) => {
    const value = parseInt(e.target.value);
    const newSubPlans = [...subplans];
    newSubPlans[index] = value >= 0 ? value : 0;
    setSubPlans(newSubPlans);
  };

  return (
    <>
      <div class="section-title">
        <h2>Plans</h2>
        <p>Add Your Plans</p>
      </div>

      <div className="info">
        <form>
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
              <option value="4">4</option>
              <option value="5">5</option>
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
                  value=""
                  placeholder="Your Answer here"
                  //   onChange={handleNameChange}
                  //   readOnly={!editable}
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
                  value=""
                  placeholder="Your Answer here"
                  //   onChange={handleNameChange}
                  //   readOnly={!editable}
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
                      value=""
                      placeholder="Your Answer here"
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
                      value=""
                      placeholder="Your Answer here"
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
                      value=""
                      placeholder="Your Answer here"
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
                      value=""
                      placeholder="Your Answer here"
                      //   onChange={handleNameChange}
                      //   readOnly={!editable}
                      required
                    />
                  </div>
                </div>
              ))}
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

export default AddPlans;
