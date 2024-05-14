import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePoints.css'; // Import your component's CSS file

function HomePoints() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Main Points</h2>
        <p>Why only us</p>
      </div>
        <div className="row">
          <div
            className="image col-lg-6"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/5356314/pexels-photo-5356314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}
            data-aos="fade-right"
          ></div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-cog"></i>
              <h4>100% RESULTS</h4>
              <p> We ensure 100% Results through our diet plans</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-customize"></i>
              <h4>Condition-Specific Care</h4>
              <p>If anyone have some medical
 conditions and gaining weight due to
 them. we offer them treatment
 instead of diet plans. </p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-basket"></i>
              <h4>Personalized Nutrition Solutions</h4>
              <p>Our diet plans are designed according
 to new researches in nutritional field.
 We know that everyone is different
 and different approach of diet is
 needed for every single individual</p>
            </div>
          </div>
        </div>
      </div>








    </section>
  );
}

export default HomePoints;
