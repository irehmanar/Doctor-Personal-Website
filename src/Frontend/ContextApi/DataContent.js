import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
        {
          patientFullName: "name",
        },
        {
          patientCNIC: 1234567891234,
        },
        {
          patientAge: 1,
        },
        {
          patientGender: "Male",
        },
        {
          patientContactNumber: 1234567890,
        },
        {
          patientEmail: "sample@gmail.com",
        },
        {
          patientCurrentWeight: 0, //6
        },
        {
          patientOccupation: " ",
        },
        {
          patientFoodChoices: "Chiken",  //8
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
