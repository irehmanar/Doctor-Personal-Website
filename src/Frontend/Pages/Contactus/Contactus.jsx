import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Navbar from '../../Components/Navbar/Navbar'
import Snackbar from '@mui/material/Snackbar';
import Footer from '../../Components/Footer/Footer'
import { contactUs } from '../../../Services/ContactUs';
import './Contactus.css'

function Contactus() {
  const [message, setMessage] = useState(""); // Declare message and setMessage
  const [displayAlert, setDisplayAlert] = useState(false); // Declare message and setMessage

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
      setMessage("Email Sent Successfully");
      setDisplayAlert(true)
      console.log('Email Sent Successfully:', result);
  } catch (error) {
      console.error('Error creating appointments:', error);
      setMessage("Error creating appointments");
      setDisplayAlert(true)
  }
  }





  
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setDisplayAlert(false)
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Navbar/>
      {displayAlert?
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClick={handleClose}
        message= {message}
        key={vertical + horizontal}
      />:''}
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
                <h2>Service Suport</h2>
              </div>
              <div className="contactInfo">
                <p>service@gmail.com</p>
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
                    <h2>Registration Suport</h2>
                  </div>
                  <div className="contactInfo">
                    <p>login@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="leftTopContainerRight">
                <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>
                <div className="headingContact">
              <div className="heading">
                <h2>General Suport</h2>
              </div>
              <div className="contactInfo">
                <p>yourdietplan@gmail.com</p>
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
                <h2>Diet Plan Suport</h2>
              </div>
              <div className="contactInfo">
              <p>If you have any questions about your diet or need personalized nutrition advice, our expert nutritionist is here to help. Whether you're looking to improve your eating habits, manage a health condition, or simply enhance your overall well-being</p>
              </div>
              </div>
            </div>
            <div className="leftTopContainer">
            <div className="leftTopIcon">
                  <DashboardIcon className="icon" />
                </div>
                <div className="headingContact">
              <div className="heading">
                <h2>Consultation Suport</h2>
              </div>
              <div className="contactInfo">
                <p>We provide customized guidance to meet your unique needs. Reach out to us today for support on your journey to better health and vitality!</p>
              </div>
              </div>
            </div>
          </div>


        </div>




        <div className="bodyRight" style={{padding: '0px'}}>
          <div style={{textAlign: 'center',flex: '1',marginTop: '2rem'}}>
        <h3 class="card-title text-center m-auto" style={{fontSize: '2.5rem'}}>Contact Us</h3>
        </div>
        <form onSubmit={handleSubmit} id="contactusForm">
          <div className="form-group m-3">
            <label htmlFor="name" style={{display: 'block', margin:'0', color: 'Black', fontSize: '1.5rem'}}>Name</label>
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
               <WhatsAppIcon className="icon" />
        </div>
        <div className="logo">
     <InstagramIcon className="icon" />
        </div>
        <div className="logo">
     <GitHubIcon className="icon" />
        </div>
        <div className="logo">
     <FacebookIcon className="icon" />
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Contactus;
