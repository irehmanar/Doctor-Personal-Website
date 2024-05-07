import React from 'react';
import './HomeFeatures.css'
function HomeFeatures() {

    const cardData = [
        {
          imgSrc: 'https://images.pexels.com/photos/53404/scale-diet-fat-health-53404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Weight Management',
          description: 'Weight loss involves reducing body weight, typically through a combination of dietary changes and increased physical activity. ',
          listItems: ['Weight Loss', 'Weight Gain']
        },
        {
          imgSrc: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Disease Management',
          description: 'Disease management through diet involves utilizing nutrition as a therapeutic tool to manage or mitigate the symptoms and progression of various health conditions.',
          listItems: ['Hyper Tension', 'Diabetes', 'Kindey and Stomach Disorders','Liver Disorders(Hepatitis A,B,C)','Arthritis,Gout','PCOS']
        },
        {
          imgSrc: 'https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Workout Plans',
          description: 'A diet plan specifies a nutritional strategy designed to meet specific health or fitness objectives, typically by regulating calorie intake and macronutrient proportions',
          listItems: ['Fat Loss', 'Muscle Gain', 'Pre and Post WorkOut Diet']
        },
        {
            imgSrc: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Nutritional  Deficiencies',
            description: 'Remedies include diversifying diet with nutrient-dense foods and, when needed, supplementation, guided by healthcare professionals, to ensure optimal health outcomes.',
            listItems: ['Anemia', 'Osteoporosis', 'Vitamins and Minerals Deficiencies']
        },
        {
          imgSrc: 'https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Child Nutrition',
          description: 'Plans for',
          listItems: ['Lactating Mothers (Pregnancy Plans)', 'Infants', 'Toddlers','School going Child','Skin and Hair Problems']
        }
      ];
  return (
<>
    {cardData.map((card) => (
        <div style={{ width: '18rem' }} className="card m-5 mt-auto">
        <img className="card-img-top" src={card.imgSrc} alt="Card image cap" />
        {/* <div className="card-body"> */}
          <h5 className="card-title my-5 mx-auto">{card.title}</h5>
          {/* <p className="card-text">{card.description}</p> */}
        {/* </div> */}
        {card.listItems.map((item)=>(
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{item}</li>
          
        </ul>
        ))}
        <div className="card-body">
          <button href="#" className="card-link">Book Appointment</button>
        </div>
      </div>
      ))}
      </>



  );
}

export default HomeFeatures;
