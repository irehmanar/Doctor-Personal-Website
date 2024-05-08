import React from "react";
// import './PricePlanner.css'
function plans({Data,Heading,Description}) {
  console.log(Data);
  return (
    <section className="text-gray-600 body-font min-h-screen m-5" style={{ marginTop: '60px' }}>
      <div className="container px-5 py-24 mx-auto flex flex-col items-center">
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
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.plan}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.price}</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">{item.discountprice}</td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default plans;
