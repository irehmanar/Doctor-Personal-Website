import React from 'react';
import './Home.css';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import HomeFeatures from '../../Components/HomeFeatures/HomeFeatures';
import HomePricing from '../../Components/HomePricing/HomePricing';
// import Footer from '../../Components/Footer/Footer';
// import HomeTestimonials from '../../Components/HomeTestimonials/HomeTestimonials';
export default function Home() {
  return (
    <>
    <div className="homecontainer">
      <HomeSlider/>
      <h1 className='class="mt-5 mb-5 text-center'>What we Offer</h1>
      <div className="features slide-in-elliptic-top-fwd">
        <HomeFeatures/>
      </div>
     
      <h1 className='class="mt-5 mb-4 text-center'>What we Offer</h1>
      <div className="features">
      <HomePricing/>
      </div>
      {/* <HomeTestimonials/> */}
      </div>
    </>
  );
}
