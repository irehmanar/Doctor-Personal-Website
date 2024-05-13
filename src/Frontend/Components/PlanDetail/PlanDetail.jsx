import React from 'react'

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
          <h3>Telemarketing Solutions Tailored for Each Business.</h3>
          <p class="fst-italic">
            A leadership team with a collective experience of 120 years in
            the industry, managing big businesses, building large teams,
            and establishing relationships. WORK has taken the lead in
            Contact Centers, supporting customer interactions across a
            range of channels, including Web collaboration, Web chat, and
            the emerging adoption of social media interactions, making it
            matchless.
          </p>
          {/* <!-- Rounded tick marks for bullet points --> */}
          <ul class="tick-mark-list">
            <li>Lead generation</li>
            <li>Life Insurance Sales</li>
            <li>Inbound and Customer Services</li>
            <li>Inbound and Customer Services</li>
            <li>Inbound and Customer Services</li>
            <li>Inbound and Customer Services</li>
            <li>Inbound and Customer Services</li>
            <li>Transcriptions</li>
          </ul>
          {/* <!-- "Get Free Consultation" button --> */}
          <a href="#" class="btn btn-black">
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PlanDetail
