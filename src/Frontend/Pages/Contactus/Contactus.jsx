import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InstagramIcon from '@mui/icons-material/Instagram';

import { contactUs } from '../../../Services/ContactUs';
import './Contactus.css'

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e){
    e.preventDefault();

    console.log(formData);

    try {
      const result = await contactUs(formData);
      console.log('Email Sent Successfully:', result);
  } catch (error) {
      console.error('Error creating appointments:', error);
  }
  }


  return (
    <div>
      <div className="contactBody">


        <div className="bodyLeft">


          <div className="leftTop">
            <div className="leftTopHeading"><h2>How Can We Help?</h2></div>

            <div className="leftTopContainer">
              <div className="leftTopContainerLeft">
                <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>

                <div className="headingContact">
                  <div className="heading">
                    <h2>Product Suport</h2>
                  </div>
                  <div className="contactInfo">
                    <p>admin@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="leftTopContainerRight">
                <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>
                <div className="headingContact">
              <div className="heading">
                <h2>Product Suport</h2>
              </div>
              <div className="contactInfo">
                <p>admin@gmail.com</p>
              </div>
              </div>
              </div>


            </div>
            <div className="leftTopContainer">
              <div className="leftTopContainerLeft">
                <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>

                <div className="headingContact">
                  <div className="heading">
                    <h2>Product Suport</h2>
                  </div>
                  <div className="contactInfo">
                    <p>admin@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="leftTopContainerRight">
                <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>
                <div className="headingContact">
              <div className="heading">
                <h2>Product Suport</h2>
              </div>
              <div className="contactInfo">
                <p>admin@gmail.com</p>
              </div>
              </div>
              </div>


            </div>

            
          </div>




          <div className="leftBottom">
            <div className="leftBottomHeading">
              <h1>Contact Us</h1>
            </div>
            <div className="leftTopContainer"> 
            <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>
                <div className="headingContact">
              <div className="heading">
                <h2>Product Suport</h2>
              </div>
              <div className="contactInfo">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis saepe dolorum aspernatur animi consequuntur, repudiandae dicta aliquid veniam est illum mollitia excepturi, natus, aliquam magnam rem quae fugiat temporibus minus!</p>
              </div>
              </div>
            </div>
            <div className="leftTopContainer">
            <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>
                <div className="headingContact">
              <div className="heading">
                <h2>Product Suport</h2>
              </div>
              <div className="contactInfo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum nemo eveniet sed facilis recusandae odit ea officia voluptatibus reiciendis vel culpa consequatur autem, necessitatibus a quae sunt illo delectus!</p>
              </div>
              </div>
            </div>
          </div>


        </div>




        <div className="bodyRight" style={{background: 'red',padding: '0px'}}>
          <div style={{textAlign: 'center',flex: '1',marginTop: '2rem'}}>
        <h3 class="card-title text-center m-auto" style={{fontSize: '2.5rem'}}>Contact Us</h3>
        </div>
        <form onSubmit={handleSubmit} id="contactusForm">
          <div className="form-group m-3">
            <label htmlFor="name" style={{display: 'block', margin:'0', color: 'Black', fontSize: '1.5rem'}}>name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div className="form-group m-3">
            <label htmlFor="email" style={{display: 'block', margin:'0', color: 'Black', fontSize: '1.5rem'}}>Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput2" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
          </div>

          <div className="form-group  m-3">
            <label htmlFor="message" style={{display: 'block', margin:'0', color: 'Black', fontSize: '1.5rem'}}>Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" name="message" placeholder="Your Message here" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="loginButton">
            Submit
          </button>
        </form>
           

        </div>




      </div>

      <div className="connect">
      <div className="leftTopHeading"><h2>How Can We Help?</h2></div>
      <div className="leftTopHeading"><h5>Follow us on</h5></div>
      <div className="logos">
        <div className="logo">
               <DashboardIcon className="icon" />
        </div>
        <div className="logo">
     <InstagramIcon className="icon" />
        </div>
        <div className="logo">
     <DashboardIcon className="icon" />
        </div>
        <div className="logo">
     <DashboardIcon className="icon" />
        </div>
      </div>

      </div>
    </div>
  );
}

export default Contactus;
