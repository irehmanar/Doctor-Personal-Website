import React from 'react'
import { Link } from 'react-router-dom';

function PlanDetail() {
  return (
    <section id="about" class="about">
               <div class="section-title">
            <h2>Features</h2>
            <p>Check our Features</p>
        </div>
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div
          class="col-lg-6 order-1 order-lg-1"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img
            src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="img-fluid"
            alt="iage"
          />
        </div>
        <div
          class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3>Personalized Nutrition Plans Tailored for Your Health.</h3>
          <p class="fst-italic">
          Our team of experienced nutritionists is dedicated to helping you achieve your health goals. We offer personalized plans that are designed to suit your individual needs, ensuring optimal health and wellness.
            </p>
          {/* <!-- Rounded tick marks for bullet points --> */}
          <ul class="tick-mark-list">
          <li>Personalized Meal Plans</li>
              <li>Weight Management</li>
              <li>Diabetes Nutrition Management</li>
              <li>Heart Health Nutrition</li>
              <li>Sports Nutrition</li>
              <li>Child Nutrition</li>
              <li>Pregnancy Nutrition</li>
              <li>Online Consultations</li>
          </ul>
          {/* <!-- "Get Free Consultation" button --> */}
          <Link class="btn btn-black" to={`/Services`}>Workout Plans</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PlanDetail
