import React from "react";
import Plans from '../../Components/PricePlanner/PricePlanner';git 

function ViewPlans() {
  const Data1 = [
    {
      month: 1,
      plan: 1,
      price: 6000,
      discountprice: 6000,
    },
    {
      month: 2,
      plan: 2,
      price: 12000,
      discountprice: 10000,
    },
    {
      month: 3,
      plan: 3,
      price: 18000,
      discountprice: 16000,
    },
    {
      month: 4,
      plan: 4,
      price: 24000,
      discountprice: 19000,
    },
  ];
  const Data2 = [
    {
      month: 1,
      plan: 2,
      price: 9000,
      discountprice: 9000,
    },
    {
      month: 3,
      plan: 6,
      price: 27000,
      discountprice: 21000,
    }
  ];
  const Data3 = [
    {
      month: 1,
      plan: 4,
      price: 10000,
      discountprice: 10000,
    },
    {
      month: 2,
      plan: 8,
      price: 20000,
      discountprice: 17000,
    },
    {
      month: 4,
      plan: 16,
      price: 40000,
      discountprice: 30000,
    },
    {
      month: 5,
      plan: 16,
      price: 40000,
      discountprice: 30000,
    }
  ];
  const Description1 = "Transform your body with personalized nutrition and custom workouts for effortless weight management success!";
  const Description2 = "Achieve holistic wellness with our Disease Management Plan: natural dietary solutions, personalized workouts, and expert guidance for conditions like PCOS, cholesterol, hypertension, diabetes, and more - all without medication";
  const Description3 = "Experience holistic health with our Disease Management Plan: personalized recipes, tailored workouts, and daily support for optimal well-being and progress.";
  return (

    <div className="Plans">
    <Plans Data={Data1} Heading="Basic Plans" Description= {Description1}/>
    <Plans Data={Data2} Heading="Therapeutic Plans" Description= {Description2}/>
    <Plans Data={Data3} Heading="Premium Plans" Description= {Description3}/>
    </div>
  );
}

export default ViewPlans;
