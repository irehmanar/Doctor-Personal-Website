// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './HomeSlider.css';

// // import required modules
// import { Mousewheel, Pagination } from 'swiper/modules';

// export default function HomeSlider() {
//   return (
//     <>
//       <Swiper
//         direction={'vertical'}
//         slidesPerView={1}
//         spaceBetween={70}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src="https://images.pexels.com/photos/5356314/pexels-photo-5356314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" /></SwiperSlide>
//         <SwiperSlide><img src="https://images.pexels.com/photos/7004950/pexels-photo-7004950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" /></SwiperSlide>
//         <SwiperSlide><img src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" /></SwiperSlide>
//         <SwiperSlide><img src="https://images.pexels.com/photos/2383009/pexels-photo-2383009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" /></SwiperSlide>

//       </Swiper>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/5356314/pexels-photo-5356314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Slide 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/7004950/pexels-photo-7004950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Slide 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/2383009/pexels-photo-2383009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Slide 1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
