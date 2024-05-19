// import React from "react";
// import Plans from '../../Components/PricePlanner/PricePlanner';
// import './ViewPlans.css'

// function ViewPlans() {
//   const Data1 = [
//     {
//       month: 1,
//       plan: 1,
//       price: 6000,
//       discountprice: 6000,
//     },
//     {
//       month: 2,
//       plan: 2,
//       price: 12000,
//       discountprice: 10000,
//     },
//     {
//       month: 3,
//       plan: 3,
//       price: 18000,
//       discountprice: 16000,
//     },
//     {
//       month: 4,
//       plan: 4,
//       price: 24000,
//       discountprice: 19000,
//     },
//   ];
//   const Data2 = [
//     {
//       month: 1,
//       plan: 2,
//       price: 9000,
//       discountprice: 9000,
//     },
//     {
//       month: 3,
//       plan: 6,
//       price: 27000,
//       discountprice: 21000,
//     }
//   ];
//   const Data3 = [
//     {
//       month: 1,
//       plan: 4,
//       price: 10000,
//       discountprice: 10000,
//     },
//     {
//       month: 2,
//       plan: 8,
//       price: 20000,
//       discountprice: 17000,
//     },
//     {
//       month: 4,
//       plan: 16,
//       price: 40000,
//       discountprice: 30000,
//     },
//     {
//       month: 5,
//       plan: 16,
//       price: 40000,
//       discountprice: 30000,
//     }
//   ];
//   const Description1 = "Transform your body with personalized nutrition and custom workouts for effortless weight management success!";
//   const Description2 = "Achieve holistic wellness with our Disease Management Plan: natural dietary solutions, personalized workouts, and expert guidance for conditions like PCOS, cholesterol, hypertension, diabetes, and more - all without medication";
//   const Description3 = "Experience holistic health with our Disease Management Plan: personalized recipes, tailored workouts, and daily support for optimal well-being and progress.";

//Api intgrated
import React, { useEffect, useState } from "react";
import Plans from '../../Components/PricePlanner/PricePlanner';
import './ViewPlans.css'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchPlanData } from '../../../Services/PlansApi'; 
import { fetchSubPlanData } from '../../../Services/SubPlansApi'; // Import the sub-plan API function
import './ViewPlans.css'
import Navbar from "../../Components/Navbar/Navbar";

function ViewPlans() {
  const [planData, setPlanData] = useState([]);
  const [subPlanData, setSubPlanData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchPlanData();
        // Ensure data is an array
        if (Array.isArray(data)) {
          setPlanData(data);

          // Fetch sub-plan data for each plan
          const subPlanDataPromises = data.map(plan => fetchSubPlanData(plan));
          const subPlanDataArray = await Promise.all(subPlanDataPromises);
          console.log("the data is: ");
          console.log(subPlanDataArray);

          // Map the sub-plan data to their respective plan IDs
          // const subPlanDataMap = data.reduce((acc, plan, index) => {
            // acc[plan] = subPlanDataArray[index];
          //   return acc;
          // }, {});

          setSubPlanData(subPlanDataArray);
        } else {
          console.error("Expected data to be an array, but received:", data);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </div>
    );
  }
  if (planData.length === 0) {
    return (
      <>
      <Navbar/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        No Plan Exist
      </div>
      
      </>
    );
  }

  if (!Array.isArray(planData)) {
    return <div>Unexpected data format</div>;
  }

  return (
<>
<Navbar/>
    <div className="Plans">
              <div class="section-title" style={{ marginTop: "2rem" }}>
          <h2>Plans</h2>
          <p>Check our Plans</p>
        </div>
   {planData.map((plan, index) => (
        <Plans
          key={index}
          Data={subPlanData[index]} // Pass corresponding subPlanData
          Heading={plan} // Assume plan object has a 'name' property for heading
          Description={plan.description || "Achieve your health goals with our comprehensive Weight Management Plan, featuring a personalized diet and workout regimen tailored to your unique needs, weekly follow-ups, and daily progress tracking."} // Fallback description
        />
      ))}
    {/* <Plans Data={Data1} Heading="Basic Plans" Description= {Description1}/>
    <Plans Data={Data3} Heading="Premium Plans" Description= {Description3}/> */}
    {/* <Plans Data={Data2} Heading="Therapeutic Plans" Description= {Description2}/> */}
    </div>
</>
  );
}

export default ViewPlans;
