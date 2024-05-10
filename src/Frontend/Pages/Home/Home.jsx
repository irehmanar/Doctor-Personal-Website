import React, { useEffect, useRef,useState} from "react";
import "./Home.css";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomePricing from "../../Components/HomePricing/HomePricing";
import CountUp from 'react-countup';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInLeft"); // Add animation class on intersect
        }
      },
      {
        threshold: 0.5, // This means the animation triggers when 50% of the item is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up for the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.9,
    });

    observer.observe(document.querySelector("#counts")); // observe the element with id "counts"

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="homecontainer">
        <HomeSlider />
        <h1 className="mt-5 mb-5 text-center">What we Offer</h1>
        <div className="features slide-in-elliptic-top-fwd">
          <HomeFeatures />
        </div>
        <h1 className="mt-5 mb-4 text-center">Our Pricing</h1>
        <div className="features">
          <HomePricing />
        </div>




        <section id="services" class="services">
        <div class="container" data-aos="fade-up">
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
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href="">Lead Generation</a>
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
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>
                  <a href="">Life Insurance</a>
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
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href="">Quality Assurance</a>
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
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-world"></i>
                </div>
                <h4>
                  <a href="">Inbound Customer Services</a>
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
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-slideshow"></i>
                </div>
                <h4>
                  <a href="">Transcriptions</a>
                </h4>
                <p>
                  Accurate and reliable transcription services for your business
                  needs.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-arch"></i>
                </div>
                <h4>
                  <a href="">Customer Relationship Management</a>
                </h4>
                <p>
                  Build and nurture strong customer relationships with our CRM
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section id="counts" class="counts">
            <div class="container" data-aos="fade-up">
                <div class="row no-gutters">
                    <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
                    <div class="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                        <div class="content d-flex flex-column justify-content-center">
                            <h3>A Culture that Screams Success</h3>
                            <p>
                                At WORK, our clients are always our top priority — but we firmly believe in creating an
                                environment that's
                                more than
                                just a place to work. Building a positive company culture has always been important to
                                us, and as a result,
                                our devoted
                                employees spare no effort to achieve the desired goals. We are experts in
                            </p>
                            <div class="row">
                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <i class="bi bi-emoji-smile"></i>
                                        <CountUp
  start={isVisible ? 0 : null}
  end={97}
  duration={2}
  style={{ display: isVisible ? 'block' : 'none' }}
/>

                                        <p><strong>Happy Clients</strong> We take pride in delivering smiles to
                                            satisfied clients through our
                                            exceptional service and commitment to their success.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <i class="bi bi-journal-richtext"></i>
                                        <CountUp
  start={isVisible ? 0 : null}
  end={124}
  duration={2}
  style={{ display: isVisible ? 'block' : 'none' }}
/>
                                        <p><strong>Projects</strong> Over successful projects completed, each reflecting
                                            our dedication to
                                            quality and innovation.</p>
                                    </div>
                                </div>

                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <i class="bi bi-clock"></i>
                                        <CountUp
  start={isVisible ? 0 : null}
  end={5}
  duration={2}
  style={{ display: isVisible ? 'block' : 'none' }}
/>
                                        <p><strong>Years of Experience</strong> With years of combined experience, our
                                            team brings unparalleled
                                            expertise to every project.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <i class="bi bi-award"></i>
                                        <CountUp
  start={isVisible ? 0 : null}
  end={10}
  duration={2}
  style={{ display: isVisible ? 'block' : 'none' }}
/>
                                        <p><strong>Awards</strong> Recognized with awards for excellence, affirming our
                                            commitment to
                                            exceptional performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        <section id="team" class="team">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Team</h2>
                    <p>Check our Team</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="100">
                            <div class="member-img">
                                <img src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="200">
                            <div class="member-img">
                                <img src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="300">
                            <div class="member-img">
                                <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="400">
                            <div class="member-img">
                                <img src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        <section id="about" class="about">

            <div class="container" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt="iage"/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                        <h3>Telemarketing Solutions Tailored for Each Business.</h3>
                        <p class="fst-italic">
                            A leadership team with a collective experience of 120 years in the industry, managing big
                            businesses, building
                            large
                            teams, and establishing relationships. WORK has taken the lead in Contact Centers,
                            supporting customer
                            interactions
                            across a range of channels, including Web collaboration, Web chat, and the emerging adoption
                            of social media
                            interactions, making it matchless.
                        </p>
                        {/* <!-- Rounded tick marks for bullet points --> */}
                        <ul class="tick-mark-list">
                            <li>Lead generation</li>
                            <li>Life Insurance Sales</li>
                            <li>Inbound and Customer Services</li>
                            <li>Transcriptions</li>
                        </ul>
                        {/* <!-- "Get Free Consultation" button --> */}
                        <a href="#" class="btn btn-black">Get Free Consultation</a>
                    </div>
                </div>
            </div>
        </section>


      </div>
      {/* <div ref={ref} className="elementToAnimate">
        <div className="features">
          <HomePricing />
        </div>
      </div> */}


    </>
  );
}
