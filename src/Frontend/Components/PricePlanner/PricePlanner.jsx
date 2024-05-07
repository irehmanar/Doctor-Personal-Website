import React from "react";

function plans({Data,Heading,Description}) {
  console.log(Data);
  return (
    <section class="text-gray-600 body-font min-h-screen m-5">
      <div class="container px-5 py-24 mx-auto flex flex-column">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            {Heading}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {Description}
          </p>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto">
          <table class="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Month
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Diet Plan
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Actual Price
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Discount Price
                </th>
                <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>

              {Data.map((item) => (
                <tr>
                  {/* <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td> */}
                  <td class="border-t-2 border-gray-200 px-4 py-3">{item.month}</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3">{item.plan}</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3">{item.price}</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3">{item.discountprice}</td>
                  <td class="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default plans;
