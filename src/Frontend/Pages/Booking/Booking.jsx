import React, { useState } from "react";
import "./Booking.css";
import DataForm from "../../Components/DataForm/DataForm";
function Booking() {
  const [edit, setEdit] = useState(false);
  const handleEditClick = () => {
    setEdit(true); // Set edit to true when the Edit button is clicked
    console.log(edit);
  };


  
  return (
    <>
      <div class="section-title">
        <h2>Book now</h2>
        <p>Book your Appointment</p>
      </div>
      <div class="info">
        <button id="submit" onClick={handleEditClick}>
          Edit Data
        </button>
        {edit ? <h3>You can edit your data</h3> : ""}
        <form>
        <DataForm editable={edit}/>
          <div>
            <label for="Yes">Are you taking any dietary supplements? *</label>
            <label for="Yes">
              <input
                type="radio"
                id="Yes"
                name="supplement"
                value="Yes"
                required
              />
              Yes
            </label>
            <label for="No">
              <input
                type="radio"
                id="No"
                name="supplement"
                value="No"
                required
              />
              No
            </label>
          </div>

          <div>
            <label for="supplementname">
              Mention the name of the supplement your are taking, otherwise
              leave it blank
            </label>
            <input
              type="text"
              id="supplementname"
              name="supplementname"
              placeholder="Your Answer here"
            />
          </div>

          <div>
            <label for="complication ">Medical Complications (if any)?</label>
            <input
              type="text"
              id="complication"
              name="complication"
              placeholder="Your Answer here"
            />
          </div>

          <div>
            <label for="allergy ">Do you have any kind of food allergy</label>
            <input
              type="text"
              id="allergy"
              name="allergy"
              placeholder="Your Answer here"
            />
          </div>

          <div>
            <label for="physical ">
              Mention type and duration of any physical
              activity/exercise/gym/jogging etc. if you are involved in any,
              otherwise leave it blank.
            </label>
            <input
              type="text"
              id="physical"
              name="physical"
              placeholder="Your Answer here"
            />
          </div>

          <div>
            <label for="file">
              Attach recent blood test report if available:
            </label>
            <input type="file" id="file" name="file" />
          </div>

          <div>
            <label for="requirement">What do you need ? *</label>
            <label>
              <input
                type="radio"
                id="weightmanagement"
                name="requirement"
                required
              />
              Weight Management
            </label>
            <label>
              <input
                type="radio"
                id="diseasemanagement"
                name="requirement"
                required
              />
              Disease Management
            </label>
            <label>
              <input
                type="radio"
                id="healthconsultation"
                name="requirement"
                required
              />
              Other
            </label>
          </div>

          <div>
            <label for="plan">
              Which type of diet plan are you subscribing for?
            </label>
            <label>
              <input type="radio" id="male" name="plan" required />
              Basic Diet Plan
            </label>
            <label>
              <input type="radio" id="female" name="plan" required />
              Premium Diet Plan
            </label>
            <label>
              <input type="radio" id="other" name="plan" required />
              Therapeutic Diet Plan
            </label>
          </div>

          <div>
            <label for="payment">Payment Type:</label>
            <label>
              <input type="radio" id="male" name="payment" required />
              HBL Account - 01277901550903
            </label>
            <label>
              <input type="radio" id="female" name="payment" required />
              Easypaisa - 0341-6331041
            </label>
            <label>
              <input type="radio" id="other" name="payment" required />
              IBAN - PK24HABB0001277901550903
            </label>
          </div>

          <div>
            <label for="paymentFile">Attach Payment Proof</label>
            <input type="file" id="paymentFile" name="paymentFile" required />
          </div>

          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Booking;
