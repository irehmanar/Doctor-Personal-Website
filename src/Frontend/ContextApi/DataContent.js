import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
        {
          patientFullName: "Abdu",
        },
        {
          patientCNIC: 365021862555,
        },
        {
          patientAge: 20,
        },
        {
          patientGender: "Male",
        },
        {
          patientContactNumber: 3024917963,
        },
        {
          patientEmail: "abrehman4163@gmail.com",
        },
        {
          patientCurrentWeight: 65, //6
        },
        {
          patientOccupation: "Dor",
        },
        {
          patientFoodChoices: "Bani",  //8
        },
        {
          patientFoodAvoid: "Vegetable",
        },
        {
          patientHomeCook: "Mother",
        },
        {
          patientWristCircumference: 14,
        },
        {
          patientHeight: 158,
        },
      
      ]);  

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
