import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
        {
          name: "Abdul Rehman",
        },
        {
          cnic: 365021862555,
        },
        {
          age: 20,
        },
        {
          gender: "female",
        },
        {
          number: 3024917963,
        },
        {
          email: "abrehman4163@gmail.com",
        },
        {
          weight: 25,
        },
        {
          occupation: "Doctor",
        },
        {
          food: "Biryani",
        },
        {
          cook: "Mother",
        },
        {
          wrist: 14,
        },
        {
          height: 158,
        },
        {
          notfood: "Vegetable",
        },
      ]);  

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
