import React, { useEffect } from 'react';
import './ServicesComponent.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesComponent({ data, alignment }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom duration
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" id="servicecontainer" data-aos="fade-up">
        <div className="row">
          <div
            className={`col-lg-6 order-1 ${alignment === 1 ? 'order-lg-1' : 'order-lg-2'}`}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img src={data.imgSrc} className="img-fluid" alt="image" />
          </div>
          <div
            className={`col-lg-6 pt-4 pt-lg-0 order-2 ${alignment === 1 ? 'order-lg-2' : 'order-lg-1'}`}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3>{data.title}</h3>
            <p className="fst-italic">{data.description}</p>
            {/* Rounded tick marks for bullet points */}
            <ul className="tick-mark-list">
              {data.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* "Get Free Consultation" button */}
            <Link to="/plans" className="btn btn-black">Get Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
