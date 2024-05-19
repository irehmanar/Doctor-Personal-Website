import React, { useEffect, useState } from "react";
import "./Booking.css";
import DataForm from "../../Components/DataForm/DataForm";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchSubPlanData } from "../../../Services/SubPlansApi";
import { fetchPlanData } from "../../../Services/PlansApi";
import { useData } from "../../ContextApi/DataContent";
import { createAppointment } from '../../../Services/Booking';
import Navbar from "../../Components/Navbar/Navbar";

function Booking() {
  const { data } = useData();
  const [edit, setEdit] = useState(false);
  const [planData, setPlanData] = useState([]);
  const [subPlanData, setSubPlanData] = useState([]);
  const [subPlan, setSubPlan] = useState("");
  const [loading, setLoading] = useState(true);
  const [infoData, setInfoData] = useState(data);
  const [bookingData, setBookingData] = useState([
    {
      "patientDeitarySupplements": "No",
    },
    {
      "pateintNameOfSupplements": "",
    },
    {
      "patientMedicalComplications": "",
    },
    {
      "patientFoodAllergy": "",
    },
    {
      "patientPhysicalActivity": "",
    },
    {
      "patientBloodTestImage": "",
    },
    {
      "patientRequirements": "Other",
    },
    {
      "planChosen": "",
    },
    {
      "subPlanchosen": 1,
    },
    {
      "paymentType": "HBL",
    },
    {
      "paymentReciept": "",
    },
  ]);

  function handlepatientDeitarySupplementsChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[0] = {
        ...newDataBooking[0],
        patientDeitarySupplements: e.target.value,
      };
      return newDataBooking;
    });
  }

  function handlepateintNameOfSupplementsChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[1] = {
        ...newDataBooking[1],
        pateintNameOfSupplements: e.target.value,
      };
      return newDataBooking;
    });
  }

  function handlepatientMedicalComplicationsChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[2] = {
        ...newDataBooking[2],
        patientMedicalComplications: e.target.value,
      };
      return newDataBooking;
    });
  }

  function handlepatientFoodAllergyChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[3] = { ...newDataBooking[3], patientFoodAllergy: e.target.value };
      return newDataBooking;
    });
  }

  function handlepatientPhysicalActivityChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[4] = { ...newDataBooking[4], patientPhysicalActivity: e.target.value };
      return newDataBooking;
    });
  }

  function handlepatientBloodTestImageChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[5] = { ...newDataBooking[5], patientBloodTestImage: e.target.value };
      return newDataBooking;
    });
  }

  function handlepatientRequirementsChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[6] = {
        ...newDataBooking[6],
        patientRequirements: e.target.value,
      };
      return newDataBooking;
    });
  }

  function handleplanChosenChange(e) {
    const selectedPlan = e.target.value;
    setSubPlan(selectedPlan);
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[7] = { ...newDataBooking[7], planChosen: selectedPlan };
      return newDataBooking;
    });
  }

  function handlesubPlanchosenChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[8] = {
        ...newDataBooking[8],
        subPlanchosen: 3,
      };
      return newDataBooking;
    });
  }

  function handlepaymentTypeChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[9] = { ...newDataBooking[9], paymentType: e.target.value };
      return newDataBooking;
    });
  }

  function handlepaymentRecieptChange(e) {
    setBookingData((prevData) => {
      const newDataBooking = [...prevData];
      newDataBooking[10] = {
        ...newDataBooking[10],
        paymentReciept: e.target.value,
      };
      return newDataBooking;
    });
  }

  const handleEditClick = () => {
    setEdit(true);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchPlanData();
        if (Array.isArray(data)) {
          setPlanData(data);
          // console.log("Plan data fetched: ", data);
        } else {
          console.error(
            "Expected plan data to be an array, but received:",
            data
          );
        }
      } catch (error) {
        console.error("Failed to fetch plan data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Api for subplan
  useEffect(() => {
    const loadSubData = async () => {
      if (!subPlan) return; // Exit if no subPlan is selected
      try {
        let subData = await fetchSubPlanData(subPlan);
        if (Array.isArray(subData)) {
          setSubPlanData(subData);
          // console.log("Sub-plan data fetched: ", subData);
        } else {
          console.error(
            "Expected sub-plan data to be an array, but received:",
            subData
          );
        }
      } catch (error) {
        console.error("Failed to fetch sub-plan data", error);
      } finally {
        setLoading(false);
      }
    };
    loadSubData();
  }, [subPlan]);

  // const handlePlan = (event) => {
  //   const selectedPlan = event.target.value;
  //   setSubPlan(selectedPlan);
  //   console.log("Selected Plan:", selectedPlan);
  // };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }

  if (!Array.isArray(planData)) {
    return <div>Unexpected data format</div>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setInfoData(data);
    const mergedArray = [...infoData, ...bookingData];
    console.log(mergedArray[0]);

    try {
        const result = await createAppointment(mergedArray);
        console.log('Appointments created:', result);
        alert('Appointment Booked successfully!');
        // Handle success
    } catch (error) {
        console.error('Error creating appointments:', error);
        // Handle error
    }
}

  return (
    <>
    <Navbar/>
      <div className="section-title">
        <h2>Book now</h2>
        <p>Book your Appointment</p>
      </div>

      <div className="info">
        <button id="submit" onClick={handleEditClick}>
          Edit Data
        </button>
        {edit && <h3>You can edit your data</h3>}
        <DataForm editable={edit} />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="patientDeitarySupplements">
              Are you taking any dietary supplements? *
            </label>
            <label htmlFor="Yes">
              <input
                type="radio"
                id="Yes"
                name="patientDeitarySupplements"
                value="Yes"
                required
                onChange={handlepatientDeitarySupplementsChange}
              />
              Yes
            </label>
            <label htmlFor="No">
              <input
                type="radio"
                id="No"
                name="patientDeitarySupplements"
                value="No"
                required
                defaultChecked
                onChange={handlepatientDeitarySupplementsChange}
              />
              No
            </label>
          </div>

          <div>
            <label htmlFor="pateintNameOfSupplements">
              Mention the name of the supplement your are taking, otherwise
              leave it blank
            </label>
            <input
              type="text"
              id="pateintNameOfSupplements"
              name="pateintNameOfSupplements"
              placeholder="Your Answer here"
              onChange={handlepateintNameOfSupplementsChange}
            />
          </div>

          <div>
            <label htmlFor="patientMedicalComplications">
              Medical patientMedicalComplicationss (if any)?
            </label>
            <input
              type="text"
              id="patientMedicalComplications"
              name="patientMedicalComplications"
              placeholder="Your Answer here"
              onChange={handlepatientMedicalComplicationsChange}
            />
          </div>

          <div>
            <label htmlFor="patientFoodAllergy">
              Do you have any kind of food patientFoodAllergy
            </label>
            <input
              type="text"
              id="patientFoodAllergy"
              name="patientFoodAllergy"
              placeholder="Your Answer here"
              onChange={handlepatientFoodAllergyChange}
            />
          </div>

          <div>
            <label htmlFor="patientPhysicalActivity">
              Mention type and duration of any patientPhysicalActivity
              activity/exercise/gym/jogging etc. if you are involved in any,
              otherwise leave it blank.
            </label>
            <input
              type="text"
              id="patientPhysicalActivity"
              name="patientPhysicalActivity"
              placeholder="Your Answer here"
              onChange={handlepatientPhysicalActivityChange}
            />
          </div>

          <div>
            <label htmlFor="patientBloodTestImage">
              Attach recent blood test report if available:
            </label>
            <input
              type="file"
              id="patientBloodTestImage"
              name="patientBloodTestImage"
              onChange={handlepatientBloodTestImageChange}
            />
          </div>

          <div>
            <label htmlFor="patientRequirements">What do you need ? *</label>
            <label>
              <input
                type="radio"
                id="weightmanagement"
                name="patientRequirements"
                value="Weight Management"
                required
                onChange={handlepatientRequirementsChange}
              />
              Weight Management
            </label>
            <label>
              <input
                type="radio"
                id="diseasemanagement"
                name="patientRequirements"
                value="Disease Management"
                required
                onChange={handlepatientRequirementsChange}
              />
              Disease Management
            </label>
            <label>
              <input
                type="radio"
                id="healthconsultation"
                name="patientRequirements"
                value="Other"
                required
                onChange={handlepatientRequirementsChange}
                defaultChecked
              />
              Other
            </label>
          </div>

          <div>
            <label htmlFor="planChosen">
              Which type of diet plan are you subscribing for?
            </label>
            {planData.map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  id={item}
                  name="planChosen"
                  value={item}
                  onChange={handleplanChosenChange}
                />
                {item}
              </label>
            ))}
          </div>

          <div>
            <label htmlFor="subPlanchosen">
              Which type of sub-plan are you subscribing?
            </label>

            {subPlanData.map((item) => (
              <label key={item.month}>
                <input
                  type="radio"
                  id={item.month}
                  name="subPlanchosen"
                  value={item.month}
                  required
                  // onChange={handlesubPlanchosenChange}
                />
                {item.month} Month plan (Price Rs. {item.price})
              </label>
            ))}
          </div>

          <div>
            <label htmlFor="paymentType">Payment Type:</label>
            <label>
              <input
                type="radio"
                id="hbl"
                name="paymentType"
                value="HBL"
                required
                onChange={handlepaymentTypeChange}
                defaultChecked
              />
              HBL Account - 01277901550903
            </label>
            <label>
              <input
                type="radio"
                id="easypaisa"
                name="paymentType"
                value="Easypaisa"
                required
                onChange={handlepaymentTypeChange}
              />
              Easypaisa - 0341-6331041
            </label>
            <label>
              <input
                type="radio"
                id="iban"
                name="paymentType"
                value="IBAN"
                required
                onChange={handlepaymentTypeChange}
              />
              IBAN - PK24HABB0001277901550903
            </label>
          </div>

          <div>
            <label htmlFor="paymentReciept">Attach Payment Proof</label>
            <input
              type="file"
              id="paymentReciept"
              name="paymentReciept"
              required
              onChange={handlepaymentRecieptChange}
            />
          </div>

          <button type="submit" className="loginButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Booking;
