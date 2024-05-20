import React from 'react'
import { Link } from 'react-router-dom';
import './HomeServices.css'
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import RestaurantIcon from '@mui/icons-material/Restaurant';
function HomeServices() {
  return (
    <section id="services" class="services">
    <div class="container servicesblock" data-aos="fade-up">
      <div class="section-title">
        <h2>Services</h2>
        <p>Check our Services</p>
      </div>

      <div class="row flex wrapper">
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
                   <div class="icon-box"   style={{background:'#D8D8D8'}}>
            <div class="icon">
            <MonitorWeightIcon></MonitorWeightIcon>
            </div>
            <h4>
              <Link to={`/Services`}>Weight Management</Link>
            </h4>
            <p>
              Generate high-quality leads tailored to your business needs.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div class="icon-box"   style={{background:'#D8D8D8'}}>
            <div class="icon">
              <CoronavirusIcon></CoronavirusIcon>
            </div>
            <h4>
              <Link to={`/Services`}>Disease Management</Link>
            </h4>
            <p>
              Comprehensive telemarketing solutions for the insurance
              sector.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
                  <div class="icon-box"   style={{background:'#D8D8D8'}}>
            <div class="icon">
              <FitnessCenterIcon></FitnessCenterIcon>
            </div>
            <h4>
              <Link to={`/Services`}>Workout Plans</Link>
            </h4>
            <p>
              Ensure quality and compliance with our rigorous assurance
              processes.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
               <div class="icon-box"   style={{background:'#D8D8D8'}}>
            <div class="icon">
            <RestaurantIcon></RestaurantIcon>
            </div>
            <h4>
              <Link to={`/Services`}>Nutritional Deficiencies</Link>
            </h4>
            <p>
              Deliver exceptional customer experiences with our inbound
              services.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
                   <div class="icon-box"   style={{background:'#D8D8D8'}}>
            <div class="icon">
              <FamilyRestroomIcon></FamilyRestroomIcon>
            </div>
            <h4>
              <Link to={`/Services`}>Child Nutrition</Link>
            </h4>
            <p>
              Accurate and reliable transcription services for your business
              needs.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default HomeServices
