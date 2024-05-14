import React from "react";
import './PricePlanner.css'
import { Link } from "react-router-dom";
function plans({Data,Heading,Description}) {
  console.log(Data);
  return (
    <section className="text-gray-600 body-font  m-3 customPlanner bg-body-secondary" style={{ padding: '0px', width: '80%'}}>
      <div className="container flex flex-col items-center" style={{  minheight: '70%', padding: '2rem'}}>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            {Heading}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4 mb-0">
          {Description}
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Month
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Diet Plan
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Actual Price
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Discount Price
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>

              {Data.map((item) => (
                <tr>
                  {/* <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td> */}
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.month}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.numberOfDietPlans}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.price}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.discount}</td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
        <Link to="/Booking" style={{ textDecoration: "none" }}>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default plans;
