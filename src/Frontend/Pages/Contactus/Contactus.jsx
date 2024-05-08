import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contactus.css'
function Contactus() {
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




        <div className="bodyRight">
          <div>
        <h3 class="card-title text-center mb-4">Contact Us</h3>
            <form>
              <div class="form-group m-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
              </div>
              <div class="form-group m-3">
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Your Email"/>
              </div>

              <div class="form-group  m-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
            </div>

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
