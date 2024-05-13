import React from 'react'
import './ServicesComponent.css'
import { Link } from 'react-router-dom';
function ServicesComponent({data,alignment}) {
  return (
    <section id="about" class="about">

    <div class="container" id="servicecontainer" data-aos="fade-up">
        <div class="row">
        <div className={`col-lg-6 order-1 ${alignment===1 ? 'order-lg-1' : 'order-lg-2'}`} data-aos="fade-right" data-aos-delay="100">
                <img src={data.imgSrc} class="img-fluid" alt="iage"/>
            </div>
            <div className={`col-lg-6 pt-4 pt-lg-0 order-2 ${alignment===1 ? 'order-lg-2' : 'order-lg-1'}`} data-aos="fade-left" data-aos-delay="100">
                <h3>{data.title}</h3>
                <p class="fst-italic">
                    {data.description}
                </p>
                {/* <!-- Rounded tick marks for bullet points --> */}
                <ul class="tick-mark-list">
                    {data.listItems.map((items=>(

                    <li>{items}</li>
                    )))}
                </ul>
                {/* <!-- "Get Free Consultation" button --> */}
                <Link to="/plans" className="btn btn-black">Get Consultation</Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default ServicesComponent
