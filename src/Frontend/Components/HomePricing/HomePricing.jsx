import React from 'react'
import './HomePricing.css'

function HomePricing() {
    const Data = [
        {
          title: 'Basic Plans',
          listItems: ['Weight Management plan', ' One diet plan customized according to your nutritional  needs and body requirements','Workout plan customized according to your body type', ' No separate cooking required',' Weekly follow-ups', ' Supplementation guide - if required','Daily reporting and progress check']
        },
        {
          title: 'Therapeutic plans',
          listItems: [' Disease management plan', ' PCOS, Cholesterol, Hypertension, Uric Acid, Diabetes,Celiac diseases etc are treated with natural diet without medications.', 'Updating plan according to medical reports','Free weekly follow-up','Free customized workout plans according to your medical condition.',' Supplementation guide - if required','Daily reporting and progress check']
        },
        {
          title: 'Premium plans',
          listItems: [' Weekly updation in plan', ' Different delicious macro counted recipes', 'Separate cooking required','   No need to eat the same thing for a whole month', '  Lots of alternatives will be provided as per choice',' Daily follow-ups', 'Customized workout plans','  Supplementation guide - if req','Daily reporting and progress check.']
        }
      ];
  return (
    
    <section class="text-gray-600 itembox body-font overflow-hidden p5">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-row justify-content-around align-items-around flex-wrap grap-5 m-5">

      {Data.map((data, index) => (
  <div className="xl:w-1/4 md:w-1/2 w-full itembox" data-aos={`fade-${index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}`}>
    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
      <div class="border-b border-gray-200 mb-3" style={{ height: '7rem' }}>
        <h1 class="text-5xl text-gray-900 pb-4 mb-4 leading-none">{data.title}</h1>
      </div>

      {data.listItems.map((item, idx) => (
        <p key={idx} class="flex items-center text-gray-600 mb-2">
          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>{item}
        </p>
      ))}

      <button class="flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded bg-black">Book Now
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
))}






      </div>
    </div>
  </section>
  )
}

export default HomePricing
