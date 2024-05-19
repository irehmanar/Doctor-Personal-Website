import React from 'react'
import { Link } from 'react-router-dom';
import './HomeHero.css'
function HomeHero() {
  return (
    <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div class="col-xl-6 col-lg-8">
                <h1>Boost Your Health with <span>Your Diet Doctor</span></h1>
                <h2>Discover the Path to Vibrant Living Through Nutrition</h2>
            </div>
        </div>
        <div class="col-xl-2 col-md-4">
            <div class="icon-box" id="cost-savings">
                <i class="ri-hand-coin-line" style={{fontsize: '36px'}}></i>
                <h3> <Link to={`/Services`}>View Services</Link></h3>
                <p class="info" style={{display: 'none'}}>We believe in providing cost-effective solutions with no compromise on quality.</p>
            </div>
        </div>

        <div class="col-xl-2 col-md-4">
            <div class="icon-box" id="increase-sales">
                <i class="ri-line-chart-line" style={{fontsize: '36px'}}></i>
                <h3> <Link to={`/Chatbot`}>ChatBot</Link></h3>
                <p class="info" style={{display: 'none'}}>Our experts apply tested market strategies tailored to your business to bring more revenue.</p>
            </div>
        </div>
        <div class="col-xl-2 col-md-4">
            <div class="icon-box" id="customer-satisfaction">
                <i class="ri-heart-line" style={{fontsize: '36px'}}></i>
                <h3> <Link to={`/Aboutus`}>About Us</Link></h3>
                <p class="info" style={{display: 'none'}}>The satisfaction of our clients is our utmost priority and this truly is the basis of our success.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default HomeHero
